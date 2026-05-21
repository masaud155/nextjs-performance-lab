import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Built to teach practical Next.js performance habits.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/measurement" className="hover:text-white">
            Measure first
          </Link>
          <Link href="/checklist" className="hover:text-white">
            Checklist
          </Link>
          <Link href="https://github.com/" className="hover:text-white">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
