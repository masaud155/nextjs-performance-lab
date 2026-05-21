import type { ChecklistSection } from "@/types";

export const checklistSections: ChecklistSection[] = [
  {
    title: "Before optimizing",
    items: [
      "Did you measure first?",
      "Do you know the real bottleneck?",
      "Is the problem frontend, backend, network, or UX?",
    ],
  },
  {
    title: "JavaScript",
    items: [
      "Can this component stay server-side?",
      "Are you shipping unnecessary dependencies?",
      "Can this logic run on the server?",
    ],
  },
  {
    title: "Rendering",
    items: [
      "Is \"use client\" really needed?",
      "Can interactivity be isolated?",
      "Are loading states clear?",
    ],
  },
  {
    title: "Caching",
    items: [
      "Is the data safe to cache?",
      "Can stale data hurt users?",
      "Is revalidation documented?",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Is the solution understandable?",
      "Can another developer maintain it?",
      "Did optimization add unnecessary complexity?",
    ],
  },
];
