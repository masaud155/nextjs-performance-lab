import { cn } from "@/lib/utils";
import type { Metric } from "@/types";

const statusClass = {
  healthy: "bg-mint/10 text-mint border-mint/25",
  watch: "bg-amber/10 text-amber border-amber/25",
  risk: "bg-coral/10 text-coral border-coral/25",
};

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-medium text-white/70">{metric.label}</h3>
        <span className={cn("rounded-md border px-2 py-1 text-xs font-semibold", statusClass[metric.status])}>
          {metric.status}
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold text-white">{metric.value}</p>
      <p className="mt-3 text-sm leading-6 text-white/60">{metric.description}</p>
    </article>
  );
}
