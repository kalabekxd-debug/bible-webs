import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Explore Scripture",
    description:
      "Temukan bagian Alkitab berdasarkan kitab, tema, dan pencarian.",
    href: "/bible",
  },
  {
    number: "02",
    title: "Daily Verse",
    description:
      "Satu bagian Scripture untuk menemani perjalananmu hari ini.",
    href: "/daily-verse",
  },
  {
    number: "03",
    title: "Personal Journal",
    description:
      "Simpan refleksi pribadi dan hubungkan perjalananmu dengan Scripture.",
    href: "/journal",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border/70">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight text-foreground"
          >
            Bible Webs
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-foreground-secondary md:flex">
            <Link
              href="/bible"
              className="transition-colors hover:text-foreground"
            >
              Bible
            </Link>
            <Link
              href="/daily-verse"
              className="transition-colors hover:text-foreground"
            >
              Daily Verse
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Scripture · Reflection · Discovery
            </p>

            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
              Scripture for
              <span className="block italic text-primary">
                where you are.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-foreground-secondary sm:text-lg">
              A quieter way to discover Scripture. Explore the Bible, find a
              verse for today, and create space for personal reflection.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/moods"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition hover:bg-primary-hover"
              >
                Find a Scripture
              </Link>

              <Link
                href="/bible"
                className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Explore the Bible
              </Link>
            </div>
          </div>

          {/* Scripture Card */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />

            <article className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-8 shadow-[0_24px_80px_rgba(28,28,26,0.08)] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-foreground-muted">
                  Daily Scripture
                </span>

                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <div className="mt-16">
                <p className="font-serif text-3xl leading-[1.25] text-foreground sm:text-4xl">
                  “Be still, and know that I am God.”
                </p>

                <p className="mt-8 text-sm font-medium text-primary">
                  Psalm 46:10
                </p>
              </div>

              <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
                <span className="text-xs text-foreground-muted">
                  A moment to pause.
                </span>

                <Link
                  href="/daily-verse"
                  className="text-sm font-medium text-primary hover:text-primary-hover"
                >
                  Read today →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Mood discovery */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Mood discovery
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Start with how you feel.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-foreground-secondary">
                Bible Webs will connect your current state with a curated set
                of relevant Scripture. The recommendation system is designed
                around relevance first—not random verses from the entire Bible.
              </p>

              <Link
                href="/moods"
                className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Explore mood discovery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The experience
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              A place to return to.
            </h2>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[20px] border border-border bg-border md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.number}
              href={feature.href}
              className="group bg-background p-8 transition hover:bg-surface sm:p-10"
            >
              <span className="text-xs font-medium tracking-[0.16em] text-foreground-muted">
                {feature.number}
              </span>

              <h3 className="mt-16 font-serif text-2xl text-foreground">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-foreground-secondary">
                {feature.description}
              </p>

              <span className="mt-8 inline-block text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© 2026 Bible Webs</span>
          <span>Scripture · Reflection · Discovery</span>
        </div>
      </footer>
    </main>
  );
}