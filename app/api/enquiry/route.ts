import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations";

function generateReferenceId(): string {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ATH-${datePart}-${randomPart}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Reject automated bots silently or with validation error if honeypot is filled
    if (body && typeof body.websiteHoneypot === "string" && body.websiteHoneypot.trim().length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to process submission.",
        },
        { status: 400 }
      );
    }

    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] || "form");
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: "Please verify the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const referenceId = generateReferenceId();
    const submittedAt = new Date().toISOString();

    // Server-side record payload ready for CRM / email provider integration via environment secrets
    const sanitizedRecord = {
      referenceId,
      submittedAt,
      fullName: parsed.data.fullName,
      organization: parsed.data.organization,
      workEmail: parsed.data.workEmail,
      phone: parsed.data.phone,
      serviceRequired: parsed.data.serviceRequired,
      location: parsed.data.location,
      requirementDetails: parsed.data.requirementDetails,
    };

    if (process.env.ENQUIRY_WEBHOOK_URL) {
      await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedRecord),
      });
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        submittedAt,
        message: "Enquiry submitted successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload or server error.",
      },
      { status: 500 }
    );
  }
}
