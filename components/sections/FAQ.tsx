import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/data";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ backgroundColor: "#FDFAF4" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1C2D0E" }}>
            Good questions deserve good answers
          </h2>
        </div>

        <div className="mt-12 divide-y" style={{ borderTop: "1px solid rgba(90,107,66,0.13)", borderColor: "rgba(90,107,66,0.13)" }}>
          {faq.map((item) => (
            <details
              key={item.question}
              className="group py-5"
              style={{ borderBottom: "1px solid rgba(90,107,66,0.13)" }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold [&::-webkit-details-marker]:hidden"
                style={{ color: "#1C2D0E" }}
              >
                <span className="text-[15px]">{item.question}</span>
                <ChevronDown
                  className="h-4.5 w-4.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  style={{ color: "#8A9E6C" }}
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6B7A50" }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
