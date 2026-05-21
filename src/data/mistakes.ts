import type { Mistake } from "@/types";

export const mistakes: Mistake[] = [
  {
    id: "measure-first",
    title: "Optimizing before measuring",
    badPractice: "Changing rendering strategies, memoizing code, or adding caching before knowing the bottleneck.",
    whyItHurts: "The team spends time on guesses while the real issue may be slow APIs, large images, or unnecessary client JavaScript.",
    betterApproach: "Capture a baseline with build output, Web Vitals, network traces, and real user flows before changing architecture.",
    code: `// Better: write down the baseline first
// Route: /products
// LCP: 3.4s
// JS sent: 182 KB
// Slowest request: GET /api/prices at 900ms
// Next action: reduce client bundle and inspect pricing API`,
    takeaway: "Performance work starts with evidence, not vibes.",
  },
  {
    id: "too-much-js",
    title: "Shipping too much JavaScript",
    badPractice: "Installing packages for small formatting, date, icon, or interaction tasks that the platform already handles.",
    whyItHurts: "Every client dependency must be downloaded, parsed, compiled, and often hydrated before the page feels ready.",
    betterApproach: "Use native browser APIs, server formatting, selective imports, and lazy loading only where it improves a measured flow.",
    code: `const formatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
});

formatter.format(new Date("2026-05-21"));`,
    takeaway: "The fastest dependency is the one you never ship to the browser.",
  },
  {
    id: "client-everywhere",
    title: "Turning everything into client components",
    badPractice: "Putting 'use client' at the top of full pages because one button, filter, or toggle needs interactivity.",
    whyItHurts: "The whole component subtree becomes eligible for client-side JavaScript and hydration work.",
    betterApproach: "Keep the page and data-heavy UI as server components, then isolate the small interactive island.",
    code: `export default function ProductsPage() {
  return (
    <main>
      <ProductList />
      <ProductFilter />
    </main>
  );
}`,
    takeaway: "Use client components like a scalpel, not a paint roller.",
  },
  {
    id: "cache-too-soon",
    title: "Adding caching too early",
    badPractice: "Caching every fetch or route because caching sounds like performance work.",
    whyItHurts: "Stale or incorrect data can become a product bug, especially for prices, inventory, permissions, and dashboards.",
    betterApproach: "Define freshness needs first, then choose dynamic rendering, revalidation, tags, or no-store intentionally.",
    code: `const price = await fetch(url, { cache: "no-store" });

const guide = await fetch(url, {
  next: { revalidate: 3600 },
});`,
    takeaway: "Caching is a data contract, not a decoration.",
  },
  {
    id: "rendering-vs-backend",
    title: "Optimizing React while the backend is slow",
    badPractice: "Adding memoization and component splitting while the API takes two seconds to return.",
    whyItHurts: "Frontend polish cannot hide a slow critical request in the main user journey.",
    betterApproach: "Measure server response time, database queries, upstream APIs, and waterfall shape before tuning React.",
    code: `// GET /api/search -> 2100ms
// DB query -> 1750ms
// React render -> 24ms`,
    takeaway: "Fix the bottleneck you have, not the one you prefer.",
  },
  {
    id: "lighthouse-chasing",
    title: "Chasing Lighthouse instead of real UX",
    badPractice: "Optimizing only for a lab score while ignoring authenticated flows, repeat visits, and slow real networks.",
    whyItHurts: "A perfect score can still hide a frustrating product if the important user path is slow or unstable.",
    betterApproach: "Use Lighthouse as one signal, then validate with Web Vitals, field data, user flows, and performance traces.",
    code: `// Ask better questions
// Can users complete checkout quickly?
// Is search responsive on a mid-range phone?
// Are important pages stable after login?`,
    takeaway: "Scores are useful. User outcomes are the point.",
  },
  {
    id: "premature-abstractions",
    title: "Adding complex abstractions too early",
    badPractice: "Building generic data layers, state managers, cache wrappers, and config systems before the product needs them.",
    whyItHurts: "Complexity slows feature work, makes performance behavior harder to reason about, and creates fragile ownership.",
    betterApproach: "Start explicit. Extract patterns only after repetition proves the abstraction will reduce real complexity.",
    code: `// Start with a direct server function or fetch call.
// Extract a shared helper only when several routes need
// the same behavior, freshness rule, and error handling.`,
    takeaway: "Simple architecture is a performance feature.",
  },
];
