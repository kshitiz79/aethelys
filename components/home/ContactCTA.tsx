import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ContactCTAProps {
  heading?: string;
  copy?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ContactCTA({
  heading = "Let's Build a More Dependable Healthcare Operation.",
  copy = "Share your staffing, outsourcing or infrastructure requirements with our team.",
  ctaLabel = "Send an Enquiry",
  ctaHref = "/contact",
}: ContactCTAProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#12304A] px-6 py-12 text-white shadow-lg sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#138A8A]/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#DDF3F1]">
              Institutional Enquiries
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-base text-slate-200">{copy}</p>
          </div>
          <div className="relative mt-7 shrink-0 lg:mt-0">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[#138A8A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0E6E6E]"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
