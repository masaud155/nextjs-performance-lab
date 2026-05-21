import type { Metric } from "@/types";

export const metrics: Metric[] = [
  {
    label: "Bundle size",
    value: "148 KB",
    status: "watch",
    description: "Client JavaScript for the primary route.",
  },
  {
    label: "LCP",
    value: "2.1s",
    status: "healthy",
    description: "Largest Contentful Paint in the main article flow.",
  },
  {
    label: "CLS",
    value: "0.02",
    status: "healthy",
    description: "Layout movement after the page starts rendering.",
  },
  {
    label: "INP",
    value: "168ms",
    status: "healthy",
    description: "Interaction responsiveness on a mid-range device.",
  },
  {
    label: "Server response",
    value: "420ms",
    status: "watch",
    description: "Time until the app starts sending useful HTML.",
  },
  {
    label: "API latency",
    value: "930ms",
    status: "risk",
    description: "Slowest critical API in the measured checkout path.",
  },
];
