# 🔌 التكاملات الخارجية (External Integrations)

## 📋 نظرة عامة

| التكامل | النوع | الحالة |
|---------|------|--------|
| WhatsApp | تواصل | ✅ مفعل |
| ZATCA/Fatora | فوترة إلكترونية | ✅ متكامل |
| Email | إشعارات | ✅ مفعل |
| SEO/OpenGraph | تسويق | ✅ مفعل |

---

## 📱 WhatsApp Integration

### الوصف:
تكامل مع WhatsApp للأعمال للتواصل المباشر مع العملاء.

### التكوين:

```typescript
// src/app/page.tsx

const WHATSAPP_NUMBER = "966505166252";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
```

### الاستخدام:

```typescript
// زر WhatsApp العائم
<motion.a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full"
>
  <MessageCircle className="w-6 h-6" />
</motion.a>

// رابط في البطاقات
<Button onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
  <MessageCircle className="w-4 h-4 ml-2" />
  واتساب
</Button>
```

### الميزات:
- ✅ زر عائم للتواصل السريع
- ✅ روابط في كل النوافذ المنبثقة
- ✅ فتح في تبويب جديد

---

## 🧾 ZATCA / Fatora Integration

### الوصف:
تكامل مع هيئة الزكاة والضريبة والجمارك السعودية عبر منصة فاتورة.

### المستوى:
- ✅ المرحلة الأولى: إصدار وحفظ الفواتير
- ✅ المرحلة الثانية: الربط والتكامل المباشر

### الشهادات:

```typescript
// المعتمدات
const certifications = {
  zatca: "معتمد من هيئة الزكاة والضريبة",
  fatora: "مرتبط مع منصة فاتورة",
  phase1: "المرحلة الأولى",
  phase2: "المرحلة الثانية",
};
```

### الميزات المقدمة:

| الميزة | الوصف |
|--------|-------|
| QR Code | رمز QR في كل فاتورة |
| XML/PDF | صيغ الفواتير المعتمدة |
| التوقيع الرقمي | توقيع إلكتروني معتمد |
| الإرسال الفوري | ربط مباشر مع ZATCA |
| الإشعارات | قبول/رفض فوري |

---

## 📧 Email Integration

### الوصف:
نظام إرسال الإشعارات عبر البريد الإلكتروني.

### التكوين:

```env
# .env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
NOTIFICATION_EMAIL="anas.accou@gmail.com"
```

### الاستخدام في API:

```typescript
// src/app/api/contact/route.ts

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// إرسال الإشعار
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.NOTIFICATION_EMAIL,
  subject: "طلب تواصل جديد",
  html: `
    <h2>طلب تواصل جديد</h2>
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>البريد:</strong> ${email}</p>
    <p><strong>الهاتف:</strong> ${phone}</p>
    <p><strong>الرسالة:</strong> ${message}</p>
  `,
});
```

---

## 🔍 SEO Integration

### Meta Tags:

```typescript
// src/app/layout.tsx

export const metadata: Metadata = {
  title: "المحاسب الشامل - برنامج محاسبي متكامل",
  description: "برنامج محاسبي سحابي سعودي متوافق مع ZATCA",
  keywords: ["برنامج محاسبي", "ZATCA", "فوترة إلكترونية", "السعودية"],
  authors: [{ name: "المحاسب الشامل" }],
  creator: "المحاسب الشامل",
  publisher: "المحاسب الشامل",
  robots: {
    index: true,
    follow: true,
  },
};
```

### Open Graph:

```typescript
openGraph: {
  type: "website",
  locale: "ar_SA",
  url: "https://alshamel.com",
  siteName: "المحاسب الشامل",
  title: "المحاسب الشامل - برنامج محاسبي متكامل",
  description: "برنامج محاسبي سحابي سعودي...",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "المحاسب الشامل",
    },
  ],
},
```

### Schema.org:

```typescript
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "المحاسب الشامل",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "SAR",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "10000",
  },
};
```

---

## 📄 PDF Downloads

### الوصف:
ملفات PDF للعروض التقنية للقطاعات التجارية.

### الملفات المتاحة:

| الملف | القطاع |
|-------|--------|
| `/pdfs/sectors/restaurants.pdf` | المطاعم والكافيهات |
| `/pdfs/sectors/factories.pdf` | المصانع والإنتاج |
| `/pdfs/sectors/supermarkets.pdf` | السوبرماركت والهايبر ماركت |
| `/pdfs/sectors/spareparts.pdf` | قطع غيار السيارات |
| `/pdfs/sectors/building-materials.pdf` | مواد البناء |

### الاستخدام:

```typescript
// رابط التحميل
<a 
  href="/pdfs/sectors/restaurants.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Download className="w-5 h-5" />
  تحميل العرض الفني (PDF)
</a>
```

---

## 🌐 PWA Support

### Manifest:

```json
// public/manifest.json
{
  "name": "المحاسب الشامل",
  "short_name": "المحاسب",
  "description": "برنامج محاسبي متكامل",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d9488",
  "icons": [
    {
      "src": "/logo.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🔄 مستقبل التكاملات

### قيد التخطيط:

| التكامل | الوصف | الأولوية |
|---------|-------|----------|
| **SMS Gateway** | إرسال رسائل SMS | متوسطة |
| **Google Analytics** | تتبع الزيارات | عالية |
| **Facebook Pixel** | تتبع التحويلات | متوسطة |
| **Payment Gateway** | بوابات الدفع | منخفضة |
| **CRM Integration** | ربط مع أنظمة CRM | منخفضة |

---

## 🔒 أمان التكاملات

### أفضل الممارسات:

1. **استخدام Environment Variables**
   ```env
   # لا تكتب القيم الحساسة في الكود
   API_KEY=your-secret-key
   ```

2. **HTTPS فقط**
   ```typescript
   // تأكد من استخدام HTTPS
   const API_URL = process.env.NODE_ENV === 'production' 
     ? 'https://api.example.com'
     : 'http://localhost:3001';
   ```

3. **التحقق من المدخلات**
   ```typescript
   // تحقق من جميع المدخلات
   if (!email.includes('@')) {
     throw new Error('Invalid email');
   }
   ```

---

## 📚 ملفات التوثيق المرتبطة

- [ARCHITECTURE.md](./ARCHITECTURE.md) - بنية النظام
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - دليل التثبيت
- [MODIFICATION_GUIDE.md](./MODIFICATION_GUIDE.md) - دليل التعديل
