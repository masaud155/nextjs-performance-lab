import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-mint text-ink-950 hover:bg-[#6ed0aa] focus-visible:outline-mint",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.08] text-white hover:bg-white/[0.14]",
        variant === "ghost" && "text-white/80 hover:bg-white/10 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
