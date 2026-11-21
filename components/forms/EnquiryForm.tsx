"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { SERVICE_OPTIONS, enquirySchema, type EnquiryFormValues } from "@/lib/validations";

interface EnquiryFormProps {
  defaultService?: string;
}

type FieldErrors = Partial<Record<keyof EnquiryFormValues, string>>;

function getInitialService(defaultService?: string): EnquiryFormValues["serviceRequired"] {
  const valid = SERVICE_OPTIONS.map((opt) => opt.value) as readonly string[];
  if (defaultService && valid.includes(defaultService)) {
    return defaultService as EnquiryFormValues["serviceRequired"];
  }
  return "healthcare-staffing";
}

export function EnquiryForm({ defaultService }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    workEmail: "",
    phone: "",
    serviceRequired: getInitialService(defaultService),
    location: "",
    requirementDetails: "",
    consent: false,
    websiteHoneypot: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<{
    referenceId: string;
    submittedAt: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const parsed = enquirySchema.safeParse({
      ...formData,
      consent: formData.consent === true ? true : undefined,
    });

    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryFormValues | undefined;
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
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        if (payload.fieldErrors) {
          setErrors(payload.fieldErrors);
        }
        setServerError(
          payload.message || "We could not submit your enquiry. Please review the form and try again."
        );
        return;
      }

      setSubmittedRecord({
        referenceId: payload.referenceId,
        submittedAt: payload.submittedAt,
      });
    } catch {
      setServerError("A network error occurred while submitting your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRecord) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="enterprise-card border-[#138A8A]/40 bg-[#F7FAFC] p-8"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-bold text-[#12304A]">
          Business Enquiry Received
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#405264]">
          Thank you for reaching out to Aethelys Healthcare. Our institutional solutions desk has
          logged your requirement brief and will review the scope before contacting you.
        </p>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-[#405264]">Enquiry Reference:</span>
            <span className="font-mono font-semibold text-[#12304A]">
              {submittedRecord.referenceId}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap justify-between gap-2 border-t border-slate-100 pt-2">
            <span className="text-[#405264]">Organization:</span>
            <span className="font-medium text-[#12304A]">{formData.organization}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmittedRecord(null);
            setFormData({
              fullName: "",
              organization: "",
              workEmail: "",
              phone: "",
              serviceRequired: getInitialService(defaultService),
              location: "",
              requirementDetails: "",
              consent: false,
              websiteHoneypot: "",
            });
          }}
          className="mt-6 inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#12304A] transition-colors hover:bg-[#E8F0F7]"
        >
          Submit Another Requirement
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="enterprise-card p-6 sm:p-8"
      aria-label="Business Enquiry Form"
    >
      <div className="border-b border-slate-100 pb-5">
        <h2 className="font-heading text-xl font-bold text-[#12304A] sm:text-2xl">
          Share Your Operational Requirements
        </h2>
        <p className="mt-1.5 text-sm text-[#405264]">
          Provide your facility details and service scope so our team can prepare a structured
          discussion.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot field for automated spam filtering */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this field blank</label>
        <input
          id="websiteHoneypot"
          name="websiteHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.websiteHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-[#12304A]">
            Full Name <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            placeholder="Dr. / Mr. / Ms. Full Name"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A] placeholder:text-slate-400"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-[#12304A]">
            Organization / Hospital Name <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            aria-invalid={Boolean(errors.organization)}
            aria-describedby={errors.organization ? "organization-error" : undefined}
            placeholder="Hospital, Clinic, or Healthcare Group"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A] placeholder:text-slate-400"
          />
          {errors.organization && (
            <p id="organization-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.organization}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="workEmail" className="block text-sm font-semibold text-[#12304A]">
            Work Email <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            aria-invalid={Boolean(errors.workEmail)}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            placeholder="name@hospital-domain.com"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A] placeholder:text-slate-400"
          />
          {errors.workEmail && (
            <p id="workEmail-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.workEmail}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#12304A]">
            Phone Number <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+91 98XXX XXXXX"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A] placeholder:text-slate-400"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="serviceRequired" className="block text-sm font-semibold text-[#12304A]">
            Service Required <span className="text-[#138A8A]">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={(e) =>
              setFormData({
                ...formData,
                serviceRequired: e.target.value as EnquiryFormValues["serviceRequired"],
              })
            }
            aria-invalid={Boolean(errors.serviceRequired)}
            aria-describedby={errors.serviceRequired ? "serviceRequired-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A]"
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p id="serviceRequired-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.serviceRequired}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-[#12304A]">
            Facility Location <span className="text-[#138A8A]">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            placeholder="City, State / Region"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#12304A] placeholder:text-slate-400"
          />
          {errors.location && (
            <p id="location-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.location}
            </p>
          )}
        </div>
      </div>

      {/* Requirement Details */}
      <div className="mt-5">
        <label htmlFor="requirementDetails" className="block text-sm font-semibold text-[#12304A]">
          Requirement Details <span className="text-[#138A8A]">*</span>
        </label>
        <textarea
          id="requirementDetails"
          name="requirementDetails"
          rows={4}
          required
          value={formData.requirementDetails}
          onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
          aria-invalid={Boolean(errors.requirementDetails)}
          aria-describedby={errors.requirementDetails ? "requirementDetails-error" : undefined}
          placeholder="Outline role profiles, outsourced support desks, IT infrastructure needs, expected facility scale or target timeline."
          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#12304A] placeholder:text-slate-400"
        />
        {errors.requirementDetails && (
          <p id="requirementDetails-error" className="mt-1 text-xs font-medium text-red-600">
            {errors.requirementDetails}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="mt-5">
        <label className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#138A8A]"
          />
          <span className="text-xs leading-relaxed text-[#405264]">
            I confirm that I am authorized to share this institutional inquiry and consent to
            Aethelys Healthcare contacting me regarding these requirements in accordance with the{" "}
            <Link href="/privacy-policy" className="font-semibold text-[#138A8A] underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-xs font-medium text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#405264]">
          B2B business enquiries only. For medical emergencies, contact local hospital emergency
          services.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#12304A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0C2135] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4 text-[#DDF3F1]" />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
