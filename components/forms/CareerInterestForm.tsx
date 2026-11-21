"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { careerEnquirySchema, type CareerEnquiryValues } from "@/lib/validations";

type CareerErrors = Partial<Record<keyof CareerEnquiryValues, string>>;

const ROLE_TRACKS = [
  { value: "nursing-clinical-support", label: "Nursing & Clinical Support Roles" },
  { value: "paramedical-technician", label: "Paramedical, Lab & Radiology Technicians" },
  { value: "hospital-admin-operations", label: "Hospital Admin, Front-Office & Billing" },
  { value: "it-infrastructure-support", label: "Healthcare IT, Network & Infrastructure" },
  { value: "corporate-coordination", label: "Service Delivery & Client Coordination" },
] as const;

export function CareerInterestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roleTrack: "nursing-clinical-support" as CareerEnquiryValues["roleTrack"],
    location: "",
    experienceSummary: "",
    consent: false,
    websiteHoneypot: "",
  });

  const [errors, setErrors] = useState<CareerErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = careerEnquirySchema.safeParse({
      ...formData,
      consent: formData.consent === true ? true : undefined,
    });

    if (!parsed.success) {
      const nextErrors: CareerErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof CareerEnquiryValues | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: parsed.data.fullName,
          organization: `Career Profile — ${parsed.data.roleTrack}`,
          workEmail: parsed.data.email,
          phone: parsed.data.phone,
          serviceRequired: "other",
          location: parsed.data.location,
          requirementDetails: `[Career Interest: ${parsed.data.roleTrack}] ${parsed.data.experienceSummary}`,
          consent: true,
          websiteHoneypot: parsed.data.websiteHoneypot,
        }),
      });

      if (!res.ok) {
        setErrors({ experienceSummary: "Unable to record your profile right now. Please try again." });
        return;
      }

      setSubmitted(true);
    } catch {
      setErrors({ experienceSummary: "Network error while submitting profile. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="enterprise-card border-[#138A8A]/40 bg-[#F7FAFC] p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-[#12304A]">
          Candidate Profile Recorded
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#405264]">
          Thank you for sharing your background with Aethelys Healthcare. Our workforce sourcing
          team reviews candidate interest submissions against active institutional roles and will
          reach out if a suitable requirement aligns with your profile.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              roleTrack: "nursing-clinical-support",
              location: "",
              experienceSummary: "",
              consent: false,
              websiteHoneypot: "",
            });
          }}
          className="mt-5 inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#12304A] hover:bg-[#E8F0F7]"
        >
          Submit Another Profile
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="enterprise-card p-6 sm:p-8">
      <h3 className="font-heading text-xl font-bold text-[#12304A]">
        Submit Candidate Interest
      </h3>
      <p className="mt-1.5 text-sm text-[#405264]">
        Share your area of specialization and location so our recruitment coordinators can consider
        your profile for upcoming institutional deployments.
      </p>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="career-hp">Leave empty</label>
        <input
          id="career-hp"
          type="text"
          tabIndex={-1}
          value={formData.websiteHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="career-name" className="block text-sm font-semibold text-[#12304A]">
            Full Name <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="career-name"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#12304A]"
          />
          {errors.fullName && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="career-email" className="block text-sm font-semibold text-[#12304A]">
            Email Address <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="career-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#12304A]"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="career-phone" className="block text-sm font-semibold text-[#12304A]">
            Phone Number <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="career-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98XXX XXXXX"
            className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#12304A]"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="career-location" className="block text-sm font-semibold text-[#12304A]">
            Preferred City / Region <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="career-location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="City, State"
            className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#12304A]"
          />
          {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="career-track" className="block text-sm font-semibold text-[#12304A]">
          Role Track <span className="text-[#138A8A]">*</span>
        </label>
        <select
          id="career-track"
          value={formData.roleTrack}
          onChange={(e) =>
            setFormData({
              ...formData,
              roleTrack: e.target.value as CareerEnquiryValues["roleTrack"],
            })
          }
          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A]"
        >
          {ROLE_TRACKS.map((track) => (
            <option key={track.value} value={track.value}>
              {track.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="career-summary" className="block text-sm font-semibold text-[#12304A]">
          Qualifications &amp; Experience Summary <span className="text-[#138A8A]">*</span>
        </label>
        <textarea
          id="career-summary"
          rows={4}
          value={formData.experienceSummary}
          onChange={(e) => setFormData({ ...formData, experienceSummary: e.target.value })}
          placeholder="Briefly describe your qualifications, certifications, hospital/IT roles handled, and availability."
          className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#12304A]"
        />
        {errors.experienceSummary && (
          <p className="mt-1 text-xs text-red-600">{errors.experienceSummary}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-2.5">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#138A8A]"
          />
          <span className="text-xs leading-relaxed text-[#405264]">
            I agree to Aethelys Healthcare processing my contact details for recruitment
            coordination in accordance with the{" "}
            <Link href="/privacy-policy" className="font-semibold text-[#138A8A] underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-xl bg-[#12304A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C2135] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4 text-[#DDF3F1]" />
              <span>Submit Candidate Interest</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
