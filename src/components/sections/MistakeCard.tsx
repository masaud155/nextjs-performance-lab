import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Mistake } from "@/types";

export function MistakeCard({ mistake, index }: { mistake: Mistake; index: number }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-soft">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-coral">Mistake {index + 1}</p>
          <h2 className="mt-2 text-2xl font-bold text-white">{mistake.title}</h2>
        </div>
        <p className="rounded-md bg-mint/10 px-3 py-2 text-sm font-medium text-mint">
          {mistake.takeaway}
        </p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div>
          <h3 className="font-semibold text-white">Bad practice</h3>
          <p className="mt-2 text-sm leading-6 text-white/70">{mistake.badPractice}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Why it hurts</h3>
          <p className="mt-2 text-sm leading-6 text-white/70">{mistake.whyItHurts}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Better approach</h3>
          <p className="mt-2 text-sm leading-6 text-white/70">{mistake.betterApproach}</p>
        </div>
      </div>
      <CodeBlock code={mistake.code} className="mt-6" />
    </article>
  );
}
