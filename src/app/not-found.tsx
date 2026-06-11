import Link from "next/link";
import { Bug, Home } from "lucide-react";

import { CallButton } from "@/components/shared/call-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center section-padding">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-brand-light">
            <Bug className="size-10 text-brand" />
          </div>
          <p className="text-sm font-semibold tracking-wider text-brand uppercase">
            404 — Page Not Found
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            This Page Has Been Eliminated
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let us help you find what you need—or call us for immediate
            pest control assistance.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link href="/">
                <Home className="size-5" />
                Back to Home
              </Link>
            </Button>
            <CallButton size="xl" />
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Need help?{" "}
            <Link href="/contact" className="font-medium text-brand hover:underline">
              Contact our team
            </Link>{" "}
            or call {siteConfig.phoneDisplay}
          </p>
        </div>
      </div>
    </section>
  );
}
