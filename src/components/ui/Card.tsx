import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn("rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-soft", className)}
    >
      {children}
    </div>
  );
}
