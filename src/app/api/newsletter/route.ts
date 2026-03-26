import { NextRequest, NextResponse } from "next/server";

const NOTIFICATION_EMAIL = "anas.accou@gmail.com";

// Simple in-memory store for newsletter (resets on deploy)
// For production, use a database like Vercel KV, Planetscale, or Supabase
const subscribers = new Set<string>();

// POST - Subscribe to newsletter
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "البريد الإلكتروني مطلوب" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "صيغة البريد الإلكتروني غير صحيحة" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribers.has(email)) {
      return NextResponse.json({
        success: true,
        message: "أنت مشترك بالفعل في النشرة البريدية",
      });
    }

    // Add to subscribers
    subscribers.add(email);

    // Log new subscription
    console.log(`New newsletter subscriber: ${email}`);
    console.log(`Total subscribers: ${subscribers.size}`);

    // Send notification email
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'المحاسب الشامل <onboarding@resend.dev>',
            to: NOTIFICATION_EMAIL,
            subject: `مشترك جديد في النشرة البريدية`,
            text: `مشترك جديد: ${email}\nإجمالي المشتركين: ${subscribers.size}`,
          }),
        });
      } catch (error) {
        console.error("Failed to send notification:", error);
      }
    }

    return NextResponse.json({
      success: true,
      message: "تم الاشتراك بنجاح في النشرة البريدية",
    });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء الاشتراك" },
      { status: 500 }
    );
  }
}

// DELETE - Unsubscribe from newsletter
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, error: "البريد الإلكتروني مطلوب" },
        { status: 400 }
      );
    }

    // Remove from subscribers
    subscribers.delete(email);

    return NextResponse.json({
      success: true,
      message: "تم إلغاء الاشتراك بنجاح",
    });
  } catch (error) {
    console.error("Error unsubscribing from newsletter:", error);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء إلغاء الاشتراك" },
      { status: 500 }
    );
  }
}

// GET - Get subscriber count
export async function GET() {
  return NextResponse.json({
    success: true,
    count: subscribers.size,
    timestamp: new Date().toISOString(),
  });
}
