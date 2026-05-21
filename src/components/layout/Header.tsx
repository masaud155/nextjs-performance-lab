import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { href: "/mistakes", label: "Mistakes" },
  { href: "/server-vs-client", label: "Server vs Client" },
  { href: "/bundle-lab", label: "Bundle Lab" },
  { href: "/caching", label: "Caching" },
  { href: "/measurement", label: "Measurement" },
  { href: "/checklist", label: "Checklist" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-mint text-ink-950">N</span>
          <span>Performance Lab</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
