import type { Metadata } from "next";
import { ChecklistPanel } from "@/components/interactive/ChecklistPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { checklistSections } from "@/data/checklist";

export const metadata: Metadata = {
  title: "Real World Checklist",
  description:
    "An interactive checklist for measuring, reducing JavaScript, choosing rendering boundaries, caching safely, and avoiding architectural complexity.",
  openGraph: {
    title: "Next.js Performance Checklist",
    description: "A practical checklist to use before optimizing a Next.js app.",
  },
};

export default function ChecklistPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Checklist"
          title="Use this before optimizing"
          description="The checklist is interactive, but only this panel needs client JavaScript. The page shell stays server-rendered."
        />
        <section className="mt-12">
          <ChecklistPanel sections={checklistSections} />
        </section>
      </div>
    </main>
  );
}
