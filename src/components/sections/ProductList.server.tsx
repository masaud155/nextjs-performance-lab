import { products } from "@/data/comparisons";
import { ProductCard } from "@/components/sections/ProductCard";

export function ProductList() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
