import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const books = [
  {
    testament: "Old Testament",
    books: [
      { name: "Genesis", chapters: 50 },
      { name: "Exodus", chapters: 40 },
      { name: "Leviticus", chapters: 27 },
      { name: "Numbers", chapters: 36 },
      { name: "Deuteronomy", chapters: 34 },
    ],
  },
  {
    testament: "New Testament",
    books: [
      { name: "Matthew", chapters: 28 },
      { name: "Mark", chapters: 16 },
      { name: "Luke", chapters: 24 },
      { name: "John", chapters: 21 },
      { name: "Acts", chapters: 28 },
    ],
  },
];

export default function BiblePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Bible Webs
          </Link>

          <Link
            href="/"
            className="text-sm text-foreground-secondary hover:text-foreground"
          >
            Back home
          </Link>
        </Container>
      </header>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Scripture Explorer
            </p>

            <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-7xl">
              Explore the Bible.
            </h1>

            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              Browse Scripture by testament, book, and chapter.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {books.map((section) => (
              <div key={section.testament}>
                <h2 className="font-serif text-3xl">{section.testament}</h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.books.map((book) => (
                    <Link
                      key={book.name}
                      href={`/bible/${book.name.toLowerCase()}`}
                      className="group rounded-[20px] border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl">
                          {book.name}
                        </h3>

                        <span className="text-sm text-foreground-muted transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-foreground-secondary">
                        {book.chapters} chapters
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}