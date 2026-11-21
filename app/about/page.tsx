import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Layers } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Aethelys Healthcare partners with hospitals and healthcare institutions to strengthen workforce readiness, outsourced support operations and IT infrastructure.",
  alternates: {
    canonical: "/about",
  },
};

const operatingPrinciples = [
  {
    title: "Clarity Before Deployment",
    description:
      "Every engagement begins with written alignment on institutional requirements, role profiles, support scope boundaries and escalation channels.",
    icon: Compass,
  },
  {
    title: "Connected Operational Disciplines",
    description:
      "Healthcare facilities depend on people, day-to-day support desks and digital infrastructure working reliably together rather than in disconnected silos.",
    icon: Layers,
  },
  {
    title: "Accountability & Respect for Clinical Authority",
    description:
      "Aethelys operates strictly as a B2B support partner. Clinical care standards, medical authority and patient-care governance remain firmly with the healthcare institution.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              About Aethelys Healthcare
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              A Practical B2B Partner for Dependable Healthcare Operations
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#405264]">
              {siteConfig.positioning}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#405264]">
              Healthcare administrators and promoters manage complex environments where staffing
              continuity, front-office coordination and technology system availability directly
              affect patient experience and clinician focus. Aethelys brings structured delivery
              processes to support those non-clinical and workforce pillars.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {operatingPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="enterprise-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold text-[#12304A]">
                    {principle.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#405264]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
                Who We Partner With
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A] sm:text-3xl">
                Designed for Hospital Leaders, Promoters &amp; Institutional Teams
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#405264]">
                Whether supporting a growing multi-specialty hospital, an outpatient clinic network,
                a diagnostic centre or a newly commissioned healthcare project, our leadership and
                delivery coordinators align our work with your internal SOPs.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Hospitals and multi-specialty healthcare groups",
                  "Clinics, diagnostic centres and day-care facilities",
                  "Healthcare entrepreneurs and hospital promoters",
                  "Government and institutional healthcare projects",
                  "Healthcare technology and infrastructure partners",
                ].map((audience) => (
                  <li key={audience} className="flex items-start gap-2.5 text-sm text-[#405264]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="enterprise-card bg-[#F7FAFC] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
                  Governance Commitment
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-[#12304A]">
                  Our Commitment to Institutional Integrity
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#405264]">
                  We believe B2B trust in healthcare is earned through realistic scope commitments,
                  verifiable delivery practices and transparent reporting—never exaggerated claims.
                </p>
                <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-[#405264]">
                  <p>
                    <strong className="text-[#12304A]">Defined Boundaries:</strong> We clearly
                    separate client clinical governance from Aethelys workforce and support
                    administration.
                  </p>
                  <p>
                    <strong className="text-[#12304A]">Structured Reviews:</strong> Service delivery
                    includes agreed review cycles, attendance tracking and escalation protocols.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#12304A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0C2135]"
                  >
                    <span>Explore Service Lines</span>
                    <ArrowRight className="h-4 w-4 text-[#DDF3F1]" />
                  </Link>
                  <Link
                    href="/quality-compliance"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#12304A] hover:bg-[#E8F0F7]"
                  >
                    <span>Quality &amp; Compliance</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
