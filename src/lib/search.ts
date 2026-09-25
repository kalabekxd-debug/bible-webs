import { moods } from "@/data/moods";
import verses from "@/data/bible/verses.json";
import { books } from "@/data/bible";

type SearchResult = { type: "mood" | "reference"; title: string; description: string; href: string; };
type Verse = { id: string; book: string; abbr: string; name: string; chapter: number; verse: number; text: string; title?: string; };

const stopWords = new Set(["aku","saya","lagi","sedang","ingin","butuh","mau","apa","yang","untuk","tentang","dengan","ke","di","dan","atau","ini","itu","i","am","need","want"]);

function tokenize(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}: -]+/gu, " ").split(/\s+/).filter(Boolean).filter((token) => !stopWords.has(token));
}

function referenceHref(reference: string) {
  const match = reference.match(/^(.+?)\s+(\d+):(\d+)/);
  if (!match) return "/search?q=" + encodeURIComponent(reference);
  const book = books.find((item) => item.name.toLowerCase() === match[1].toLowerCase());
  return book ? "/read/" + book.slug + "/" + match[2] : "/search?q=" + encodeURIComponent(reference);
}

export function searchLocal(query: string): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const moodMatches = moods.map((mood) => {
    const haystack = [mood.name, mood.slug, mood.shortDescription, ...mood.tags, ...mood.references].join(" ").toLowerCase();
    const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
    return { mood, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, 4);

  const verseMatches = (verses as Verse[]).map((verse) => {
    const haystack = [verse.name, verse.abbr, verse.text, verse.title ?? ""].join(" ").toLowerCase();
    const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
    return { verse, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.verse.id.localeCompare(b.verse.id)).slice(0, 8);

  const moodResults = moodMatches.map(({ mood }): SearchResult => ({
    type: "mood",
    title: mood.name,
    description: mood.shortDescription,
    href: "/moods/" + mood.slug,
  }));

  const verseResults = verseMatches.map(({ verse }): SearchResult => ({
    type: "reference",
    title: verse.name + " " + verse.chapter + ":" + verse.verse,
    description: verse.text,
    href: "/read/" + books.find((book) => book.abbr === verse.abbr)?.slug + "/" + verse.chapter,
  }));

  const curatedReferenceResults = moodMatches.flatMap(({ mood }) => mood.references.slice(0, 2).map((reference): SearchResult => ({
    type: "reference",
    title: reference,
    description: mood.name + " · Ayat kurasi",
    href: referenceHref(reference),
  })));

  return [...moodResults, ...verseResults, ...curatedReferenceResults].slice(0, 12);
}
