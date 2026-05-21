"use client";

import { useState } from "react";
import { ChecklistItem } from "@/components/interactive/ChecklistItem";
import type { ChecklistSection } from "@/types";

export function ChecklistPanel({ sections }: { sections: ChecklistSection[] }) {
  const total = sections.reduce((sum, section) => sum + section.items.length, 0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const completed = Object.values(checked).filter(Boolean).length;

  return (
    <div className="grid gap-6">
      <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Optimization readiness</h2>
            <p className="mt-1 text-sm text-white/60">
              {completed} of {total} checks completed.
            </p>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10 sm:w-56">
            <div
              className="h-full bg-mint transition-all"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
      {sections.map((section) => (
        <section key={section.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
          <div className="mt-4 grid gap-3">
            {section.items.map((item) => {
              const key = `${section.title}:${item}`;
              return (
                <ChecklistItem
                  key={key}
                  label={item}
                  checked={Boolean(checked[key])}
                  onChange={() => setChecked((value) => ({ ...value, [key]: !value[key] }))}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
