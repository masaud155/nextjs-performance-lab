import type { Metadata } from "next";
import { MistakeCard } from "@/components/sections/MistakeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mistakes } from "@/data/mistakes";

export const metadata: Metadata = {
  title: "Performance Mistakes",
  description:
    "Common Next.js performance mistakes and practical alternatives for measuring, rendering, caching, and architecture.",
  openGraph: {
    title: "Next.js Performance Mistakes",
    description: "Avoid premature optimization with practical examples and takeaways.",
  },
};

export default function MistakesPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Mistakes"
          title="The optimization traps developers hit too early"
          description="These are the patterns that make Next.js apps feel slower, harder to debug, and harder to maintain."
        />
        <div className="mt-12 grid gap-6">
          {mistakes.map((mistake, index) => (
            <MistakeCard key={mistake.id} mistake={mistake} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
