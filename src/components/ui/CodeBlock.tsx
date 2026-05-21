import { cn } from "@/lib/utils";

export function CodeBlock({ code, className }: { code: string; className?: string }) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border border-white/10 bg-ink-950 p-4 text-sm leading-6 text-sky",
        className,
      )}
    >
      <code>{code}</code>
    </pre>
  );
}
