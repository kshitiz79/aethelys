"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Users, ClipboardCheck, Server, LayoutGrid } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

const serviceDropdownIcons: Record<string, typeof Users> = {
  "/services": LayoutGrid,
  "/services/healthcare-staffing": Users,
  "/services/outsourced-healthcare-services": ClipboardCheck,
  "/services/data-centre-it-solutions": Server,
};

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg py-1"
          aria-label="Aethelys Healthcare Home"
        >
          <Image
            src="/brand/logo.svg"
            alt="Aethelys Healthcare"
            width={185}
            height={38}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => {
              if ("children" in item && item.children) {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <li
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                        isServicesActive
                          ? "bg-[#E8F0F7] font-semibold text-[#12304A]"
                          : "text-[#405264] hover:bg-[#F7FAFC] hover:text-[#12304A]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-150 ${
                          servicesOpen ? "rotate-180 text-[#138A8A]" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-0 top-full w-[380px] pt-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl">
                          <div className="mb-1.5 px-3 py-1">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#138A8A]">
                              Service Pillars
                            </p>
                          </div>
                          <ul className="space-y-1">
                            {item.children.map((child) => {
                              const Icon = serviceDropdownIcons[child.href] || LayoutGrid;
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${
                                      isChildActive
                                        ? "bg-[#DDF3F1]/70 text-[#12304A]"
                                        : "hover:bg-[#F7FAFC]"
                                    }`}
                                  >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F0F7] text-[#138A8A]">
                                      <Icon className="h-4 w-4" />
                                    </span>
                                    <span>
                                      <span className="block text-sm font-semibold text-[#12304A]">
                                        {child.label}
                                      </span>
                                      <span className="mt-0.5 block text-xs leading-relaxed text-[#405264]">
                                        {child.description}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#E8F0F7] font-semibold text-[#12304A]"
                        : "text-[#405264] hover:bg-[#F7FAFC] hover:text-[#12304A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.primaryCta.href}
            className="hidden items-center gap-2 rounded-xl bg-[#12304A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0C2135] sm:inline-flex"
          >
            <span>{siteConfig.primaryCta.label}</span>
            <ArrowRight className="h-4 w-4 text-[#DDF3F1]" />
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
