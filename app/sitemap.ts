import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, "");
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/healthcare-staffing", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/services/outsourced-healthcare-services",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/data-centre-it-solutions",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/quality-compliance", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
