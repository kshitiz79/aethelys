import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/site-config";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesOverview() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
              Core Service Pillars
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#12304A] sm:text-3xl">
              Focused Solutions Across Workforce, Operations &amp; Infrastructure
            </h2>
            <p className="mt-3 text-base text-[#405264]">
              Each service line is delivered with documented scope boundaries, structured
              coordination and clear service-level expectations.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#12304A] hover:text-[#138A8A]"
          >
            <span>Compare All Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
