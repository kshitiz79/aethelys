import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aethelys Healthcare collects, uses, safeguards and retains institutional business enquiry and candidate contact information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
          Data Handling &amp; Privacy
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#12304A] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#405264]">
          Effective Governance Policy &middot; {siteConfig.brandName}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-[#405264]">
          <section>
            <h2 className="font-heading text-xl font-bold text-[#12304A]">
              1. Scope &amp; Purpose
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed">
              This Privacy Policy describes how {siteConfig.brandName} collects and handles
              information submitted through this corporate website, including institutional business
              enquiries and candidate interest submissions. This website is intended for business
              communications with healthcare institutions, partners and prospective personnel—not for
              collecting patient medical records or clinical health information.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#12304A]">
              2. Information You Provide
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed">
              When you submit an enquiry or candidate profile form, we collect only the details you
              explicitly enter, such as your full name, organization or hospital name, work email
              address, contact phone number, facility location, service category and requirement
              summary. Please do not include protected patient health information (PHI) or clinical
              case records in website enquiry forms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#12304A]">
              3. How We Use Information
            </h2>
            <ul className="mt-2.5 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Respond to institutional enquiries regarding staffing, outsourcing or IT solutions.</li>
              <li>Coordinate scope discussions, proposals and pre-engagement alignment.</li>
              <li>Review candidate interest submissions against open institutional deployment tracks.</li>
              <li>Maintain basic security, spam-prevention and operational audit records.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#12304A]">
              4. Data Sharing &amp; Confidentiality
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed">
              {siteConfig.brandName} does not sell personal or institutional contact information to
              third parties. Information is shared internally only with authorized coordination,
              sourcing or delivery personnel on a need-to-know basis, or with trusted infrastructure
              and communication service providers bound by confidentiality obligations, or where
              required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#12304A]">
              5. Retention &amp; Security Controls
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed">
              We apply reasonable administrative and technical safeguards—including server-side
              validation, transport encryption and restricted access controls—to protect submitted
              enquiry records. Information is retained only for as long as necessary to fulfill the
              requested business communication, recruitment review or applicable legal obligations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#12304A]">
              6. Your Rights &amp; Contact
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed">
              You may request access, correction or deletion of contact details previously submitted
              through this website by contacting us at{" "}
              <a
                href={`mailto:${siteConfig.contact.enquiryEmail}`}
                className="font-semibold text-[#138A8A] underline"
              >
                {siteConfig.contact.enquiryEmail}
              </a>{" "}
              or via our{" "}
              <Link href="/contact" className="font-semibold text-[#138A8A] underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
