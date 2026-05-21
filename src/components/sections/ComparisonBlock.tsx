import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Comparison } from "@/types";

export function ComparisonBlock({ comparison }: { comparison: Comparison }) {
  return (
    <article className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5 md:grid-cols-[1fr_1fr_1fr]">
      <div>
        <p className="text-sm font-semibold text-coral">Heavy dependency</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{comparison.heavy}</h3>
      </div>
      <div>
        <p className="text-sm font-semibold text-mint">Better alternative</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{comparison.better}</h3>
        <p className="mt-2 text-sm leading-6 text-white/70">{comparison.impact}</p>
      </div>
      <CodeBlock code={comparison.example} />
    </article>
  );
}
