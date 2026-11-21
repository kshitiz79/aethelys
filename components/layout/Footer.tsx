import Link from "next/link";
import { Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { siteConfig, servicesData } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[#12304A] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#138A8A] text-white font-bold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-lg font-bold tracking-tight text-white">
                  AETHELYS
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DDF3F1]">
                  Healthcare
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              {siteConfig.positioning}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-[#DDF3F1]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#138A8A]" />
              <span>B2B Healthcare Operations &amp; Infrastructure Partner</span>
            </div>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Service Pillars
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  Services Overview
                </Link>
              </li>
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  Industries We Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Governance Links */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-compliance"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  Quality &amp; Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 transition-colors hover:text-[#DDF3F1]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Enquiry Desk */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Business Enquiries
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#DDF3F1]" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Institutional Desk
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.enquiryEmail}`}
                    className="font-medium text-white hover:text-[#DDF3F1]"
                  >
                    {siteConfig.contact.enquiryEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#DDF3F1]" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Consultation Hours
                  </p>
                  <p>{siteConfig.contact.consultationHours}</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#138A8A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E6E6E]"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Governance & Copyright Bar */}
        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="flex flex-col justify-between gap-4 text-xs text-slate-300 md:flex-row md:items-center">
            <p>
              &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/quality-compliance" className="hover:text-white">
                Governance &amp; Scope Boundaries
              </Link>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="mt-4 max-w-4xl text-[11px] leading-relaxed text-slate-400">
            Notice: Aethelys Healthcare operates strictly as a B2B healthcare services and IT
            infrastructure solutions partner for healthcare organizations and does not function as a
            hospital, clinic, or direct-to-patient emergency medical provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
