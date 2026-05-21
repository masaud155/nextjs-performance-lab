import type { Metadata } from "next";
import { ComparisonBlock } from "@/components/sections/ComparisonBlock";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { bundleComparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Bundle Size Lab",
  description:
    "Learn what increases Next.js bundle size and how to replace unnecessary client dependencies.",
  openGraph: {
    title: "Next.js Bundle Size Lab",
    description: "Practical examples for reducing client JavaScript.",
  },
};

export default function BundleLabPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Bundle lab"
          title="Reduce JavaScript before reaching for clever tricks"
          description="Most bundle wins come from shipping less code, not from hiding the same code behind a more complex architecture."
        />
        <section className="mt-12 grid gap-5">
          {bundleComparisons.map((comparison) => (
            <ComparisonBlock key={comparison.heavy} comparison={comparison} />
          ))}
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <CalloutBox title="How to inspect bundle size">
            Start with the Next.js build output, then add a bundle analyzer only when you need a
            deeper dependency breakdown. Look for client routes that ship code unrelated to the user
            task.
          </CalloutBox>
          <CalloutBox title="When dynamic imports help">
            Dynamic imports are useful for expensive UI that is not needed for initial render, such
            as dashboards, editors, maps, or charts. They are not a replacement for removing unused
            code.
          </CalloutBox>
        </section>
      </div>
    </main>
  );
}
