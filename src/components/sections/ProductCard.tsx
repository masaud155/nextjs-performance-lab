import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-lg border border-white/10 bg-ink-950/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky">{product.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">{product.description}</p>
    </article>
  );
}
