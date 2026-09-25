import verses from "../../data/bible/verses.json";
import type { BibleBook } from "@/data/bible";
import { books } from "@/data/bible";

export type BibleVerse = { id: string; book: string; abbr: string; name: string; chapter: number; verse: number; text: string; title?: string; };

export function getVerseByReference(reference: string) {
  const normalized = reference.toLowerCase().replace(/\s+/g, " ").trim();
  return (verses as BibleVerse[]).find((verse) => {
    const ref = verse.name.toLowerCase() + " " + verse.chapter + ":" + verse.verse;
    return ref === normalized;
  });
}
export function getChapter(book: BibleBook, chapter: number) { return (verses as BibleVerse[]).filter((verse) => verse.abbr === book.abbr && verse.chapter === chapter).sort((a, b) => a.verse - b.verse); }
export function getVerseCount() { return (verses as BibleVerse[]).length; }
export function getBooksByTestament(testament: BibleBook["testament"]) { return books.filter((book) => book.testament === testament); }
