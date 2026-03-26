# 📖 دليل الكود (Code Guide)

## 📁 الملفات الرئيسية

---

## 1. الصفحة الرئيسية: `src/app/page.tsx`

### الوصف:
الملف الرئيسي للموقع - يحتوي على جميع أقسام الصفحة في مكون واحد كبير (Single Page Application).

### الهيكل:

```typescript
"use client";

import { useState, useEffect } from "react";
// ... imports

// الثوابت
const WHATSAPP_NUMBER = "966505166252";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// بيانات الموديولات
const modulesCategories = [...];

// بيانات الأنشطة التجارية
const businessActivities = [...];

// بيانات المنتجات
const products = [...];

// بيانات المقالات
const blogArticles = [...];

// بيانات الأسئلة الشائعة
const faqs = [...];

export default function Home() {
  // State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedBusinessActivity, setSelectedBusinessActivity] = useState(null);
  
  // Hooks
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  
  // Functions
  const scrollToSection = (href: string) => {...};
  const handleSubmit = async (e: React.FormEvent) => {...};
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* Hero */}
      {/* About */}
      {/* Features */}
      {/* Modules */}
      {/* Business Activities */}
      {/* Products */}
      {/* Invoicing */}
      {/* Blog */}
      {/* FAQ */}
      {/* Contact */}
      {/* Footer */}
      {/* Dialogs */}
      {/* Floating Buttons */}
    </div>
  );
}
```

### المكونات الرئيسية:

| المكون | الوصف |
|--------|-------|
| `Header` | شريط التنقل العلوي |
| `Hero Section` | قسم البطل الرئيسي |
| `About Section` | قسم من نحن |
| `Features Section` | قسم المميزات |
| `Modules Section` | قسم الموديولات |
| `Business Activities Section` | قسم الأنشطة التجارية |
| `Products Section` | قسم المنتجات |
| `Invoicing Section` | قسم الفوترة الإلكترونية |
| `Blog Section` | قسم المدونة |
| `FAQ Section` | قسم الأسئلة الشائعة |
| `Contact Section` | قسم التواصل |
| `Footer` | التذييل |

### الدوال الرئيسية:

#### `scrollToSection(href: string)`
```typescript
// التمرير السلس إلى قسم معين
const scrollToSection = (href: string) => {
  const element = document.getElementById(href.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  setMobileMenuOpen(false);
};
```

#### `handleSubmit(e: React.FormEvent)`
```typescript
// إرسال نموذج التواصل
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactForm),
    });
    // ...
  } catch (error) {
    // ...
  }
};
```

---

## 2. التخطيط الرئيسي: `src/app/layout.tsx`

### الوصف:
يحدد التخطيط العام للموقع - RTL، الخطوط، SEO، Theme Provider.

### الكود:

```typescript
import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "المحاسب الشامل - برنامج محاسبي متكامل",
  description: "برنامج محاسبي سحابي سعودي متوافق مع ZATCA",
  // ...
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </head>
      <body className={ibmPlex.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### البيانات الوصفية (Metadata):

| الحقل | القيمة |
|-------|--------|
| `title` | المحاسب الشامل - برنامج محاسبي متكامل |
| `description` | برنامج محاسبي سحابي سعودي... |
| `keywords` | برنامج محاسبي, ZATCA, فوترة إلكترونية |
| `openGraph` | صورة، عنوان، وصف |
| `twitter` | بطاقة Twitter |

---

## 3. API Routes

### 3.1 Contact API: `src/app/api/contact/route.ts`

```typescript
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET - جلب جميع جهات الاتصال
export async function GET() {
  const contacts = await db.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(contacts);
}

// POST - إنشاء جهة اتصال جديدة
export async function POST(request: Request) {
  const body = await request.json();
  const contact = await db.contact.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      product: body.product,
      message: body.message,
      source: "website",
      status: "new",
    },
  });
  return NextResponse.json(contact);
}

// PUT - تحديث حالة التواصل
export async function PUT(request: Request) {
  const body = await request.json();
  const contact = await db.contact.update({
    where: { id: body.id },
    data: { status: body.status },
  });
  return NextResponse.json(contact);
}
```

### 3.2 Demo Request API: `src/app/api/demo-request/route.ts`

```typescript
// GET - جلب طلبات العرض
export async function GET() {
  const requests = await db.demoRequest.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(requests);
}

// POST - إنشاء طلب عرض جديد
export async function POST(request: Request) {
  const body = await request.json();
  const demoRequest = await db.demoRequest.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      employees: body.employees,
      businessType: body.businessType,
      notes: body.notes,
      status: "pending",
    },
  });
  return NextResponse.json(demoRequest);
}
```

### 3.3 Newsletter API: `src/app/api/newsletter/route.ts`

```typescript
// POST - الاشتراك
export async function POST(request: Request) {
  const body = await request.json();
  const subscriber = await db.newsletterSubscriber.create({
    data: { email: body.email, active: true },
  });
  return NextResponse.json(subscriber);
}

// DELETE - إلغاء الاشتراك
export async function DELETE(request: Request) {
  const body = await request.json();
  await db.newsletterSubscriber.update({
    where: { email: body.email },
    data: { active: false },
  });
  return NextResponse.json({ success: true });
}
```

---

## 4. اتصال قاعدة البيانات: `src/lib/db.ts`

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

### ملاحظة:
- يتم إنشاء نسخة واحدة من PrismaClient (Singleton Pattern)
- في بيئة التطوير، يتم تسجيل الاستعلامات

---

## 5. دوال مساعدة: `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### استخدام `cn`:

```typescript
// دمج classes مع شروط
<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)}>
```

---

## 6. React Hooks

### 6.1 `use-toast.ts`

```typescript
// استخدام الإشعارات
const { toast } = useToast();

// عرض إشعار
toast({
  title: "تم الإرسال بنجاح",
  description: "سنتواصل معك قريباً",
});

// إشعار خطأ
toast({
  title: "حدث خطأ",
  description: "يرجى المحاولة مرة أخرى",
  variant: "destructive",
});
```

### 6.2 `use-mobile.ts`

```typescript
// كشف الجوال
import { useIsMobile } from "@/hooks/use-mobile";

const isMobile = useIsMobile();
```

---

## 7. مكونات UI

### مثال: Button Component

```typescript
// src/components/ui/button.tsx

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### استخدام Button:

```typescript
<Button variant="default" size="lg">إرسال</Button>
<Button variant="outline">إلغاء</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

---

## 8. الثوابت والمتغيرات

### معلومات التواصل:

```typescript
const WHATSAPP_NUMBER = "966505166252";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "+966505166252";
const EMAIL = "info@alshamel.com";
```

### إحصائيات:

```typescript
const stats = [
  { value: "15+", label: "سنة خبرة" },
  { value: "10,000+", label: "عميل راضٍ" },
  { value: "24/7", label: "دعم فني" },
  { value: "20+", label: "موديول" },
];
```

---

## 📚 ملفات التوثيق المرتبطة

- [ARCHITECTURE.md](./ARCHITECTURE.md) - بنية النظام
- [DATABASE.md](./DATABASE.md) - قاعدة البيانات
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - دليل المطورين
- [MODIFICATION_GUIDE.md](./MODIFICATION_GUIDE.md) - دليل التعديل
