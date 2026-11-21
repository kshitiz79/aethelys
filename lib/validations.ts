import { z } from "zod";

export const SERVICE_OPTIONS = [
  { value: "healthcare-staffing", label: "Healthcare Staffing Solutions" },
  { value: "outsourced-services", label: "Outsourced Healthcare Services" },
  { value: "data-centre-it", label: "Data Centre & Healthcare IT Solutions" },
  { value: "integrated-multiple", label: "Multiple / Integrated Support" },
  { value: "other", label: "Other Operational Inquiry" },
] as const;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(100, "Full name must not exceed 100 characters."),
  organization: z
    .string()
    .trim()
    .min(2, "Please enter your organization or hospital name.")
    .max(150, "Organization name must not exceed 150 characters."),
  workEmail: z
    .string()
    .trim()
    .email("Please enter a valid work email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact number.")
    .max(20, "Phone number must not exceed 20 characters.")
    .regex(/^[+\d\s()-]{7,20}$/, "Phone number may contain digits, +, spaces, parentheses, or hyphens."),
  serviceRequired: z.enum(
    [
      "healthcare-staffing",
      "outsourced-services",
      "data-centre-it",
      "integrated-multiple",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select the primary service required." }),
    }
  ),
  location: z
    .string()
    .trim()
    .min(2, "Please specify the city, state, or facility location.")
    .max(120, "Location must not exceed 120 characters."),
  requirementDetails: z
    .string()
    .trim()
    .min(20, "Please share brief requirement details (at least 20 characters).")
    .max(2000, "Requirement details must not exceed 2000 characters."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm your consent so our team can respond to your enquiry.",
    }),
  }),
  websiteHoneypot: z.string().max(0, "Invalid submission.").optional(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;

export const careerEnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[+\d\s()-]{7,20}$/, "Please enter a valid phone number."),
  roleTrack: z.enum([
    "nursing-clinical-support",
    "paramedical-technician",
    "hospital-admin-operations",
    "it-infrastructure-support",
    "corporate-coordination",
  ]),
  location: z.string().trim().min(2, "Current city/location is required.").max(120),
  experienceSummary: z
    .string()
    .trim()
    .min(15, "Please summarize your background and qualifications (at least 15 characters).")
    .max(1500),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please acknowledge the privacy notice to submit your profile interest.",
    }),
  }),
  websiteHoneypot: z.string().max(0).optional(),
});

export type CareerEnquiryValues = z.infer<typeof careerEnquirySchema>;
