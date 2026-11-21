import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData, workProcessSteps } from "@/lib/site-config";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aethelys Healthcare's core B2B service lines: Healthcare Staffing Solutions, Outsourced Healthcare Services, and Data Centre & Healthcare IT Solutions.",
  alternates: {
    canonical: "/services",
  },
};

const serviceComparison = [
  {
    dimension: "Primary Focus",
    staffing: "Sourcing & deploying qualified role-based personnel",
    outsourcing: "Managing defined non-clinical support functions end-to-end",
    it: "Planning, monitoring & supporting IT and data-centre infrastructure",
  },
  {
    dimension: "Typical Roles / Functions",
    staffing: "Doctors (where authorized), nurses, allied health, technicians, admin",
    outsourcing: "Front-office, patient registration, billing, records, housekeeping",
    it: "Servers, storage, network connectivity, backup/DR, HIS/EHR coordination",
  },
  {
    dimension: "Engagement Models",
    staffing: "Temporary, contract, project-based & permanent hiring support",
    outsourcing: "Shift-based managed desks, shared-service & on-site supervision",
    it: "Infrastructure consulting, managed support & partner-backed HIS coordination",
  },
  {
    dimension: "Governance & Reporting",
    staffing: "Credential checks per law, onboarding & replacement reviews",
    outsourcing: "SOP adherence, attendance & SLA indicator reporting",
    it: "Capacity & availability indicators, continuity plans & client IT alignment",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Service Portfolio
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Integrated Healthcare Workforce, Operations &amp; Infrastructure Solutions
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#405264]">
              Aethelys Healthcare organizes its B2B capabilities around three core service pillars.
              Each engagement is scoped around your facility&apos;s exact requirements, governance
              policies and service-level expectations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Scope Comparison
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A] sm:text-3xl">
              Choosing the Right Delivery Model for Your Institution
            </h2>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#12304A] text-white">
                  <th className="px-6 py-4 font-heading font-semibold">Dimension</th>
                  <th className="px-6 py-4 font-heading font-semibold">Healthcare Staffing</th>
                  <th className="px-6 py-4 font-heading font-semibold">Outsourced Services</th>
                  <th className="px-6 py-4 font-heading font-semibold">Data Centre &amp; IT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {serviceComparison.map((row) => (
                  <tr key={row.dimension} className="align-top">
                    <td className="px-6 py-4 font-semibold text-[#12304A]">{row.dimension}</td>
                    <td className="px-6 py-4 text-[#405264]">{row.staffing}</td>
                    <td className="px-6 py-4 text-[#405264]">{row.outsourcing}</td>
                    <td className="px-6 py-4 text-[#405264]">{row.it}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
                Custom Operational Alignment
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#12304A] sm:text-3xl">
                How We Structure Multi-Pillar Engagements
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#405264]">
                Many healthcare institutions start with a single urgent requirement—such as nursing
                recruitment or front-office outsourcing—and progressively align additional workflows
                as their facility scales.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-[#405264]">
                {[
                  "Single point of coordination across contracted service lines",
                  "Clear scope documentation before mobilization",
                  "Optional operations & SOP coordination aligned by project scope",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#12304A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0C2135]"
                >
                  <span>Request a Scope Discussion</span>
                  <ArrowRight className="h-4 w-4 text-[#DDF3F1]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {workProcessSteps.map((step) => (
                  <div key={step.step} className="enterprise-card bg-[#F7FAFC] p-5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#12304A] text-xs font-bold text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-3 font-heading text-base font-bold text-[#12304A]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#405264]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
