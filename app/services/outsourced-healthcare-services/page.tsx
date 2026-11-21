import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageContent } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Outsourced Healthcare Services",
  description:
    "Managed non-clinical healthcare operations including front-office helpdesk, registration, billing support, medical records, housekeeping and manpower management.",
  alternates: {
    canonical: "/services/outsourced-healthcare-services",
  },
};

const outsourcedContent: ServicePageContent = {
  slug: "outsourced-healthcare-services",
  serviceQueryValue: "outsourced-services",
  badge: "Service Pillar 02",
  title: "Outsourced Healthcare Services",
  subtitle:
    "Help hospitals outsource selected support functions so internal teams can focus on core clinical and institutional priorities.",
  overview:
    "We deliver structured, supervised non-clinical and operational support functions with defined service-level expectations, escalation channels and periodic reporting.",
  diagramSrc: "/images/outsourced-operations.svg",
  diagramAlt: "Managed hospital support operations showing client authority and Aethelys service execution",
  serviceAreasTitle: "Managed Support & Operational Functions",
  serviceAreas: [
    {
      title: "Front-Office & Patient Helpdesk Operations",
      description:
        "Disciplined reception desks, visitor guidance and patient query handling staffed to align with hospital hospitality and communication standards.",
    },
    {
      title: "Patient Registration & Appointment Coordination",
      description:
        "Streamlined OPD/IPD registration workflows, consultation slot coordination and queue support to improve patient throughput.",
    },
    {
      title: "Billing & Administrative Support",
      description:
        "Structured operational support for counter billing, discharge paperwork coordination and administrative reconciliation within client systems.",
    },
    {
      title: "Medical Records & Documentation Support",
      description:
        "Organized filing, indexing, retrieval coordination and archival workflows following the hospital's confidentiality and record-keeping policies.",
    },
    {
      title: "Housekeeping & Facility Support",
      description:
        "Scheduled sanitation, general upkeep and facility hygiene operations aligned with non-clinical zone checklists and hospital schedules.",
    },
    {
      title: "Hospital Attendants & Non-Clinical Support",
      description:
        "Trained patient-transport attendants, ward helpers and logistics runners operating under clear ward and supervisor instructions.",
    },
    {
      title: "Operations Coordination & Manpower Management",
      description:
        "Roster planning, shift handover discipline, attendance supervision and day-to-day support floor coordination.",
    },
    {
      title: "Helpdesk, Back-Office & Shared-Service Support",
      description:
        "Centralized scheduling desks, call coordination and back-office administrative workflows for multi-unit healthcare groups.",
    },
  ],
  includedScope: [
    "Dedicated shift rostering, attendance supervision and relief coverage planning",
    "Execution against documented Standard Operating Procedures (SOPs) agreed with client management",
    "On-site supervisor or designated operations lead for structured coordination",
    "Periodic operational reporting covering coverage, turnaround and desk metrics",
  ],
  excludedScope: [
    "Clinical triage, medical advice, diagnostic interpretation or patient care procedures",
    "Clinical waste treatment certifications or biomedical engineering repairs unless separately contracted",
    "Direct ownership of client hospital pricing, medical billing policy or clinical software licenses",
  ],
  clientResponsibilities: [
    "Approve functional SOPs, shift timings and service-level expectations",
    "Provide access to HIS/registration software, physical workspace and facility utilities",
    "Designate an institutional operations representative for escalations and reviews",
    "Communicate hospital safety, infection-control and data privacy policies",
  ],
  aethelysResponsibilities: [
    "Recruit, orient and deploy trained non-clinical support teams to agreed desks",
    "Maintain shift rosters, attendance records and supervisor oversight",
    "Adhere to approved client SOPs and hospital conduct standards",
    "Deliver scheduled operational reports and resolve escalated workflow gaps",
  ],
  deploymentModels: [
    {
      name: "Function-Specific Managed Desk",
      description:
        "Outsource a targeted support unit—such as front-office registration or medical records—with dedicated Aethelys supervision.",
    },
    {
      name: "Multi-Function Support Package",
      description:
        "Integrated coordination across reception, attendants, billing support and housekeeping under one operational governance structure.",
    },
    {
      name: "Shared-Service Back-Office Model",
      description:
        "Centralized appointment helpdesk and administrative support serving multiple clinic or hospital locations.",
    },
  ],
  processTitle: "Operational Transition & Delivery Framework",
  processSteps: [
    {
      step: "01",
      title: "Workflow Assessment & Scope Mapping",
      detail: "Document desk volumes, peak hours, shift structures and exact boundaries between clinical and support roles.",
    },
    {
      step: "02",
      title: "SOP & SLA Alignment",
      detail: "Agree on operating checklists, escalation tiers, reporting templates and measurable service-level indicators.",
    },
    {
      step: "03",
      title: "Team Mobilization & Process Orientation",
      detail: "Deploy screened support staff oriented on hospital etiquette, privacy rules and client software workflows.",
    },
    {
      step: "04",
      title: "Supervised Go-Live & Shift Management",
      detail: "Execute daily rosters with active supervisor monitoring and structured shift handovers.",
    },
    {
      step: "05",
      title: "Periodic Governance & Process Refinement",
      detail: "Review operational indicators with hospital management and refine staffing or workflow coverage.",
    },
  ],
  governance: {
    supervisionAndEscalation: [
      "Tier 1: On-site Shift Supervisor for immediate desk or attendance adjustments",
      "Tier 2: Account Operations Coordinator for workflow changes and SOP updates",
      "Tier 3: Institutional Escalation Review with Aethelys management and client leadership",
    ],
    reportingCadence: [
      "Daily shift-coverage and attendance logs maintained at site level",
      "Weekly supervisor summaries highlighting operational issues or peak-hour trends",
      "Monthly SLA performance review pack shared ahead of client review meetings",
    ],
    serviceLevelIndicators: [
      "Shift fulfillment and on-time attendance percentage across contracted desks",
      "Supervisor audit scores on SOP checklist adherence",
      "Response and resolution timelines for escalated operational requests",
    ],
  },
  importantNoteTitle: "Non-Clinical Support Scope Notice",
  importantNoteBody:
    "Outsourced Healthcare Services cover non-clinical operational, administrative and facility support functions delivered strictly under documented scope agreements. All clinical decisions, medical policies and patient-care governance remain solely with the healthcare institution.",
};

export default function OutsourcedHealthcareServicesPage() {
  return <ServicePageLayout content={outsourcedContent} />;
}
