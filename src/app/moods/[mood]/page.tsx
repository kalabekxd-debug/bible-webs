import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type MoodPageProps = {
  params: Promise<{
    mood: string;
  }>;
};

const moodContent: Record<
  string,
  {
    title: string;
    description: string;
    themes: string[];
  }
> = {
  peace: {
    title: "Peace",
    description:
      "A space for moments when your mind needs stillness and reassurance.",
    themes: ["Stillness", "Trust", "Rest"],
  },
  hope: {
    title: "Hope",
    description:
      "Scripture connected with endurance, expectation, and looking forward.",
    themes: ["Promise", "Endurance", "Future"],
  },
  joy: {
    title: "Joy",
    description:
      "A space for gratitude, celebration, and recognizing what is good.",
    themes: ["Gratitude", "Celebration", "Thankfulness"],
  },
  fear: {
    title: "Fear",
    description:
      "Scripture for moments when uncertainty or anxiety feels difficult to carry.",
    themes: ["Courage", "Trust", "Protection"],
  },
  grief: {
    title: "Grief",
    description:
      "A quieter space for loss, sorrow, comfort, and remembrance.",
    themes: ["Comfort", "Sorrow", "Presence"],
  },
  doubt: {
    title: "Doubt",
    description:
      "For moments of uncertainty, questions, and searching for clarity.",
    themes: ["Questions", "Faith", "Understanding"],
  },
};

export default async function MoodPage({ params }: MoodPageProps) {
  const { mood } = await params;
  const content = moodContent[mood.toLowerCase()];

  if (!content) {
    return (
      <main className="min-h-screen bg-background">
        <Container>
          <Section>
            <h1 className="font-serif text-5xl">Mood not found</h1>
            <Link
              href="/moods"
              className="mt-6 inline-block text-primary hover:text-primary-hover"
            >
              ← Back to moods
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
            href="/moods"
            className="text-sm text-foreground-secondary hover:text-foreground"
          >
            ← All moods
          </Link>

          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Bible Webs
          </Link>

          <span className="w-16" />
        </Container>
      </header>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Mood · Scripture
            </p>

            <h1 className="mt-5 font-serif text-6xl tracking-tight sm:text-8xl">
              {content.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground-secondary">
              {content.description}
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              {content.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-secondary"
                >
                  {theme}
                </span>
              ))}
            </div>

            <div className="mt-20 rounded-[28px] border border-border bg-surface p-8 sm:p-12">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-foreground-muted">
                Curated Scripture
              </span>

              <p className="mt-10 font-serif text-3xl leading-[1.3] sm:text-4xl">
                Scripture recommendations will appear here.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-foreground-secondary">
                This area will eventually use the mood relevance system and
                an authorized Bible source. No random Scripture is being
                presented at this stage.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
