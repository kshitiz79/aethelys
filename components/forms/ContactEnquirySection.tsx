"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function ContactEnquirySection() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? undefined;

  return <EnquiryForm defaultService={serviceParam} />;
}
