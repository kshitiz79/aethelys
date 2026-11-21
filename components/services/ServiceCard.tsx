import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, ClipboardCheck, Server } from "lucide-react";
import type { ServicePillar } from "@/lib/site-config";

const iconMap = {
  "healthcare-staffing": Users,
  "outsourced-services": ClipboardCheck,
  "data-centre-it": Server,
};

interface ServiceCardProps {
  service: ServicePillar;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.id];

  return (
    <article className="enterprise-card-interactive flex h-full flex-col justify-between p-7">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-[#E8F0F7] px-3 py-1 text-xs font-semibold text-[#12304A]">
            {service.badge}
          </span>
        </div>

        <h3 className="mt-6 font-heading text-xl font-bold text-[#12304A]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#405264]">
          {service.summary}
        </p>

        <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
          {service.cardBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#405264]">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[#138A8A]"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 pt-2">
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#12304A] transition-colors hover:text-[#138A8A]"
        >
          <span>Explore Service Scope</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
