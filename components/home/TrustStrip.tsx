import { CheckCircle2 } from "lucide-react";
import { trustCapabilities } from "@/lib/site-config";

export function TrustStrip() {
  return (
    <section
      aria-label="Core Service Capabilities"
      className="border-b border-slate-200 bg-[#12304A] py-5 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {trustCapabilities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-medium text-slate-100 sm:text-sm"
            >
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-[#DDF3F1]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
