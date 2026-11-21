import type { Metadata } from "next";
import { Users, ClipboardCheck, Server, Briefcase, CheckCircle2 } from "lucide-react";
import { CareerInterestForm } from "@/components/forms/CareerInterestForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and healthcare deployment tracks with Aethelys Healthcare across clinical support, hospital operations and healthcare IT.",
  alternates: {
    canonical: "/careers",
  },
};

const careerTracks = [
  {
    title: "Nursing & Allied Clinical Support",
    description:
      "Roles coordinated for hospital wards, outpatient departments, diagnostic units and surgical support teams.",
    icon: Users,
  },
  {
    title: "Hospital Operations & Administration",
    description:
      "Front-office coordination, patient helpdesk, registration, medical records, billing support and shift supervisors.",
    icon: ClipboardCheck,
  },
  {
    title: "Healthcare IT & Infrastructure",
    description:
      "Systems administrators, network support specialists and HIS/EHR infrastructure coordinators supporting hospital continuity.",
    icon: Server,
  },
  {
    title: "Workforce Sourcing & Client Delivery",
    description:
      "Internal recruitment specialists, onboarding coordinators and institutional account leads.",
    icon: Briefcase,
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Careers &amp; Candidate Network
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Build a Purposeful Career Supporting Healthcare Operations
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#405264]">
              Aethelys Healthcare connects qualified healthcare professionals, hospital operations
              personnel and IT infrastructure specialists with structured roles across partner
              hospitals and healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <h2 className="font-heading text-2xl font-bold text-[#12304A]">
                  Role Tracks We Recruit For
                </h2>
                <p className="mt-2 text-sm text-[#405264]">
                  Placements and deployments are matched against active client requirements and
                  verified role qualifications.
                </p>
              </div>

              <div className="space-y-4">
                {careerTracks.map((track) => {
                  const Icon = track.icon;
                  return (
                    <div key={track.title} className="enterprise-card flex items-start gap-4 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#12304A]">
                          {track.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#405264]">{track.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-heading text-base font-bold text-[#12304A]">
                  What to Expect in Our Selection Process
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#405264]">
                  {[
                    "Role qualification and experience screening",
                    "Reference and credential verification per applicable law",
                    "Clear briefing on shift model, facility expectations and reporting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-[#405264]">
                  Recruitment desk:{" "}
                  <a
                    href={`mailto:${siteConfig.contact.careersEmail}`}
                    className="font-semibold text-[#138A8A] underline"
                  >
                    {siteConfig.contact.careersEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Candidate Form */}
            <div className="lg:col-span-7">
              <CareerInterestForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
