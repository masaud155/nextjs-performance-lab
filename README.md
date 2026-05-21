# The Next.js Performance Lab

A practical Next.js performance learning app showing how to avoid premature optimization, reduce JavaScript, use server components correctly, measure before optimizing, and build sustainable frontend architecture.

Repository: [masaud155/nextjs-performance-lab](https://github.com/masaud155/nextjs-performance-lab)

## Why This Project Exists

Many teams try to optimize Next.js applications too early. They add caching without data rules, mark full pages as client components, install dependencies for small browser-native jobs, chase Lighthouse scores, and create abstractions before the product needs them.

This project gives developers a concrete, deployable reference they can inspect and share. It favors simple server-rendered pages, small client islands, static educational data, accessible UI, and practical examples.

## Use this project with the Medium article:
The Next.js Performance Mistake Most Developers Make Too Early

This repository is designed as the companion project for that article. Link readers here when they want to see the patterns in a real App Router codebase.

## Features

- Server components by default
- Client components only where interactivity is required
- Interactive performance checklist
- Server vs client component examples
- Bundle size comparison lab
- Caching guidance with stale data tradeoffs
- Measurement-first mock dashboard
- Accessible navigation and semantic page structure
- Responsive SaaS-style interface
- Lightweight dependency footprint

## Pages Overview

- `/` - Landing page with project principles and feature cards
- `/mistakes` - Common performance mistakes with explanations and code examples
- `/server-vs-client` - Server component and client island guidance
- `/bundle-lab` - Bundle size examples and lighter alternatives
- `/caching` - Practical caching rules and stale data risks
- `/measurement` - Metrics dashboard and tool list
- `/checklist` - Interactive real-world optimization checklist
- `/about` - Project purpose, article connection, and contribution guidance

## Tech Stack

- Next.js App Router
- React
- TypeScript with JSX/TSX components
- Tailwind CSS
- ESLint
- Prettier

## Performance Principles

- Measure before optimizing.
- Keep pages and content server-rendered by default.
- Isolate interactivity into small client components.
- Avoid unnecessary dependencies and global state.
- Treat caching as a product data contract.
- Use dynamic imports only when a measured user flow benefits.
- Prefer maintainable architecture over clever premature abstractions.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Start Production Server

```bash
npm run start
```

## Lint

```bash
npm run lint
```

## Format

```bash
npm run format
```

## Deployment to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Keep the default framework preset as Next.js.
4. Deploy.

The app does not require environment variables or external services.

## Folder Structure

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    mistakes/
      page.tsx
    server-vs-client/
      page.tsx
    bundle-lab/
      page.tsx
    caching/
      page.tsx
    measurement/
      page.tsx
    checklist/
      page.tsx
    about/
      page.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx
    ui/
      Button.tsx
      Card.tsx
      CodeBlock.tsx
      CalloutBox.tsx
      SectionHeader.tsx
    sections/
      HeroSection.tsx
      FeatureCard.tsx
      MistakeCard.tsx
      ComparisonBlock.tsx
      MetricCard.tsx
      ProductList.server.tsx
      ProductCard.tsx
    interactive/
      ChecklistItem.tsx
      ChecklistPanel.tsx
      ProductFilter.client.tsx
  data/
    mistakes.ts
    checklist.ts
    metrics.ts
    comparisons.ts
  lib/
    utils.ts
  types/
    index.ts
```

## Screenshots

Add screenshots here after deployment:

- Home page
- Performance mistakes page
- Server vs client components page
- Checklist page

## Recommended Medium Backlink

Use this wording near the end of the article:

> I built a small companion project called The Next.js Performance Lab. It shows the mistakes from this article as practical examples, with server component patterns, bundle-size tradeoffs, caching guidance, and a checklist you can use before optimizing.

## Contribution Guide

Contributions are welcome when they improve clarity, correctness, accessibility, or practical teaching value.

Before opening a pull request:

- Keep server components as the default.
- Avoid adding dependencies unless they are clearly justified.
- Keep examples realistic and small.
- Run `npm run lint` and `npm run build`.
- Update this README when routes or core examples change.

## License

MIT. Use this project freely for learning, teaching, and article references.
