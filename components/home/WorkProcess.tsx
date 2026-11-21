import { workProcessSteps } from "@/lib/site-config";

export function WorkProcess() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#138A8A]">
            How We Work
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#12304A] sm:text-3xl">
            A Five-Step Delivery Process From Requirement to Ongoing Review
          </h2>
          <p className="mt-3 text-base text-[#405264]">
            Structured onboarding and continuous feedback ensure every staffing, outsourcing or IT
            engagement stays aligned with institutional standards.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {workProcessSteps.map((item) => (
            <div
              key={item.step}
              className="enterprise-card flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#12304A] font-heading text-xs font-bold text-white">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-[#E8F0F7] px-2.5 py-1 text-[11px] font-semibold text-[#12304A]">
                    {item.deliverable}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#12304A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#405264]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
