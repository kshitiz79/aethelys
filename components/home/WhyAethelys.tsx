import { Target, GitBranch, Users, BarChart3, Server, Handshake } from "lucide-react";
import { whyAethelysData } from "@/lib/site-config";

const iconComponents = {
  Target,
  GitBranch,
  Users,
  BarChart3,
  Server,
  Handshake,
};

export function WhyAethelys() {
  return (
    <section className="bg-[#F7FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
            Why Aethelys Healthcare
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#12304A] sm:text-3xl">
            Built Around Operational Clarity and Institutional Accountability
          </h2>
          <p className="mt-3 text-base text-[#405264]">
            Our service framework prioritizes practical execution, transparent ownership and
            consistent coordination with your hospital leadership.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyAethelysData.map((item) => {
            const Icon = iconComponents[item.icon];
            return (
              <div key={item.title} className="enterprise-card p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDF3F1] text-[#138A8A]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#12304A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#405264]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
