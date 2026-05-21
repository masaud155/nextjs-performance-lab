import type { Metadata } from "next";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "The Next.js Performance Lab",
  description:
    "A practical project showing how to avoid premature optimization and build faster, simpler Next.js apps.",
  openGraph: {
    title: "The Next.js Performance Lab",
    description: "Learn practical Next.js performance patterns with real examples.",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What this lab teaches"
            title="Practical patterns before premature optimization"
            description="Each section focuses on a common mistake and a calmer, measurable way to solve the real problem."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
