import type { MetadataRoute } from "next";
import { moods } from "@/data/moods";
import { books } from "@/data/bible";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sela.com";
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return ["/","/moods","/search","/read","/about","/how-it-works","/contact","/privacy","/terms","/disclaimer","/copyright","/accessibility",...moods.map((mood) => "/moods/" + mood.slug),...books.map((book) => "/read/" + book.slug)].map((path) => ({ url: new URL(path, base).toString(), lastModified: now })); }
