import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Layers, ArrowRight, Lock } from "lucide-react";
import { compliancePillars } from "@/lib/site-config";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "Explore Aethelys Healthcare's operational governance model, credential verification processes, SOP discipline, escalation tiers and healthcare data-sensitivity standards.",
  alternates: {
    canonical: "/quality-compliance",
  },
};

export default function QualityCompliancePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Governance &amp; Standards
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Quality, Governance &amp; Operational Compliance
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#405264]">
              In healthcare environments, trust depends on disciplined processes, clear legal
              boundaries and verifiable reporting. Our governance model defines how workforce checks,
              SOP execution and IT controls operate across every engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {compliancePillars.map((pillar, idx) => (
              <div key={pillar.title} className="enterprise-card p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
                <h2 className="mt-5 font-heading text-lg font-bold text-[#12304A]">
                  {pillar.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#405264]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Safeguards */}
      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="enterprise-card bg-[#F7FAFC] p-7">
              <FileCheck2 className="h-6 w-6 text-[#138A8A]" />
              <h2 className="mt-4 font-heading text-xl font-bold text-[#12304A]">
                Workforce Verification Boundaries
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#405264]">
                Aethelys coordinates identity, academic and employment reference verification as
                appropriate to the role and applicable law. Clinical competency evaluation, statutory
                medical privileging and patient-care supervision are retained by the client
                healthcare institution.
              </p>
            </div>

            <div className="enterprise-card bg-[#F7FAFC] p-7">
              <Layers className="h-6 w-6 text-[#138A8A]" />
              <h2 className="mt-4 font-heading text-xl font-bold text-[#12304A]">
                Structured Escalation Matrix
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#405264]">
                Every managed desk and staffing engagement establishes named operational contacts at
                both Aethelys and the client hospital, with documented timelines for shift
                replacements, incident response and periodic review meetings.
              </p>
            </div>

            <div className="enterprise-card bg-[#F7FAFC] p-7">
              <Lock className="h-6 w-6 text-[#138A8A]" />
              <h2 className="mt-4 font-heading text-xl font-bold text-[#12304A]">
                Information &amp; Infrastructure Controls
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#405264]">
                IT infrastructure engagements follow client security policies, least-privilege
                access and documented backup verification. We avoid unverified claims of absolute
                security or unconfirmed regulatory certifications.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-[#E8F0F7]/60 p-6 sm:p-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-[#12304A]">
                Need Scope &amp; Governance Documentation for Your Procurement Team?
              </h3>
              <p className="mt-1 text-sm text-[#405264]">
                Reach out to request a tailored scope-of-work overview aligned to your hospital&apos;s
                compliance checklist.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#12304A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0C2135]"
            >
              <span>Contact Governance Desk</span>
              <ArrowRight className="h-4 w-4 text-[#DDF3F1]" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
