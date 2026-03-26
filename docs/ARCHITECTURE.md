# 🏗️ بنية النظام (System Architecture)

## 📐 نظرة عامة على البنية

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              المستخدم (Browser)                              │
│                    RTL - Arabic - Dark/Light Mode Support                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            Frontend (Next.js 16)                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   React     │  │  Tailwind   │  │  Framer     │  │  shadcn/ui  │        │
│  │  Components │  │    CSS      │  │   Motion    │  │  Components │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Next.js App Router (Server)                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Pages     │  │  API Routes │  │    SSR      │  │  Middleware │        │
│  │  /app/*     │  │   /api/*    │  │  Rendering  │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Backend Services                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Contact    │  │   Demo      │  │ Newsletter  │  │   Email     │        │
│  │   Service   │  │  Request    │  │  Service    │  │  Service    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Database Layer (Prisma ORM)                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                     SQLite Database (custom.db)                      │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │Contact  │ │  Demo   │ │Article  │ │  FAQ    │ │Setting  │       │   │
│  │  │         │ │Request  │ │         │ │         │ │         │       │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 هيكل المجلدات

```
/home/z/my-project/
│
├── 📁 prisma/                          # مخطط قاعدة البيانات
│   └── schema.prisma                   # تعريف الجداول والعلاقات
│
├── 📁 db/                              # ملفات قاعدة البيانات
│   └── custom.db                       # قاعدة بيانات SQLite
│
├── 📁 public/                          # الملفات العامة
│   ├── logo.svg                        # شعار SVG
│   ├── logo.png                        # شعار PNG
│   ├── shamel-logo.png                 # شعار المحاسب الشامل
│   ├── fatora-logo.png                 # شعار فاتورة
│   ├── og-image.png                    # صورة Open Graph
│   ├── manifest.json                   # إعدادات PWA
│   ├── robots.txt                      # تعليمات محركات البحث
│   ├── sitemap.xml                     # خريطة الموقع
│   ├── grid.svg                        # خلفية الشبكة
│   └── 📁 pdfs/sectors/                # ملفات PDF القطاعات
│       ├── restaurants.pdf             # المطاعم والكافيهات
│       ├── factories.pdf               # المصانع والإنتاج
│       ├── supermarkets.pdf            # السوبرماركت
│       ├── spareparts.pdf              # قطع الغيار
│       └── building-materials.pdf      # مواد البناء
│
├── 📁 src/                             # الكود المصدري
│   │
│   ├── 📁 app/                         # Next.js App Router
│   │   ├── layout.tsx                  # التخطيط الرئيسي
│   │   ├── page.tsx                    # الصفحة الرئيسية (SPA)
│   │   ├── globals.css                 # الأنماط العامة
│   │   ├── sitemap.ts                  # خريطة الموقع الديناميكية
│   │   │
│   │   └── 📁 api/                     # API Routes
│   │       ├── route.ts                # نقطة الدخول الرئيسية
│   │       ├── 📁 contact/             # API التواصل
│   │       │   └── route.ts
│   │       ├── 📁 demo-request/        # API طلب العرض
│   │       │   └── route.ts
│   │       └── 📁 newsletter/          # API النشرة البريدية
│   │           └── route.ts
│   │
│   ├── 📁 components/                  # مكونات React
│   │   └── 📁 ui/                      # مكونات shadcn/ui (45+)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── badge.tsx
│   │       ├── tabs.tsx
│   │       ├── accordion.tsx
│   │       └── ... (40+ مكون آخر)
│   │
│   ├── 📁 lib/                         # المكتبات المساعدة
│   │   ├── db.ts                       # اتصال Prisma
│   │   └── utils.ts                    # دوال مساعدة (cn)
│   │
│   └── 📁 hooks/                       # React Hooks
│       ├── use-toast.ts                # إشعارات Toast
│       ├── use-mobile.ts               # كشف الجوال
│       └── use-toast.ts
│
├── 📁 examples/                        # أمثلة توضيحية
│   └── 📁 websocket/                   # مثال WebSocket
│
├── 📁 docs/                            # التوثيق
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── CODE_GUIDE.md
│   ├── DEVELOPER_GUIDE.md
│   ├── SETUP_GUIDE.md
│   ├── MODIFICATION_GUIDE.md
│   ├── INTEGRATIONS.md
│   └── CHANGELOG.md
│
├── 📁 upload/                          # ملفات مرفوعة
│
├── 📄 package.json                     # تبعيات المشروع
├── 📄 next.config.ts                   # إعدادات Next.js
├── 📄 tailwind.config.ts               # إعدادات Tailwind
├── 📄 tsconfig.json                    # إعدادات TypeScript
├── 📄 components.json                  # إعدادات shadcn/ui
├── 📄 Caddyfile                        # إعدادات الخادم
└── 📄 .env                             # متغيرات البيئة
```

---

## 🔄 تدفق البيانات

### 1. تدفق عرض الصفحة

```
المستخدم يفتح الموقع
        │
        ▼
┌───────────────────┐
│   DNS Resolution  │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│   Next.js Server  │
│   (Port 3000)     │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  SSR Rendering    │
│  layout.tsx       │
│  page.tsx         │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  HTML Response    │
│  + CSS + JS       │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│   Browser Render  │
│   Hydration       │
└───────────────────┘
```

### 2. تدفق نموذج التواصل

```
المستخدم يملأ النموذج
        │
        ▼
┌───────────────────┐
│  Client Side      │
│  Validation       │
│  (Zod)            │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  POST /api/contact│
│  JSON Payload     │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Server Side      │
│  Validation       │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Prisma Create    │
│  Contact Record   │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Send Email       │
│  Notification     │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Return Response  │
│  Success/Error    │
└───────────────────┘
```

---

## 🧩 الطبقات (Layers)

### الطبقة الأولى: Presentation Layer (واجهة المستخدم)

| الملف | الوصف |
|-------|-------|
| `src/app/page.tsx` | الصفحة الرئيسية - كل المحتوى |
| `src/app/layout.tsx` | التخطيط الرئيسي - SEO، RTL |
| `src/components/ui/*` | مكونات UI قابلة لإعادة الاستخدام |

### الطبقة الثانية: Business Logic (منطق الأعمال)

| الملف | الوصف |
|-------|-------|
| `src/app/api/contact/route.ts` | معالجة طلبات التواصل |
| `src/app/api/demo-request/route.ts` | معالجة طلبات العرض |
| `src/app/api/newsletter/route.ts` | معالجة الاشتراكات |

### الطبقة الثالثة: Data Access (الوصول للبيانات)

| الملف | الوصف |
|-------|-------|
| `src/lib/db.ts` | اتصال Prisma |
| `prisma/schema.prisma` | تعريف قاعدة البيانات |

### الطبقة الرابعة: Database (قاعدة البيانات)

| الملف | الوصف |
|-------|-------|
| `db/custom.db` | قاعدة بيانات SQLite |

---

## 🔌 APIs الداخلية

### 1. Contact API

```typescript
// GET /api/contact
// جلب جميع جهات الاتصال (للأدمين)

// POST /api/contact
// إنشاء طلب تواصل جديد
{
  name: string,
  email: string,
  phone: string,
  company?: string,
  product?: string,
  message?: string
}

// PUT /api/contact
// تحديث حالة التواصل
{
  id: string,
  status: "new" | "contacted" | "converted"
}
```

### 2. Demo Request API

```typescript
// GET /api/demo-request
// جلب طلبات العرض

// POST /api/demo-request
// إنشاء طلب عرض جديد
{
  name: string,
  email: string,
  phone: string,
  company?: string,
  employees?: string,
  businessType?: string,
  notes?: string
}
```

### 3. Newsletter API

```typescript
// POST /api/newsletter
// الاشتراك في النشرة
{
  email: string
}

// DELETE /api/newsletter
// إلغاء الاشتراك
{
  email: string
}
```

---

## 🎨 نظام التصميم

### الألوان (CSS Variables)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 160 84% 39%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  --muted: 210 40% 96%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 160 84% 45%;
  --secondary: 217.2 32.6% 17.5%;
  --accent: 217.2 32.6% 17.5%;
  --muted: 217.2 32.6% 17.5%;
  --border: 217.2 32.6% 17.5%;
}
```

### الخطوط

```css
font-family: 'IBM Plex Sans Arabic', sans-serif;
```

### الاتجاه

```html
<html dir="rtl" lang="ar">
```

---

## 🔐 الأمان

### 1. CORS
- مسموح لجميع الأصول في بيئة التطوير
- يجب تقييده في الإنتاج

### 2. Validation
- Zod للتحقق من البيانات
- Client-side و Server-side

### 3. Environment Variables
- `.env` للإعدادات الحساسة

---

## 📊 الأداء

### 1. التحسينات المطبقة

| التحسين | الوصف |
|---------|-------|
| **SSR** | Server-Side Rendering للصفحات |
| **Image Optimization** | Next.js Image Component |
| **Code Splitting** | تقسيم الكود تلقائياً |
| **Lazy Loading** | تحميل المكونات عند الحاجة |
| **Font Optimization** | تحميل الخطوط بشكل محسن |

### 2. المقاييس المستهدفة

| المقياس | الهدف |
|---------|-------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive** | < 3s |
| **Cumulative Layout Shift** | < 0.1 |

---

## 🌍 SEO

### 1. Meta Tags

```typescript
export const metadata: Metadata = {
  title: "المحاسب الشامل - برنامج محاسبي متكامل",
  description: "برنامج محاسبي سحابي سعودي...",
  keywords: ["برنامج محاسبي", "ZATCA", "فوترة إلكترونية"],
  // ...
};
```

### 2. Schema.org (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "المحاسب الشامل",
  "applicationCategory": "BusinessApplication",
  // ...
}
```

### 3. Open Graph

```typescript
openGraph: {
  title: "المحاسب الشامل",
  description: "...",
  images: ["/og-image.png"],
}
```

---

## 📱 PWA Support

```json
// manifest.json
{
  "name": "المحاسب الشامل",
  "short_name": "المحاسب",
  "display": "standalone",
  "theme_color": "#0d9488",
  "background_color": "#ffffff"
}
```

---

## 🔄 مزامنة البيانات

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Server    │────▶│  Database   │
│   State     │     │   Action    │     │   Update    │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                   │
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Toast     │     │   Response  │     │   Prisma    │
│Notification │◀────│   Success   │◀────│   Result    │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## 📚 ملفات التوثيق المرتبطة

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - نظرة عامة
- [DATABASE.md](./DATABASE.md) - قاعدة البيانات
- [CODE_GUIDE.md](./CODE_GUIDE.md) - دليل الكود
