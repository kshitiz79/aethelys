export interface ServicePillar {
  slug: string;
  id: "healthcare-staffing" | "outsourced-services" | "data-centre-it";
  href: string;
  title: string;
  shortTitle: string;
  badge: string;
  summary: string;
  cardBullets: string[];
  image: string;
  imageAlt: string;
}

export const siteConfig = {
  brandName: "Aethelys Healthcare",
  shortName: "Aethelys",
  tagline: "Stronger Healthcare Operations. Better Care Delivery.",
  alternativeTaglines: [
    "Enabling Healthcare Through People, Processes & Technology.",
    "Your Partner in Healthcare Workforce and Infrastructure Solutions.",
  ],
  positioning:
    "Aethelys Healthcare is a healthcare services and solutions partner that helps hospitals and healthcare organizations build dependable teams, strengthen operations, and access technology and infrastructure support.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aethelys.com",
  contact: {
    enquiryEmail: "enquiries@aethelys.com",
    careersEmail: "careers@aethelys.com",
    responseWindow: "Within 1–2 business days",
    consultationHours: "Monday – Saturday, 9:00 AM – 6:30 PM IST",
    coverageNote:
      "Supporting hospitals, clinics, diagnostic centres and institutional healthcare projects through structured remote and on-site coordination.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "All Services Overview",
          href: "/services",
          description: "Explore our integrated workforce, operational and IT service lines.",
        },
        {
          label: "Healthcare Staffing Solutions",
          href: "/services/healthcare-staffing",
          description: "Role-based clinical, allied and non-clinical workforce sourcing.",
        },
        {
          label: "Outsourced Healthcare Services",
          href: "/services/outsourced-healthcare-services",
          description: "Managed front-office, billing, records and facility support.",
        },
        {
          label: "Data Centre & IT Solutions",
          href: "/services/data-centre-it-solutions",
          description: "Infrastructure planning, continuity and HIS/EHR coordination.",
        },
      ],
    },
    { label: "Industries", href: "/industries" },
    { label: "Quality & Compliance", href: "/quality-compliance" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: {
    label: "Discuss Your Requirements",
    href: "/contact",
  },
} as const;

export const servicesData: ServicePillar[] = [
  {
    slug: "healthcare-staffing",
    id: "healthcare-staffing",
    href: "/services/healthcare-staffing",
    title: "Healthcare Staffing Solutions",
    shortTitle: "Healthcare Staffing",
    badge: "Workforce Solutions",
    summary:
      "Workforce sourcing and deployment support for clinical, allied and non-clinical roles, based on approved requirements.",
    cardBullets: [
      "Nursing, paramedical, allied health & technician roles",
      "Hospital admin, billing, records & non-clinical staff",
      "Temporary, contract, project-based & permanent models",
    ],
    image: "/images/staffing-workflow.svg",
    imageAlt: "Role-based healthcare workforce delivery model diagram",
  },
  {
    slug: "outsourced-healthcare-services",
    id: "outsourced-services",
    href: "/services/outsourced-healthcare-services",
    title: "Outsourced Healthcare Services",
    shortTitle: "Outsourced Services",
    badge: "Operational Support",
    summary:
      "Managed support functions that help healthcare institutions improve coordination and day-to-day operations.",
    cardBullets: [
      "Front-office, patient helpdesk & appointment coordination",
      "Billing, medical records & administrative back-office",
      "Housekeeping, attendants & structured shift supervision",
    ],
    image: "/images/outsourced-operations.svg",
    imageAlt: "Managed hospital support operations and governance model",
  },
  {
    slug: "data-centre-it-solutions",
    id: "data-centre-it",
    href: "/services/data-centre-it-solutions",
    title: "Data Centre & IT Solutions",
    shortTitle: "Data Centre & IT",
    badge: "Technology & Infrastructure",
    summary:
      "Technology infrastructure and continuity support aligned with healthcare organizations' operational needs.",
    cardBullets: [
      "Infrastructure planning, server, storage & network support",
      "Backup, disaster recovery & continuity planning",
      "HIS/HMS & EHR support via qualified technology partners",
    ],
    image: "/images/datacentre-infrastructure.svg",
    imageAlt: "Healthcare IT infrastructure and continuity architecture",
  },
];

export const trustCapabilities = [
  "Healthcare-focused service approach",
  "Role-based workforce sourcing",
  "Structured deployment processes",
  "Dedicated client coordination",
  "Technology and infrastructure support",
] as const;

export const whyAethelysData = [
  {
    title: "Requirement-led delivery",
    description:
      "Solutions shaped around the institution's size, roles, shift patterns and operating model rather than rigid templates.",
    icon: "Target" as const,
  },
  {
    title: "Structured coordination",
    description:
      "Defined points of contact, clear division of responsibilities and documented escalation paths for day-to-day clarity.",
    icon: "GitBranch" as const,
  },
  {
    title: "Workforce focus",
    description:
      "Role-specific sourcing, credential check coordination and structured onboarding processes tailored to healthcare environments.",
    icon: "Users" as const,
  },
  {
    title: "Operational visibility",
    description:
      "Agreed reporting formats, attendance tracking and periodic review mechanisms aligned with client expectations.",
    icon: "BarChart3" as const,
  },
  {
    title: "Technology awareness",
    description:
      "Infrastructure support planned around operational continuity, backup readiness and healthcare data sensitivity.",
    icon: "Server" as const,
  },
  {
    title: "Long-term partnership",
    description:
      "Periodic service reviews and collaborative improvement discussions designed to support evolving institutional needs.",
    icon: "Handshake" as const,
  },
] as const;

export const workProcessSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Discuss business needs, operating environment, clinical vs. non-clinical boundaries and desired outcomes.",
    deliverable: "Requirement Brief",
  },
  {
    step: "02",
    title: "Assess",
    description:
      "Confirm scope, role profiles, infrastructure dependencies, timelines and delivery constraints.",
    deliverable: "Scope Alignment",
  },
  {
    step: "03",
    title: "Plan",
    description:
      "Agree on deployment model, client and Aethelys responsibilities, service-level indicators and escalation paths.",
    deliverable: "Delivery & SLA Plan",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Coordinate the agreed staffing, outsourced operational desk or IT infrastructure support solution.",
    deliverable: "Structured Execution",
  },
  {
    step: "05",
    title: "Review",
    description:
      "Monitor agreed operational indicators, address client feedback and identify practical service improvements.",
    deliverable: "Periodic Governance",
  },
] as const;

export const industriesData = [
  {
    slug: "multi-specialty-hospitals",
    title: "Multi-specialty hospitals",
    summary:
      "High-volume institutions requiring coordinated clinical/non-clinical rosters, multi-desk patient support and resilient IT infrastructure.",
    needs: [
      "Department-wise nursing, technician and administrative workforce deployment",
      "24/7 front-office, registration, billing and medical records coordination",
      "Multi-server availability, HIS/HMS support coordination and backup planning",
    ],
    focusPillar: "Integrated Staffing, Outsourcing & IT Infrastructure",
  },
  {
    slug: "single-specialty-hospitals",
    title: "Single-specialty hospitals",
    summary:
      "Focused hospitals (such as cardiac, orthopaedic, maternity or eye care centres) balancing specialized clinical care with lean operations.",
    needs: [
      "Targeted allied health, nursing and specialist hiring coordination",
      "Outsourced appointment coordination, helpdesk and facility support",
      "Right-sized IT infrastructure, network reliability and application hosting",
    ],
    focusPillar: "Role-Specific Staffing & Managed Support Desks",
  },
  {
    slug: "clinics-day-care-centres",
    title: "Clinics and day-care centres",
    summary:
      "Outpatient facilities and surgical day-care hubs where patient throughput depends on punctual front-office and support execution.",
    needs: [
      "Front-desk, patient registration and billing support personnel",
      "Scheduled technician and nursing support on contract or shift models",
      "Reliable clinic connectivity, EHR access coordination and endpoint backup",
    ],
    focusPillar: "Outsourced Front-Office & Flexible Workforce",
  },
  {
    slug: "diagnostic-imaging-centres",
    title: "Diagnostic and imaging centres",
    summary:
      "Pathology labs and imaging facilities requiring skilled technicians, disciplined sample/patient coordination and uptime for PACS/LIS.",
    needs: [
      "Laboratory, phlebotomy and radiology technician sourcing support",
      "Reception, report dispatch coordination and housekeeping support",
      "Storage infrastructure, network connectivity and data backup readiness",
    ],
    focusPillar: "Technician Staffing & Storage/Network Support",
  },
  {
    slug: "healthcare-networks-institutional-projects",
    title: "Healthcare networks and institutional projects",
    summary:
      "Multi-site hospital groups, healthcare promoters and institutional projects establishing or standardizing operations across locations.",
    needs: [
      "Project-based manpower mobilization and standardized onboarding",
      "Shared-service back-office, records and helpdesk operations",
      "Cross-facility connectivity, data-centre consulting and migration coordination",
    ],
    focusPillar: "Standardized Operations & Infrastructure Rollout",
  },
] as const;

export const compliancePillars = [
  {
    title: "Role-Specific Credential & Reference Checks",
    description:
      "For workforce deployments, Aethelys coordinates document verification and reference checks appropriate to each role and applicable regulations, while clinical competence validation and medical supervision remain under the client institution's authorized clinical governance.",
  },
  {
    title: "Clear Scope & Responsibility Boundaries",
    description:
      "Every engagement begins with written alignment on included and excluded activities, client responsibilities, Aethelys responsibilities and operational handoff points.",
  },
  {
    title: "SOP Adherence & Supervision Structure",
    description:
      "Outsourced support functions follow documented operating procedures, shift rosters, designated on-site or remote leads and multi-tier escalation paths.",
  },
  {
    title: "Healthcare Data Sensitivity & IT Controls",
    description:
      "Infrastructure support and technology partner coordination are planned in consultation with the client's internal IT, security and compliance teams around data sensitivity, access boundaries and continuity planning.",
  },
  {
    title: "Transparent Reporting & Periodic Reviews",
    description:
      "We track agreed operational metrics—such as attendance adherence, shift coverage, response timelines and infrastructure availability indicators—during scheduled client review cycles.",
  },
] as const;
