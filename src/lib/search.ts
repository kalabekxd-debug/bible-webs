import { moods } from "@/data/moods";

type SearchResult = { type: "mood" | "reference"; title: string; description: string; href: string; };
const stopWords = new Set(["aku","saya","lagi","sedang","ingin","butuh","mau","apa","yang","untuk","tentang","dengan","ke","di","dan","atau","ini","itu","i","am","need","want"]);
function tokenize(value: string) { return value.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}: -]+/gu, " ").split(/\s+/).filter(Boolean).filter((token) => !stopWords.has(token)); }
export function searchLocal(query: string): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const moodMatches = moods.map((mood) => {
    const haystack = [mood.name, mood.slug, mood.shortDescription, ...mood.tags, ...mood.references].join(" ").toLowerCase();
    const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
    return { mood, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
  return moodMatches.flatMap(({ mood }) => {
    const moodResult: SearchResult = { type: "mood", title: mood.name, description: mood.shortDescription, href: "/moods/" + mood.slug };
    const refs = mood.references.slice(0, 2).map((reference): SearchResult => ({ type: "reference", title: reference, description: mood.name + " · Ayat kurasi", href: "/search?q=" + encodeURIComponent(reference) }));
    return [moodResult, ...refs];
  }).slice(0, 12);
}
