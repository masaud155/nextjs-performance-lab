"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/types";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.08] text-white"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {open ? "x" : "≡"}
        </span>
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          className="absolute left-4 right-4 top-16 rounded-lg border border-white/10 bg-ink-900 p-3 shadow-soft"
          aria-label="Mobile navigation"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
