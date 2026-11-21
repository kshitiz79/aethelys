import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, Users, Server, ClipboardCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="enterprise-grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#138A8A]/25 bg-[#DDF3F1]/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0E6E6E]">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Healthcare Services &amp; Solutions</span>
            </p>

            <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[46px] lg:leading-[1.12]">
              Stronger Healthcare Operations Start with the Right Partner.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#405264] sm:text-lg">
              Aethelys Healthcare supports hospitals and healthcare organizations with workforce
              solutions, outsourced services, and technology infrastructure support—helping teams
              operate with greater consistency, coordination and confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-[#12304A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0C2135]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4 text-[#DDF3F1]" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#12304A] transition-colors hover:border-[#138A8A] hover:bg-[#F7FAFC]"
              >
                <MessageSquare className="h-4 w-4 text-[#138A8A]" aria-hidden="true" />
                <span>Talk to Our Team</span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#12304A]">
                  <Users className="h-3.5 w-3.5 text-[#138A8A]" aria-hidden="true" />
                  <span>Workforce</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#405264]">
                  Role-based sourcing &amp; onboarding
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#12304A]">
                  <ClipboardCheck className="h-3.5 w-3.5 text-[#138A8A]" aria-hidden="true" />
                  <span>Operations</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#405264]">
                  SLA-aligned support functions
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#12304A]">
                  <Server className="h-3.5 w-3.5 text-[#138A8A]" aria-hidden="true" />
                  <span>Infrastructure</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#405264]">
                  Continuity &amp; IT coordination
                </p>
              </div>
            </div>
          </div>

          {/* Right Architecture Visual Column */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-card">
              <Image
                src="/images/hero-operations-architecture.svg"
                alt="Aethelys Healthcare B2B architecture combining Healthcare Staffing, Outsourced Services, and Data Centre IT Solutions"
                width={640}
                height={440}
                priority
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
