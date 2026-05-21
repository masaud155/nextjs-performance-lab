import type { Metadata } from "next";
import { MetricCard } from "@/components/sections/MetricCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { metrics } from "@/data/metrics";

export const metadata: Metadata = {
  title: "Measurement First",
  description:
    "Learn what to measure before optimizing a Next.js application and how to identify real bottlenecks.",
  openGraph: {
    title: "Measurement First for Next.js Performance",
    description: "Measure bundle size, Web Vitals, server response, and API latency before changing architecture.",
  },
};

const tools = [
  "Next.js build output",
  "Lighthouse",
  "Web Vitals",
  "Browser Performance tab",
  "React DevTools Profiler",
  "Bundle analyzer",
];

export default function MeasurementPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Measurement"
          title="Measure the product path before optimizing the code"
          description="A useful performance investigation ties metrics to a specific route, device class, network, and user task."
        />
        <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <CalloutBox title="What to measure">
            Start with the user journey, then capture LCP, CLS, INP, route bundle size, server
            response time, API latency, image weight, and request waterfall shape.
          </CalloutBox>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <h2 className="text-xl font-semibold text-white">Tools list</h2>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              {tools.map((tool) => (
                <li key={tool} className="rounded-md bg-ink-950/50 p-3">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
