"use client";

import { useState } from "react";

const filters = ["All", "Static", "Interactive", "Measured"] as const;

export function ProductFilter() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
      <h3 className="text-lg font-semibold text-white">Small client filter island</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">
        This control is interactive, so it is a client component. The surrounding educational page
        and product list remain server-rendered.
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Product category filter">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`rounded-md border px-3 py-2 text-sm font-medium transition ${
              active === filter
                ? "border-mint bg-mint text-ink-950"
                : "border-white/15 bg-white/[0.08] text-white/70 hover:bg-white/[0.14] hover:text-white"
            }`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-white/60">Active filter: {active}</p>
    </div>
  );
}
