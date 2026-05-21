import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About This Project",
  description:
    "Why the Next.js Performance Lab exists, how it connects to the Medium article, and how developers can contribute.",
  openGraph: {
    title: "About the Next.js Performance Lab",
    description: "A practical project for learning measurable, maintainable Next.js performance.",
  },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="About"
          title="A companion project for practical performance thinking"
          description="This app is designed to sit beside the Medium article and give readers concrete examples they can inspect, run, and adapt."
        />
        <section className="mt-12 grid gap-6 text-base leading-8 text-white/70">
          <p>
            The project exists because many performance conversations start with the wrong move:
            cache everything, memoize everything, split everything, and chase perfect lab scores.
            This lab shows a steadier path.
          </p>
          <p>
            It helps developers understand when server components are enough, where client
            components are justified, how bundle size grows, why cache rules need product context,
            and how measurement keeps teams honest.
          </p>
          <CalloutBox title="This project is not about chasing perfect scores.">
            It is about building simple, measurable, maintainable performance.
          </CalloutBox>
          <p>
            Developers can use it as a teaching reference, a workshop starter, a pull request
            checklist, or a source of examples for their own Next.js codebases.
          </p>
          <p>
            Contributions should improve clarity, correctness, accessibility, or practical value
            without adding unnecessary runtime cost or architectural ceremony.
          </p>
        </section>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/mistakes">Read the examples</Button>
          <Button href="/checklist" variant="secondary">
            Open checklist
          </Button>
        </div>
      </div>
    </main>
  );
}
