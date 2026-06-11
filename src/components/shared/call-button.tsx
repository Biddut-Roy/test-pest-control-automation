import { siteConfig } from "@/lib/site-config";
import { formatPhoneLink } from "@/lib/utils";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CallButtonProps = {
  variant?: "default" | "outline" | "phone" | "brand";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
  label?: string;
};

export function CallButton({
  variant = "phone",
  size = "lg",
  className,
  showIcon = true,
  label,
}: CallButtonProps) {
  const phoneLabel = label ?? siteConfig.phoneDisplay;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("font-bold", className)}
    >
      <a href={`tel:${formatPhoneLink(siteConfig.phone)}`}>
        {showIcon && <Phone className="size-5" />}
        {phoneLabel}
      </a>
    </Button>
  );
}

export function FloatingCallButton() {
  return (
    <div className="fixed right-4 bottom-4 z-40 md:hidden">
      <CallButton size="lg" className="rounded-full shadow-xl" />
    </div>
  );
}
