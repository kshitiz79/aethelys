import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyAethelys } from "@/components/home/WhyAethelys";
import { WorkProcess } from "@/components/home/WorkProcess";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesOverview />
      <WhyAethelys />
      <WorkProcess />
      <IndustriesPreview />
      <ContactCTA />
    </>
  );
}
