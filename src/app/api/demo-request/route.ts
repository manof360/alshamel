import { NextRequest, NextResponse } from "next/server";

const NOTIFICATION_EMAIL = "anas.accou@gmail.com";

// Send demo request email
async function sendDemoRequestEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  employees?: string;
  businessType?: string;
  notes?: string;
}) {
  const { name, email, phone, company, employees, businessType, notes } = data;

  const emailSubject = `طلب عرض تجريبي جديد - ${name}`;
  const emailBody = `
طلب عرض تجريبي جديد من المحاسب الشامل
========================================

معلومات العميل:
- الاسم: ${name}
- البريد الإلكتروني: ${email}
- رقم الهاتف: ${phone}
- الشركة: ${company || "غير محدد"}
- عدد الموظفين: ${employees || "غير محدد"}
- نوع النشاط: ${businessType || "غير محدد"}

ملاحظات إضافية:
${notes || "لا توجد ملاحظات"}

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

      return response.ok;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }

  // Fallback: Log email
  console.log("==========================================");
  console.log("📧 طلب عرض تجريبي إلى:", NOTIFICATION_EMAIL);
  console.log(emailBody);
  console.log("==========================================");

  return true;
}

// POST - Create demo request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, employees, businessType, notes } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "الاسم والبريد الإلكتروني ورقم الهاتف مطلوبة" },
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
    const emailSent = await sendDemoRequestEmail({
      name,
      email,
      phone,
      company,
      employees,
      businessType,
      notes,
    });

    console.log(`New demo request from: ${name} (${email})`);

    return NextResponse.json({
      success: true,
      message: "تم استلام طلبك بنجاح، سيتواصل معك فريقنا خلال 24 ساعة",
      emailSent,
    });
  } catch (error) {
    console.error("Error creating demo request:", error);
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
    message: "Demo Request API is running",
    timestamp: new Date().toISOString(),
  });
}
