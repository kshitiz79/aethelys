"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#12304A] transition-colors hover:bg-[#E8F0F7]"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[73px] z-40 bg-[#0C2135]/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="fixed inset-x-0 top-[73px] z-50 max-h-[calc(100vh-73px)] overflow-y-auto border-b border-slate-200 bg-white px-4 py-5 shadow-lg sm:px-6"
          >
            <ul className="space-y-1">
              {siteConfig.navigation.map((item) => {
                if ("children" in item && item.children) {
                  return (
                    <li key={item.href} className="rounded-lg">
                      <button
                        type="button"
                        onClick={() => setServicesExpanded((prev) => !prev)}
                        aria-expanded={servicesExpanded}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-semibold text-[#12304A] hover:bg-[#F7FAFC]"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#405264] transition-transform ${
                            servicesExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {servicesExpanded && (
                        <ul className="mt-1 space-y-1 border-l-2 border-[#DDF3F1] pl-3 ml-3">
                          {item.children.map((child) => {
                            const active = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                    active
                                      ? "bg-[#DDF3F1] font-semibold text-[#12304A]"
                                      : "text-[#405264] hover:bg-[#F7FAFC] hover:text-[#12304A]"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
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

            <div className="mt-5 border-t border-slate-200 pt-5">
              <Link
                href={siteConfig.primaryCta.href}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#12304A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C2135]"
              >
                <span>{siteConfig.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
