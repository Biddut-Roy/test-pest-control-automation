"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

export function ContactForm({
  className,
  title = "Request Your Free Inspection",
  description = "Fill out the form below and a GreenShield specialist will contact you within one business hour.",
  compact = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-xl border bg-brand-light/50 p-8 text-center",
          className
        )}
      >
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground">
          <Send className="size-6" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          Thank You for Reaching Out
        </h3>
        <p className="mt-2 text-muted-foreground">
          A member of our team will contact you shortly. For immediate assistance,
          please call us directly.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("rounded-xl border bg-card p-6 shadow-sm sm:p-8", className)}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" required placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" required placeholder="Smith" />
          </div>
        </div>
        <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
            />
          </div>
        </div>
        {!compact && (
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed</Label>
            <Input
              id="service"
              name="service"
              placeholder="Residential, Commercial, Termite, etc."
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="message">How Can We Help?</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Describe your pest concern..."
            rows={compact ? 3 : 4}
          />
        </div>
        <Button type="submit" variant="brand" size="lg" className="w-full">
          <Send className="size-4" />
          Submit Request
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your pest control request.
          No spam, ever.
        </p>
      </form>
    </div>
  );
}
