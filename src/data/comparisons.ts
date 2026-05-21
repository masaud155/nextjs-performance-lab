import type { Comparison, Feature, Product } from "@/types";

export const features: Feature[] = [
  {
    title: "Measure before optimizing",
    description: "Turn performance work into a repeatable investigation instead of a guessing game.",
  },
  {
    title: "Reduce client JavaScript",
    description: "Keep static content and data-heavy UI on the server whenever possible.",
  },
  {
    title: "Use server components correctly",
    description: "Learn where component boundaries keep hydration small and predictable.",
  },
  {
    title: "Avoid caching chaos",
    description: "Choose cache rules based on data freshness, not wishful thinking.",
  },
  {
    title: "Optimize real user experience",
    description: "Balance lab tools with field signals and actual product journeys.",
  },
  {
    title: "Keep architecture simple",
    description: "Prefer explicit code until repetition proves an abstraction is worth owning.",
  },
];

export const bundleComparisons: Comparison[] = [
  {
    heavy: "Moment.js for basic dates",
    better: "Intl.DateTimeFormat",
    impact: "Avoids shipping a large date library for simple formatting.",
    example: `new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date)`,
  },
  {
    heavy: "Importing an entire icon package",
    better: "Import only the icons you render",
    impact: "Keeps unused glyphs out of the client bundle.",
    example: `import { Search } from "lucide-react";`,
  },
  {
    heavy: "Client-side charts on every route",
    better: "Lazy-load charts only on analytics screens",
    impact: "Protects content pages from paying for dashboard-only code.",
    example: `const Chart = dynamic(() => import("./Chart"), { ssr: false });`,
  },
  {
    heavy: "State library for local UI toggles",
    better: "Small component state",
    impact: "Avoids global runtime cost for isolated interaction.",
    example: `const [open, setOpen] = useState(false);`,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Server-rendered catalog",
    category: "Static",
    description: "A product grid that sends useful HTML without hydration-heavy wrappers.",
  },
  {
    id: 2,
    name: "Interactive filter island",
    category: "Interactive",
    description: "A tiny client component owns the controls while the rest of the page stays server-first.",
  },
  {
    id: 3,
    name: "Measured checkout path",
    category: "Measured",
    description: "Optimization decisions are tied to real timing and user journey evidence.",
  },
];
