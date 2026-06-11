import type { FAQ } from "@/data/mock-data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQSectionProps = {
  faqs: FAQ[];
  title?: string;
  description?: string;
  className?: string;
};

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  description = "Get answers to common questions about our pest control services, treatments, and scheduling.",
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-10 max-w-3xl"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
