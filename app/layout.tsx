import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Aethelys Healthcare | Healthcare Staffing, Outsourcing & IT Solutions",
    template: "%s | Aethelys Healthcare",
  },
  description:
    "Aethelys Healthcare supports hospitals and healthcare organizations with staffing solutions, outsourced services and data-centre and IT infrastructure support.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brandName,
    title: "Aethelys Healthcare | Healthcare Staffing, Outsourcing & IT Solutions",
    description:
      "Aethelys Healthcare supports hospitals and healthcare organizations with staffing solutions, outsourced services and data-centre and IT infrastructure support.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#F7FAFC] text-[#405264] antialiased">
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#12304A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
