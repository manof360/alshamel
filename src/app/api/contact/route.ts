import { NextRequest, NextResponse } from "next/server";

// Email configuration
const NOTIFICATION_EMAIL = "anas.accou@gmail.com";

// Send email using Resend API (free tier available)
async function sendEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  product?: string;
}) {
  const { name, email, phone, company, message, product } = data;

  const emailSubject = `طلب جديد من المحاسب الشامل - ${name}`;
  const emailBody = `
طلب جديد من موقع المحاسب الشامل
================================

معلومات العميل:
- الاسم: ${name}
- البريد الإلكتروني: ${email}
- رقم الهاتف: ${phone || "غير محدد"}
- الشركة: ${company || "غير محدد"}
- المنتج المطلوب: ${product || "غير محدد"}

الرسالة:
${message}

---
تم الإرسال من: ${new Date().toLocaleString('ar-SA')}
  `.trim();

  // If Resend API key is configured, send real email
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'المحاسب الشامل <onboarding@resend.dev>',
          to: NOTIFICATION_EMAIL,
          subject: emailSubject,
          text: emailBody,
          reply_to: email,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Resend API error:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Failed to send email via Resend:", error);
      return false;
    }
  }

  // Fallback: Log email for development
  console.log("==========================================");
  console.log("📧 إرسال إيميل إلى:", NOTIFICATION_EMAIL);
  console.log("📌 الموضوع:", emailSubject);
  console.log("📝 المحتوى:");
  console.log(emailBody);
  console.log("==========================================");

  return true;
}

// POST - Create new contact and send notification email
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, product } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "الاسم والبريد الإلكتروني والرسالة مطلوبة" },
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

    // Send notification email
    const emailSent = await sendEmail({
      name,
      email,
      phone,
      company,
      message,
      product,
    });

    // Log for debugging
    console.log(`New contact from: ${name} (${email}) - Email sent: ${emailSent}`);

    return NextResponse.json({
      success: true,
      message: "تم استلام رسالتك بنجاح، سنتواصل معك قريباً",
      emailSent,
    });
  } catch (error) {
    console.error("Error processing contact:", error);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء إرسال الطلب" },
      { status: 500 }
    );
  }
}

// GET - Health check
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API is running",
    timestamp: new Date().toISOString(),
  });
}
