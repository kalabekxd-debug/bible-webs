import fs from "node:fs/promises";
import path from "node:path";

const API = "https://api.ayt.co/v1/bible.php";
const SOURCE = process.env.AYT_SOURCE;
if (!SOURCE) throw new Error("AYT_SOURCE is required. Set it to the public site address that uses the API.");
const root = process.cwd();
const booksFile = path.join(root, "src", "data", "bible.ts");
const outputDir = path.join(root, "src", "data", "bible");
const outputFile = path.join(outputDir, "verses.json");

function parseBooks(source) {
  const match = source.match(/const rawBooks: Array<\[string,string,string,string\]> = \[(.*?)\];/s);
  if (!match) throw new Error("Could not parse rawBooks from src/data/bible.ts");
  return [...match[1].matchAll(/\["([^"]+)","([^"]+)","(\d+)","([^"]+)"\]/g)].map((m) => ({
    name: m[1], abbr: m[2], chapters: Number(m[3])
  }));
}

async function fetchChapter(book, chapter) {
  const url = new URL(API);
  url.searchParams.set("book", book.abbr);
  url.searchParams.set("chapter", String(chapter));
  url.searchParams.set("source", SOURCE);
  const response = await fetch(url);
  if (!response.ok) throw new Error("AYT request failed for " + book.name + " " + chapter + ": HTTP " + response.status);
  return response.json();
}

function flattenChapter(payload) {
  const bookBlock = Object.values(payload)[0];
  if (!bookBlock?.data || !bookBlock?.info) return [];
  const chapterEntries = Object.entries(bookBlock.data)[0];
  if (!chapterEntries) return [];
  const chapterNumber = Number(chapterEntries[0]);
  const chapterBlock = chapterEntries[1];
  return Object.values(chapterBlock).map((entry) => ({
    id: String(entry.id),
    book: String(bookBlock.info.book_id ?? ""),
    abbr: String(bookBlock.info.book_abbr ?? ""),
    name: String(bookBlock.info.book_name ?? ""),
    chapter: chapterNumber,
    verse: Number(entry.verse),
    text: String(entry.text ?? ""),
    title: String(entry.title ?? "")
  }));
}

async function main() {
  const source = await fs.readFile(booksFile, "utf8");
  const books = parseBooks(source);
  const jobs = [];
  for (const book of books) for (let chapter = 1; chapter <= book.chapters; chapter++) jobs.push({ book, chapter });

  const verses = [];
  const concurrency = 6;
  for (let i = 0; i < jobs.length; i += concurrency) {
    const batch = jobs.slice(i, i + concurrency);
    const payloads = await Promise.all(batch.map((job) => fetchChapter(job.book, job.chapter)));
    payloads.forEach((payload) => verses.push(...flattenChapter(payload)));
    console.log("Ingested " + Math.min(i + concurrency, jobs.length) + "/" + jobs.length + " chapters");
  }

  if (verses.length === 0) throw new Error("AYT ingestion returned no verses; refusing to overwrite the dataset.");
  verses.sort((a, b) => a.book.localeCompare(b.book) || a.chapter - b.chapter || a.verse - b.verse);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputFile, JSON.stringify(verses, null, 2) + "\n", "utf8");
  console.log("Wrote " + verses.length + " verses to " + outputFile);
}

main().catch((error) => { console.error(error); process.exit(1); });
