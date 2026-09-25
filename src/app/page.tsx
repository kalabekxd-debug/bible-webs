import Link from "next/link";
import { moods } from "@/data/moods";

const featuredMoods = moods.slice(0, 6);
const examples = ["Aku takut", "Aku cemas", "Aku bingung", "Aku butuh pengharapan"];

export default function Home() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Sela · Scripture discovery</p>
            <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Untuk apa yang sedang kamu cari.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Datang dengan pertanyaan, keadaan, atau perasaanmu. Temukan ayat yang relevan untuk dibaca, direnungkan, dan dibawa dalam langkahmu hari ini.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/search" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Mulai mencari</Link>
              <Link href="/moods" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary">Jelajahi berdasarkan perasaan</Link>
            </div>
            <p className="mt-6 text-xs leading-6 text-muted">Sela membantu menemukan Firman; Sela tidak berbicara atas nama Tuhan dan tidak mengklaim satu ayat sebagai jawaban pasti.</p>
          </div>
          <aside className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative rounded-[28px] border border-border bg-surface p-8 shadow-[0_24px_80px_rgba(28,28,26,0.08)] sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Mulai dari sini</span>
              <p className="mt-14 font-serif text-3xl leading-[1.25] sm:text-4xl">Apa yang sedang kamu bawa hari ini?</p>
              <div className="mt-12 grid gap-2">
                {examples.map((query) => <Link key={query} href={"/search?q=" + encodeURIComponent(query)} className="rounded-xl border border-border px-4 py-3 text-sm text-muted transition hover:border-primary hover:text-foreground">{query}</Link>)}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mood discovery</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">Mood adalah pintu masuk, bukan tujuan akhir.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">Pilih keadaan yang paling dekat. Sela akan membawa kamu ke ayat yang dikurasi, konteks seperlunya, satu pertanyaan refleksi, dan satu langkah kecil.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {featuredMoods.map((mood) => <Link key={mood.slug} href={"/moods/" + mood.slug} className="group bg-background p-7 transition hover:bg-surface sm:p-9"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Mood</span><h3 className="mt-12 font-serif text-2xl">{mood.name}</h3><p className="mt-4 text-sm leading-7 text-muted">{mood.shortDescription}</p><span className="mt-8 inline-block text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">Temukan ayat →</span></Link>)}
        </div>
      </section>
      <section className="border-y border-border bg-surface"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Cara kerja</p><h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">Keadaan. Firman. Langkah.</h2></div><div className="grid gap-4 sm:grid-cols-4">{[["01","Bawa","Pertanyaan atau keadaanmu."],["02","Temukan","Ayat yang relevan."],["03","Renungkan","Baca dengan konteks."],["04","Langkah","Bawa satu hal keluar."]].map(([number,title,text]) => <div key={number} className="border-l border-border pl-4"><span className="text-xs font-semibold text-muted">{number}</span><h3 className="mt-6 font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>)}</div></div></div></section>
    </main>
  );
}
