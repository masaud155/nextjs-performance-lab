import { Card } from "@/components/ui/Card";
import type { Feature } from "@/types";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{feature.description}</p>
    </Card>
  );
}
