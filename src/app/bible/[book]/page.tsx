import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const bookChapters: Record<string, number> = {
  genesis: 50,
  exodus: 40,
  leviticus: 27,
  numbers: 36,
  deuteronomy: 34,
  matthew: 28,
  mark: 16,
  luke: 24,
  john: 21,
  acts: 28,
};

type BookPageProps = {
  params: Promise<{
    book: string;
  }>;
};

export default async function BookPage({ params }: BookPageProps) {
  const { book } = await params;
  const bookName = book.charAt(0).toUpperCase() + book.slice(1);
  const chapterCount = bookChapters[book.toLowerCase()];

  if (!chapterCount) {
    return (
      <main className="min-h-screen bg-background">
        <Container>
          <Section>
            <h1 className="font-serif text-5xl">Book not found</h1>

            <Link
              href="/bible"
              className="mt-6 inline-block text-primary hover:text-primary-hover"
            >
              ← Back to Bible
            </Link>
          </Section>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/bible"
            className="text-sm text-foreground-secondary hover:text-foreground"
          >
            ← Bible
          </Link>

          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Bible Webs
          </Link>

          <span className="w-10" />
        </Container>
      </header>

      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Scripture Explorer
            </p>

            <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-7xl">
              {bookName}
            </h1>

            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              Select a chapter to begin reading.
            </p>

            <div className="mt-14 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
              {Array.from({ length: chapterCount }, (_, index) => {
                const chapter = index + 1;

                return (
                  <Link
                    key={chapter}
                    href={`/bible/${book}/${chapter}`}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border bg-surface text-sm font-medium transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {chapter}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}