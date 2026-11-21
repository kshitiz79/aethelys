import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ContactEnquirySection } from "@/components/forms/ContactEnquirySection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Aethelys Healthcare to discuss hospital staffing, outsourced healthcare services or healthcare data-centre and IT infrastructure requirements.",
  alternates: {
    canonical: "/contact",
  },
};

const enquiryStages = [
  {
    step: "01",
    title: "Requirement Review",
    description:
      "Our institutional coordination desk reviews your facility profile, service line and timeline.",
  },
  {
    step: "02",
    title: "Scope Discussion",
    description:
      "We schedule a structured discovery call with your operations, HR or IT leadership team.",
  },
  {
    step: "03",
    title: "Proposal & Deployment Plan",
    description:
      "You receive a clear scope breakdown covering responsibilities, timelines and governance.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Institutional Business Enquiries
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Discuss Your Healthcare Operations Requirements
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#405264]">
              Share your staffing, outsourced support or IT infrastructure needs below. Our B2B
              solutions team responds {siteConfig.contact.responseWindow.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left Details Column */}
            <div className="space-y-6 lg:col-span-4">
              <div className="enterprise-card p-6">
                <h2 className="font-heading text-lg font-bold text-[#12304A]">
                  Institutional Enquiry Desk
                </h2>
                <p className="mt-2 text-sm text-[#405264]">
                  {siteConfig.contact.coverageNote}
                </p>

                <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Business Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.enquiryEmail}`}
                        className="font-semibold text-[#12304A] hover:text-[#138A8A]"
                      >
                        {siteConfig.contact.enquiryEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Consultation Hours
                      </p>
                      <p className="text-[#405264]">{siteConfig.contact.consultationHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="enterprise-card p-6">
                <h2 className="font-heading text-lg font-bold text-[#12304A]">
                  What Happens Next
                </h2>
                <div className="mt-4 space-y-4">
                  {enquiryStages.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#12304A] text-xs font-bold text-white">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-[#12304A]">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#405264]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#138A8A]/25 bg-[#DDF3F1]/50 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0E6E6E]" />
                  <div>
                    <h3 className="font-heading text-sm font-bold text-[#12304A]">
                      Helpful Details to Include
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#405264]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#138A8A]" />
                        <span>Facility type (hospital, clinic, diagnostic lab)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#138A8A]" />
                        <span>Departments, role counts or IT systems in scope</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#138A8A]" />
                        <span>Target start date or RFP schedule</span>
                      </li>
                    </ul>
                    <p className="mt-3 text-xs text-[#405264]">
                      Review our{" "}
                      <Link href="/services" className="font-semibold text-[#12304A] underline">
                        service scopes
                      </Link>{" "}
                      before submitting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="enterprise-card p-8 text-sm text-[#405264]">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactEnquirySection />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
