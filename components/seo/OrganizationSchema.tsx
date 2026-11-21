import { siteConfig } from "@/lib/site-config";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.baseUrl,
    description: siteConfig.positioning,
    email: siteConfig.contact.enquiryEmail,
    knowsAbout: [
      "Healthcare Staffing Solutions",
      "Outsourced Healthcare Services",
      "Healthcare Data Centre and IT Infrastructure Solutions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
