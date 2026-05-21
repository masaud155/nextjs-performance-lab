"use client";

export function ChecklistItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-ink-950/40 p-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 accent-mint"
      />
      <span className={checked ? "text-white" : "text-white/70"}>{label}</span>
    </label>
  );
}
