import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageContent } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Healthcare Staffing Solutions",
  description:
    "Role-based healthcare workforce sourcing and deployment support across nursing, allied health, laboratory, radiology, hospital administration and non-clinical support.",
  alternates: {
    canonical: "/services/healthcare-staffing",
  },
};

const staffingContent: ServicePageContent = {
  slug: "healthcare-staffing",
  serviceQueryValue: "healthcare-staffing",
  badge: "Service Pillar 01",
  title: "Healthcare Staffing Solutions",
  subtitle:
    "Provide qualified and role-appropriate workforce support to healthcare institutions.",
  overview:
    "We help hospitals, clinics and diagnostic centres source, screen and onboard clinical, paramedical, technical and administrative personnel across temporary, contract, project-based and permanent staffing models.",
  diagramSrc: "/images/staffing-workflow.svg",
  diagramAlt: "Healthcare staffing lifecycle from requirement definition to ongoing attendance review",
  serviceAreasTitle: "Workforce Categories & Staffing Models",
  serviceAreas: [
    {
      title: "Doctors & Specialist Hiring Support",
      description:
        "Structured sourcing and coordination support for physician and specialist recruitment, strictly where authorized and applicable to the client institution's credentialing rules.",
    },
    {
      title: "Nursing Staff & Nursing Support Teams",
      description:
        "Sourcing and onboarding support for ward, ICU/critical-care support and outpatient nursing personnel aligned with hospital shift rosters.",
    },
    {
      title: "Paramedical & Allied Healthcare Professionals",
      description:
        "Role-appropriate sourcing for physiotherapists, OT assistants, pharmacy support staff and allied healthcare specialists.",
    },
    {
      title: "Laboratory & Radiology Technicians",
      description:
        "Technical workforce sourcing for pathology laboratories, phlebotomy units, X-ray, CT/MRI and diagnostic imaging support roles.",
    },
    {
      title: "Hospital Administration & Front-Office",
      description:
        "Front-desk coordinators, floor managers, appointment schedulers and patient-relations executives trained for healthcare workflows.",
    },
    {
      title: "Medical Records, Billing & Operations Staff",
      description:
        "Support personnel for hospital billing desks, insurance/TPA coordination, medical documentation and operational administration.",
    },
    {
      title: "Housekeeping, Facility & Non-Clinical Staff",
      description:
        "Hospital attendants, ward support workers, sanitation and facility maintenance staff supporting safe, organized hospital environments.",
    },
    {
      title: "Flexible Staffing Engagement Models",
      description:
        "Support structured across temporary coverage, fixed-term contracts, facility launch/project-based mobilization and permanent hiring.",
    },
  ],
  includedScope: [
    "Requirement intake covering role profiles, qualifications, shift schedules and reporting lines",
    "Candidate sourcing, preliminary screening and availability alignment",
    "Verification of identity documents, educational records and references as appropriate to role and applicable law",
    "Interview scheduling and selection coordination with client department leads",
    "Structured onboarding coordination, attendance tracking and replacement workflow",
  ],
  excludedScope: [
    "Independent clinical competence certification or medical licensing authority",
    "Direct clinical diagnosis, patient treatment decisions or medical malpractice assumption",
    "Bypassing hospital medical-board credentialing or statutory registration checks",
  ],
  clientResponsibilities: [
    "Define exact role specifications, clinical eligibility criteria and shift expectations",
    "Conduct final clinical evaluation, privilege granting and medical supervision",
    "Provide facility induction, safety orientation and clinical SOP training",
    "Share timely performance feedback for attendance and quality reviews",
  ],
  aethelysResponsibilities: [
    "Source and pre-screen candidates aligned to approved role profiles",
    "Coordinate reference and document checks appropriate to the position and applicable law",
    "Manage interview logistics, deployment documentation and joining coordination",
    "Track attendance, review client feedback and coordinate agreed replacements",
  ],
  deploymentModels: [
    {
      name: "Temporary & Shift-Based Staffing",
      description:
        "Supplemental workforce deployment to manage seasonal patient volumes, leave coverage or transitional department gaps.",
    },
    {
      name: "Contract & Project-Based Mobilization",
      description:
        "Multi-role workforce mobilization for new hospital wings, diagnostic centres or institutional healthcare projects.",
    },
    {
      name: "Permanent Hiring Support",
      description:
        "Targeted candidate search, screening and interview coordination for direct institutional hiring.",
    },
  ],
  processTitle: "7-Step Workforce Delivery Process",
  processSteps: [
    {
      step: "01",
      title: "Understand Institutional Staffing Requirements",
      detail: "Review facility type, department priorities, urgency and budget structure.",
    },
    {
      step: "02",
      title: "Define Role Profiles & Shift Requirements",
      detail: "Document exact qualifications, experience range, statutory registrations and shift schedules.",
    },
    {
      step: "03",
      title: "Source & Screen Candidates",
      detail: "Identify relevant healthcare professionals and conduct structured role-fit screening.",
    },
    {
      step: "04",
      title: "Verify Credentials & References",
      detail: "Coordinate document and reference verification as appropriate to the role and applicable law.",
    },
    {
      step: "05",
      title: "Coordinate Interviews & Selection",
      detail: "Facilitate client clinical or administrative interview panels and selection sign-off.",
    },
    {
      step: "06",
      title: "Support Onboarding, Deployment & Replacements",
      detail: "Coordinate joining formalities, deployment schedules and structured replacement timelines.",
    },
    {
      step: "07",
      title: "Review Attendance, Quality & Client Feedback",
      detail: "Conduct ongoing attendance reviews and client check-ins to maintain workforce continuity.",
    },
  ],
  governance: {
    supervisionAndEscalation: [
      "Designated Aethelys workforce coordinator assigned to each institutional account",
      "Defined escalation path for shift gaps, replacement requests or conduct feedback",
      "Clinical supervision remains under the client hospital's medical and nursing leadership",
    ],
    reportingCadence: [
      "Weekly deployment status updates during active mobilization",
      "Monthly attendance, retention and open-requisition summaries",
      "Quarterly workforce planning and feedback review meetings",
    ],
    serviceLevelIndicators: [
      "Candidate shortlist turnaround against agreed role intake",
      "Shift fill consistency and attendance adherence",
      "Replacement initiation timeline for separated roles",
    ],
  },
  importantNoteTitle: "Clinical Governance & Verification Boundary",
  importantNoteBody:
    "Aethelys Healthcare coordinates workforce sourcing, reference checks and onboarding processes based on client-approved role criteria and applicable law. Aethelys does not independently certify clinical competence or provide direct clinical services; clinical evaluation, medical privileging and supervision of clinical staff remain the responsibility of the client healthcare institution.",
};

export default function HealthcareStaffingPage() {
  return <ServicePageLayout content={staffingContent} />;
}
