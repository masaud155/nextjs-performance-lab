export type NavItem = {
  href: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Mistake = {
  id: string;
  title: string;
  badPractice: string;
  whyItHurts: string;
  betterApproach: string;
  code: string;
  takeaway: string;
};

export type ChecklistSection = {
  title: string;
  items: string[];
};

export type Metric = {
  label: string;
  value: string;
  status: "healthy" | "watch" | "risk";
  description: string;
};

export type Comparison = {
  heavy: string;
  better: string;
  impact: string;
  example: string;
};

export type Product = {
  id: number;
  name: string;
  category: "Static" | "Interactive" | "Measured";
  description: string;
};
