import { ShieldCheck, Award, Clock, Leaf, Star, BadgeCheck } from "lucide-react";

import { trustBadges } from "@/data/mock-data";
import { cn } from "@/lib/utils";

const iconMap = {
  "1": ShieldCheck,
  "2": Clock,
  "3": Award,
  "4": Star,
  "5": Leaf,
  "6": BadgeCheck,
};

type TrustBadgeProps = {
  className?: string;
  compact?: boolean;
};

export function TrustBadgeSection({ className, compact = false }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        compact
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {trustBadges.map((badge) => {
        const Icon = iconMap[badge.id as keyof typeof iconMap] ?? ShieldCheck;
        return (
          <div
            key={badge.id}
            className={cn(
              "flex items-start gap-3 rounded-xl border bg-card p-4 shadow-sm",
              compact && "flex-col items-center text-center sm:flex-row sm:text-left lg:flex-col lg:text-center"
            )}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{badge.label}</p>
              {!compact && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {badge.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TrustBadgeStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
      {trustBadges.slice(0, 4).map((badge) => (
        <span key={badge.id} className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-brand" />
          {badge.label}
        </span>
      ))}
    </div>
  );
}
