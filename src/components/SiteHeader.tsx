import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight" aria-label="Sela, beranda">Sela</Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 text-sm text-muted md:flex">
          <Link className="transition hover:text-foreground" href="/moods">Moods</Link>
          <Link className="transition hover:text-foreground" href="/search">Cari</Link>
          <Link className="transition hover:text-foreground" href="/read">Firman</Link>
          <Link className="transition hover:text-foreground" href="/about">Tentang</Link>
        </nav>
        <Link href="/search" className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">Mulai mencari</Link>
      </div>
    </header>
  );
}
