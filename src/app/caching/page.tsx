import type { Metadata } from "next";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Caching Reality",
  description:
    "Understand server cache, browser cache, CDN cache, API cache, revalidation, and stale data risks in Next.js.",
  openGraph: {
    title: "Caching Reality in Next.js",
    description: "Learn when caching helps, when it hurts, and how to document cache rules.",
  },
};

const cacheLayers = ["Server cache", "Browser cache", "CDN cache", "API cache", "Revalidation", "Stale data risks"];

export default function CachingPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Caching"
          title="Caching is useful only when the freshness rules are clear"
          description="A cached response can be a performance win or a product bug. The difference is whether stale data is safe."
        />
        <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cacheLayers.map((layer) => (
            <article key={layer} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <h2 className="text-lg font-semibold text-white">{layer}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Decide ownership, freshness, invalidation, and user impact before adding cache
                behavior to critical data.
              </p>
            </article>
          ))}
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <CalloutBox title="Realistic risk: product pricing">
            A product pricing page can be dangerous to cache aggressively. A stale discount,
            incorrect tax estimate, or outdated inventory status can cost money and damage trust.
          </CalloutBox>
          <CodeBlock
            code={`// Safe split by freshness need
const price = await fetch(priceUrl, { cache: "no-store" });

const productCopy = await fetch(copyUrl, {
  next: { revalidate: 3600 },
});

// Document the rule near the data boundary:
// Pricing is dynamic. Product copy can be stale for up to one hour.`}
          />
        </section>
      </div>
    </main>
  );
}
