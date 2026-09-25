import Link from "next/link";
import { notFound } from "next/navigation";
import { getMood, moods } from "@/data/moods";
import { getVerseByReference } from "@/lib/bible";

type Props = { params: Promise<{ mood: string }> };
export function generateStaticParams() { return moods.map((mood) => ({ mood: mood.slug })); }

export default async function MoodPage({ params }: Props) {
  const { mood: slug } = await params;
  const mood = getMood(slug);
  if (!mood) notFound();
  const featuredReference = mood.references[0];
  const verse = getVerseByReference(featuredReference);
  return <main><section className="border-b border-border"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><Link href="/moods" className="text-sm text-muted hover:text-foreground">← Semua mood</Link><p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{mood.name} · Firman</p><h1 className="mt-5 max-w-4xl font-serif text-6xl tracking-tight sm:text-8xl">{mood.name}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{mood.intro}</p><div className="mt-10 flex flex-wrap gap-2">{mood.tags.slice(0,5).map((tag) => <span key={tag} className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted">{tag}</span>)}</div></div></section><section className="mx-auto max-w-4xl px-6 py-16 lg:py-24"><div className="rounded-[28px] border border-border bg-surface p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Scripture</p>{verse ? <div className="mt-8"><blockquote className="font-serif text-3xl leading-[1.35] sm:text-4xl">“{verse.text}”</blockquote><p className="mt-7 text-sm font-semibold text-primary">{featuredReference}</p></div> : <div className="mt-8"><p className="font-serif text-3xl leading-tight sm:text-4xl">{featuredReference}</p><p className="mt-5 text-sm leading-7 text-muted">Referensi sudah dikurasi. Teks AYT akan tampil setelah dataset di-ingest melalui script build-time.</p></div>}</div><div className="mt-12 grid gap-12 sm:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Renungkan</p><div className="mt-5 space-y-5">{mood.reflection.map((question) => <p key={question} className="font-serif text-2xl leading-snug">{question}</p>)}</div></div><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Coba lakukan</p><p className="mt-5 text-base leading-8 text-muted">{mood.nextAction}</p></div></div><div className="mt-16 border-t border-border pt-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Ayat terkait</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{mood.references.map((reference) => <Link key={reference} href={"/search?q=" + encodeURIComponent(reference)} className="rounded-2xl border border-border bg-surface p-5 text-sm font-semibold transition hover:border-primary">{reference}</Link>)}</div></div></section></main>;
}
