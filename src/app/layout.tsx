import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-performance-lab.vercel.app"),
  title: {
    default: "The Next.js Performance Lab",
    template: "%s | Next.js Performance Lab",
  },
  description:
    "A practical Next.js performance learning app about measuring first, reducing JavaScript, using server components, and avoiding premature optimization.",
  openGraph: {
    title: "The Next.js Performance Lab",
    description:
      "Practical examples for building faster, simpler, more maintainable Next.js apps.",
    url: "https://nextjs-performance-lab.vercel.app",
    siteName: "Next.js Performance Lab",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
