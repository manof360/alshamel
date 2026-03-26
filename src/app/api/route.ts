import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "المحاسب الشامل API",
    version: "1.0.0",
    description: "نظام محاسبي سحابي متكامل - API",
    endpoints: {
      contact: "/api/contact",
      demoRequest: "/api/demo-request",
      newsletter: "/api/newsletter",
    },
  });
}
