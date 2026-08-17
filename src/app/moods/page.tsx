import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const moods = [
  {
    name: "Peace",
    description: "When your mind needs stillness.",
    tone: "bg-[#E7EDF3]",
  },
  {
    name: "Hope",
    description: "When you need something to hold on to.",
    tone: "bg-[#F0EBDD]",
  },
  {
    name: "Joy",
    description: "When gratitude fills your heart.",
    tone: "bg-[#F3E9D8]",
  },
  {
    name: "Fear",
    description: "When uncertainty feels overwhelming.",
    tone: "bg-[#E6E7EA]",
  },
  {
    name: "Grief",
    description: "When you are carrying loss.",
    tone: "bg-[#E8E5E2]",
  },
  {
    name: "Doubt",
    description: "When you are searching for clarity.",
    tone: "bg-[#E5E9E7]",
  },
];

export default function MoodsPage() {
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
            className="text-sm text-foreground-secondary transition hover:text-foreground"
          >
            Back home
          </Link>
        </Container>
      </header>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Scripture discovery
            </p>

            <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-7xl">
              How are you feeling?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-secondary">
              Start with where you are. We will guide you toward a curated
              selection of Scripture connected to your current state.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moods.map((mood) => (
              <Link
                key={mood.name}
                href={`/moods/${mood.name.toLowerCase()}`}
                className={`group min-h-56 rounded-[20px] border border-border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${mood.tone}`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.16em] text-foreground-muted">
                      Mood
                    </span>

                    <h2 className="mt-5 font-serif text-3xl">
                      {mood.name}
                    </h2>
                  </div>

                  <p className="max-w-xs text-sm leading-6 text-foreground-secondary">
                    {mood.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}