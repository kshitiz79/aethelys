import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ChevronRight,
  Layers,
  ClipboardList,
  Activity,
} from "lucide-react";
import { servicesData } from "@/lib/site-config";
import { ContactCTA } from "@/components/home/ContactCTA";

export interface ServiceScopeSection {
  title: string;
  description: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  detail: string;
}

export interface ServicePageContent {
  slug: string;
  serviceQueryValue: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  diagramSrc: string;
  diagramAlt: string;
  serviceAreasTitle: string;
  serviceAreas: ServiceScopeSection[];
  includedScope: string[];
  excludedScope: string[];
  clientResponsibilities: string[];
  aethelysResponsibilities: string[];
  deploymentModels: {
    name: string;
    description: string;
  }[];
  processTitle: string;
  processSteps: ProcessStepItem[];
  governance: {
    supervisionAndEscalation: string[];
    reportingCadence: string[];
    serviceLevelIndicators: string[];
  };
  importantNoteTitle: string;
  importantNoteBody: string;
}

interface ServicePageLayoutProps {
  content: ServicePageContent;
}

export function ServicePageLayout({ content }: ServicePageLayoutProps) {
  const siblingServices = servicesData.filter((s) => s.slug !== content.slug);

  return (
    <>
      {/* Service Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs font-medium text-[#405264]">
            <Link href="/" className="hover:text-[#12304A]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-[#12304A]">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-[#12304A]">{content.title}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full bg-[#DDF3F1] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0E6E6E]">
                {content.badge}
              </span>
              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                {content.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#405264]">
                {content.subtitle}
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#405264]">
                {content.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  href={`/contact?service=${content.serviceQueryValue}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#12304A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C2135]"
                >
                  <span>Discuss {content.title}</span>
                  <ArrowRight className="h-4 w-4 text-[#DDF3F1]" />
                </Link>
                <Link
                  href="/quality-compliance"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#12304A] transition-colors hover:bg-[#F7FAFC]"
                >
                  <span>Governance &amp; Compliance</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F7FAFC] p-3 shadow-card">
                <Image
                  src={content.diagramSrc}
                  alt={content.diagramAlt}
                  width={600}
                  height={320}
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Capabilities &amp; Scope
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A] sm:text-3xl">
              {content.serviceAreasTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.serviceAreas.map((area) => (
              <div key={area.title} className="enterprise-card p-6">
                <h3 className="font-heading text-base font-bold text-[#12304A]">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#405264]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Boundaries & Responsibility Matrix */}
      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Operational Clarity
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A] sm:text-3xl">
              Scope Boundaries &amp; Shared Accountability
            </h2>
            <p className="mt-3 text-base text-[#405264]">
              Every institutional engagement defines clear operational ownership, inclusions,
              exclusions and escalation lines before deployment begins.
            </p>
          </div>

          {/* Included vs Excluded */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200/80 bg-[#F7FAFC] p-7">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#138A8A]" />
                <h3 className="font-heading text-lg font-bold text-[#12304A]">
                  What Is Included
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {content.includedScope.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#405264]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#138A8A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F7FAFC] p-7">
              <div className="flex items-center gap-2.5">
                <XCircle className="h-5 w-5 text-[#405264]" />
                <h3 className="font-heading text-lg font-bold text-[#12304A]">
                  What Is Excluded (Unless Separately Contracted)
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {content.excludedScope.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#405264]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Client vs Aethelys Responsibilities */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="enterprise-card p-7">
              <h3 className="font-heading text-lg font-bold text-[#12304A]">
                Client Institution Responsibilities
              </h3>
              <ul className="mt-4 space-y-2.5">
                {content.clientResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#405264]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12304A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="enterprise-card border-[#138A8A]/30 p-7">
              <h3 className="font-heading text-lg font-bold text-[#12304A]">
                Aethelys Healthcare Responsibilities
              </h3>
              <ul className="mt-4 space-y-2.5">
                {content.aethelysResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#405264]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#138A8A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models & Delivery Process */}
      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
                Engagement Flexibility
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A]">
                Typical Deployment Models
              </h2>
              <div className="mt-6 space-y-4">
                {content.deploymentModels.map((model) => (
                  <div key={model.name} className="enterprise-card p-5">
                    <h3 className="font-heading text-base font-bold text-[#12304A]">
                      {model.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#405264]">
                      {model.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
                Structured Execution
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A]">
                {content.processTitle}
              </h2>
              <ol className="mt-6 space-y-3.5">
                {content.processSteps.map((step) => (
                  <li
                    key={step.step}
                    className="enterprise-card flex items-start gap-4 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#12304A] font-heading text-xs font-bold text-white">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#12304A]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#405264]">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Governance, Supervision, Reporting & SLIs */}
      <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Service Governance
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A] sm:text-3xl">
              Supervision, Reporting &amp; Service-Level Indicators
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="enterprise-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0F7] text-[#12304A]">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#12304A]">
                Supervision &amp; Escalation
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#405264]">
                {content.governance.supervisionAndEscalation.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#138A8A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="enterprise-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0F7] text-[#12304A]">
                <ClipboardList className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#12304A]">
                Reporting &amp; Review Cadence
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#405264]">
                {content.governance.reportingCadence.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#138A8A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="enterprise-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0F7] text-[#12304A]">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#12304A]">
                Relevant Service-Level Indicators
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#405264]">
                {content.governance.serviceLevelIndicators.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#138A8A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Compliance / Scope Note */}
          <div className="mt-10 rounded-2xl border border-[#12304A]/15 bg-[#E8F0F7]/70 p-6 sm:p-7">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-[#12304A]" />
              <div>
                <h3 className="font-heading text-base font-bold text-[#12304A]">
                  {content.importantNoteTitle}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#405264]">
                  {content.importantNoteBody}
                </p>
              </div>
            </div>
          </div>

          {/* Sibling Services Cross-Navigation */}
          <div className="mt-12 border-t border-slate-200 pt-10">
            <h3 className="font-heading text-lg font-bold text-[#12304A]">
              Explore Complementary Service Lines
            </h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {siblingServices.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={sibling.href}
                  className="enterprise-card-interactive flex items-center justify-between gap-4 p-5"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
                      {sibling.badge}
                    </p>
                    <p className="mt-1 font-heading text-base font-bold text-[#12304A]">
                      {sibling.title}
                    </p>
                    <p className="mt-1 text-sm text-[#405264]">{sibling.summary}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#12304A]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
