import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-mint">
            Practical Next.js performance education
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-normal text-white sm:text-6xl">
            The Next.js Performance Lab
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A practical project showing how to avoid premature optimization and build faster,
            simpler Next.js apps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/mistakes">Explore Mistakes</Button>
            <Button href="/checklist" variant="secondary">
              View Checklist
            </Button>
            <Button href="https://github.com/" variant="ghost">
              GitHub Repo
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-soft">
          <div className="grid gap-3">
            {[
              ["Server components", "Default"],
              ["Client islands", "Only where interactive"],
              ["Bundle budget", "Measured before optimized"],
              ["Caching", "Documented by data risk"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-md bg-ink-950/60 p-4"
              >
                <span className="text-sm text-white/70">{label}</span>
                <span className="text-sm font-semibold text-mint">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
