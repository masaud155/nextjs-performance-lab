import type { ReactNode } from "react";

export function CalloutBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-lg border border-mint/30 bg-mint/10 p-5">
      <h3 className="text-base font-semibold text-mint">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-white/75">{children}</div>
    </aside>
  );
}
