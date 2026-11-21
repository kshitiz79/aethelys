import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { industriesData } from "@/lib/site-config";

export function IndustriesPreview() {
  return (
    <section className="bg-[#F7FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Industries Served
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#12304A] sm:text-3xl">
              Tailored Support Across Healthcare Institutions &amp; Networks
            </h2>
            <p className="mt-3 text-base text-[#405264]">
              We work with single-site facilities, diagnostic centres, multi-specialty hospitals
              and institutional healthcare projects.
            </p>
          </div>
          <Link
            href="/industries"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#12304A] hover:text-[#138A8A]"
          >
            <span>Explore Industries We Serve</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industriesData.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries#${industry.slug}`}
              className="enterprise-card-interactive flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0F7] text-[#12304A]">
                  <Building2 className="h-5 w-5 text-[#138A8A]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-[#12304A]">
                  {industry.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#405264]">
                  {industry.summary}
                </p>
              </div>
              <p className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#138A8A]">
                {industry.focusPillar}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
