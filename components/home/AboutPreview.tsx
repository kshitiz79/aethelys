import Link from "next/link";
import { ArrowRight, Users, Workflow, Server } from "lucide-react";

const integrationPillars = [
  {
    label: "People",
    title: "Dependable Workforce Support",
    description:
      "Role-appropriate sourcing, verification coordination and onboarding across clinical, allied and administrative positions.",
    icon: Users,
  },
  {
    label: "Processes",
    title: "Coordinated Support Functions",
    description:
      "Clear responsibilities, supervision structures and periodic reporting across front-office, records and facility operations.",
    icon: Workflow,
  },
  {
    label: "Technology",
    title: "Reliable Infrastructure Alignment",
    description:
      "Data-centre, network, backup and HIS/EHR support coordinated alongside your institutional IT and security teams.",
    icon: Server,
  },
];

export function AboutPreview() {
  return (
    <section className="bg-[#F7FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              About Aethelys Healthcare
            </p>
            <h2 className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-[#12304A] sm:text-3xl">
              A Practical Partner for Healthcare Organizations
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#405264]">
              <p>
                Healthcare institutions need dependable people, coordinated support functions and
                reliable technology infrastructure. Aethelys Healthcare aims to bring these
                requirements together through service-led solutions designed around each
                organization&apos;s operating needs.
              </p>
              <p>
                Our approach is built around understanding requirements, defining responsibilities,
                coordinating delivery and maintaining clear communication with our clients.
              </p>
            </div>

            <div className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-[#12304A]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#12304A] transition-colors hover:border-[#138A8A] hover:bg-[#DDF3F1]/30"
              >
                <span>Learn About Our Approach</span>
                <ArrowRight className="h-4 w-4 text-[#138A8A]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1">
            {integrationPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="enterprise-card flex flex-col gap-4 p-6 sm:flex-row sm:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F0F7] text-[#12304A]">
                    <Icon className="h-6 w-6 text-[#138A8A]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#138A8A]">
                      {pillar.label}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-[#12304A]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#405264]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
