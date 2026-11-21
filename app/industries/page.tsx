import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { industriesData } from "@/lib/site-config";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "How Aethelys Healthcare supports multi-specialty hospitals, single-specialty hospitals, clinics, diagnostic centres and institutional healthcare projects.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Industries We Serve
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Operational, Workforce &amp; IT Support Across Healthcare Environments
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#405264]">
              Every healthcare setting has distinct patient flows, staffing ratios and system
              dependencies. Aethelys structures its staffing, outsourcing and technology solutions
              around each institution&apos;s operating scale and service model.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {industriesData.map((industry, index) => (
            <article
              key={industry.slug}
              id={industry.slug}
              className="enterprise-card scroll-mt-24 p-7 sm:p-9"
            >
              <div className="grid items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-[#E8F0F7] px-3 py-1 text-xs font-semibold text-[#12304A]">
                      Segment 0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-bold text-[#12304A]">
                    {industry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#405264] sm:text-base">
                    {industry.summary}
                  </p>
                  <p className="mt-4 inline-block rounded-lg bg-[#E8F0F7] px-3 py-1.5 text-xs font-semibold text-[#12304A]">
                    Primary Focus: {industry.focusPillar}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-slate-200 bg-[#F7FAFC] p-6">
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#12304A]">
                      Typical Institutional Priorities We Support
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {industry.needs.map((need) => (
                        <li key={need} className="flex items-start gap-2.5 text-sm text-[#405264]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-slate-200 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#12304A] hover:text-[#138A8A]"
                      >
                        <span>Discuss Requirements for {industry.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
