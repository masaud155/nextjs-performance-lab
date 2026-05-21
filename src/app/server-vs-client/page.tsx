import type { Metadata } from "next";
import { ProductFilter } from "@/components/interactive/ProductFilter.client";
import { ProductList } from "@/components/sections/ProductList.server";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Server vs Client Components",
  description:
    "Learn when to use server components, when to use client components, and how to keep hydration isolated.",
  openGraph: {
    title: "Server vs Client Components in Next.js",
    description: "A practical guide to reducing unnecessary client JavaScript.",
  },
};

export default function ServerVsClientPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Rendering boundaries"
          title="Keep the page server-first and isolate interactivity"
          description="Server components are the default because most content does not need to hydrate in the browser."
        />

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-coral/25 bg-coral/10 p-6">
            <h2 className="text-xl font-semibold text-white">Bad: full page marked as client</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              One interactive filter forces the entire page subtree into the client bundle.
            </p>
            <CodeBlock
              className="mt-5"
              code={`"use client";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");

  return <FullCatalog filter={filter} />;
}`}
            />
          </div>
          <div className="rounded-lg border border-mint/25 bg-mint/10 p-6">
            <h2 className="text-xl font-semibold text-white">Good: tiny client island</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Static content, data fetching, and the product grid stay server-rendered.
            </p>
            <CodeBlock
              className="mt-5"
              code={`export default function ProductsPage() {
  return (
    <>
      <ProductList />
      <ProductFilter />
    </>
  );
}`}
            />
          </div>
        </section>

        <section className="mt-10 grid gap-6">
          <CalloutBox title="When to use server components">
            Use server components for content, data loading, formatting, lists, static examples,
            documentation, and anything that does not need browser-only APIs or event handlers.
          </CalloutBox>
          <CalloutBox title="When to use client components">
            Use client components for forms, toggles, filters, menus, live validation, browser APIs,
            and interactions that require event handlers or local state.
          </CalloutBox>
        </section>

        <section className="mt-12 grid gap-6">
          <ProductList />
          <ProductFilter />
        </section>
      </div>
    </main>
  );
}
