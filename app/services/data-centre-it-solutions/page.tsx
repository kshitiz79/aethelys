import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageContent } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Data Centre & Healthcare IT Infrastructure Solutions",
  description:
    "Healthcare IT infrastructure consulting, server/storage/network support, backup and disaster-recovery planning, and HIS/HMS/EHR coordination.",
  alternates: {
    canonical: "/services/data-centre-it-solutions",
  },
};

const itSolutionsContent: ServicePageContent = {
  slug: "data-centre-it-solutions",
  serviceQueryValue: "data-centre-it",
  badge: "Service Pillar 03",
  title: "Data Centre & Healthcare IT Infrastructure Solutions",
  subtitle:
    "Technology infrastructure and continuity support designed around healthcare operational needs and data sensitivity.",
  overview:
    "We partner with hospital IT, security and compliance teams to plan, deploy, monitor and coordinate core compute, storage, connectivity and clinical application infrastructure.",
  diagramSrc: "/images/datacentre-infrastructure.svg",
  diagramAlt: "Healthcare data centre and IT infrastructure continuity architecture",
  serviceAreasTitle: "Technology & Infrastructure Capabilities",
  serviceAreas: [
    {
      title: "Data-Centre Planning & Infrastructure Consulting",
      description:
        "Structured assessment and architectural planning for on-premise server rooms, colocation deployments and hybrid healthcare environments.",
    },
    {
      title: "Server, Storage & Network Infrastructure Support",
      description:
        "Configuration coordination and ongoing support for compute nodes, diagnostic imaging storage tiers and core hospital switching/routing.",
    },
    {
      title: "Infrastructure Deployment & Migration Coordination",
      description:
        "Planned rollouts, hardware upgrades and phased workload migrations designed to minimize disruption to active clinical schedules.",
    },
    {
      title: "Backup & Disaster-Recovery Planning",
      description:
        "Design and coordination of structured backup schedules, recovery point/time objectives and continuity testing workflows.",
    },
    {
      title: "Infrastructure Monitoring & Managed Support",
      description:
        "Proactive health monitoring, incident triage and coordinated escalation for critical server and network components.",
    },
    {
      title: "Availability, Capacity & Performance Management",
      description:
        "Periodic utilization tracking, storage growth forecasting and bottleneck identification to support growing patient and imaging volumes.",
    },
    {
      title: "Healthcare Application Hosting Coordination",
      description:
        "Infrastructure readiness and hosting coordination for hospital management portals, departmental applications and internal tools.",
    },
    {
      title: "Secure Connectivity Between Facilities",
      description:
        "Inter-branch connectivity architecture and VPN/WAN link coordination linking multi-site hospitals, clinics and diagnostic labs.",
    },
    {
      title: "HIS / HMS & EHR Platform Support Coordination",
      description:
        "Infrastructure alignment and operational coordination for Hospital Information Systems (HIS/HMS) and EHR platforms delivered alongside qualified technology partners.",
    },
  ],
  includedScope: [
    "Infrastructure requirement assessment, capacity planning and architecture documentation",
    "Deployment coordination, health monitoring and incident escalation management",
    "Backup verification workflows and disaster-recovery runbook planning",
    "Vendor and qualified technology partner coordination for HIS/HMS and EHR environments",
  ],
  excludedScope: [
    "Unverified claims of Tier-certified data-centre ownership or '100% secure / zero-downtime' guarantees",
    "Proprietary clinical software licensing or clinical decision-support validation",
    "Independent regulatory audit sign-off (performed by accredited external auditors as required)",
  ],
  clientResponsibilities: [
    "Provide documented IT security policies, access governance and change-control approvals",
    "Maintain internal IT/compliance points of contact for architectural sign-off",
    "Approve maintenance windows for planned migrations, patches or DR drills",
    "Retain ownership of clinical application data and statutory compliance obligations",
  ],
  aethelysResponsibilities: [
    "Plan infrastructure architecture around operational continuity and data sensitivity",
    "Coordinate server, storage, network and backup readiness within agreed scope",
    "Operate monitoring, incident response coordination and capacity reporting",
    "Collaborate transparently with client IT, security and third-party HIS/EHR partners",
  ],
  deploymentModels: [
    {
      name: "Infrastructure Advisory & Deployment",
      description:
        "Project-based architecture planning, hardware sizing, network topology design and migration coordination.",
    },
    {
      name: "Managed Infrastructure Monitoring & Support",
      description:
        "Ongoing infrastructure health monitoring, backup tracking, capacity reviews and incident escalation.",
    },
    {
      name: "Partner-Coordinated HIS / EHR Hosting Support",
      description:
        "Joint infrastructure and application environment coordination with qualified healthcare technology partners.",
    },
  ],
  processTitle: "Infrastructure Delivery & Continuity Process",
  processSteps: [
    {
      step: "01",
      title: "Environment Discovery & Risk Assessment",
      detail: "Review existing servers, network links, critical HIS/PACS dependencies and backup gaps.",
    },
    {
      step: "02",
      title: "Architecture & Continuity Design",
      detail: "Define target infrastructure, backup schedules, recovery procedures and security boundaries with client IT.",
    },
    {
      step: "03",
      title: "Controlled Deployment & Migration",
      detail: "Execute installation and migration steps during approved maintenance windows with rollback plans.",
    },
    {
      step: "04",
      title: "Monitoring & Managed Support Operations",
      detail: "Track system availability, storage utilization, network health and backup completion logs.",
    },
    {
      step: "05",
      title: "Capacity & Readiness Reviews",
      detail: "Conduct scheduled performance reviews, DR checklist updates and capacity growth planning.",
    },
  ],
  governance: {
    supervisionAndEscalation: [
      "Tier 1: Infrastructure monitoring and initial incident triage",
      "Tier 2: Systems and network engineering escalation for root-cause resolution",
      "Tier 3: Joint coordination with OEM hardware vendors or qualified HIS/EHR partners",
    ],
    reportingCadence: [
      "Incident logs and change-control summaries per approved maintenance activity",
      "Monthly system availability, backup status and capacity utilization reports",
      "Quarterly continuity and infrastructure roadmap reviews with client IT leadership",
    ],
    serviceLevelIndicators: [
      "Incident acknowledgment and escalation response times",
      "Scheduled backup completion verification rate",
      "Infrastructure availability and capacity threshold adherence",
    ],
  },
  importantNoteTitle: "Security, Continuity & Compliance Notice",
  importantNoteBody:
    "Aethelys Healthcare plans technology infrastructure around operational continuity, backup readiness and healthcare data sensitivity in coordination with each client's internal IT, security and compliance teams. We do not publish absolute claims such as '100% secure' or 'guaranteed uninterrupted uptime,' and we do not represent Aethelys as a certified third-party colocation data-centre operator unless separately documented and verified.",
};

export default function DataCentreItSolutionsPage() {
  return <ServicePageLayout content={itSolutionsContent} />;
}
