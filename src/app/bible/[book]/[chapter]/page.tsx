import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ChapterPageProps = {
  params: Promise<{
    book: string;
    chapter: string;
  }>;
};

export default async function ChapterPage({
  params,
}: ChapterPageProps) {
  const { book, chapter } = await params;

  const bookName =
    book.charAt(0).toUpperCase() + book.slice(1);

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
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
              <span>Scripture</span>
              <span>/</span>
              <span>{bookName}</span>
              <span>/</span>
              <span>Chapter {chapter}</span>
            </div>

            <h1 className="mt-6 font-serif text-5xl tracking-tight sm:text-7xl">
              {bookName} {chapter}
            </h1>

            <div className="mt-16 rounded-[28px] border border-border bg-surface p-8 sm:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground-muted">
                Scripture text
              </p>

              <p className="mt-10 font-serif text-2xl leading-[1.6] text-foreground">
                Scripture content will appear here once Bible Webs is
                connected to an authorized Scripture source.
              </p>

              <p className="mt-8 text-sm leading-7 text-foreground-secondary">
                The interface is intentionally separated from the Scripture
                data layer so the eventual API or licensed dataset can be
                integrated without rebuilding the page.
              </p>
            </div>

            <div className="mt-8 flex justify-between">
              <Link
                href="/bible"
                className="text-sm font-medium text-primary hover:text-primary-hover"
              >
                ← All books
              </Link>

              <Link
                href={`/moods`}
                className="text-sm font-medium text-primary hover:text-primary-hover"
              >
                Find by mood →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}