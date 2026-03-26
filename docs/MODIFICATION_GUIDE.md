# 🔧 دليل التعديل (Modification Guide)

## 🎨 تعديل واجهة المستخدم

### 1. تعديل الألوان

**الموقع:** `src/app/globals.css`

```css
:root {
  /* اللون الأساسي */
  --primary: 160 84% 39%;        /* Teal */
  
  /* اللون الثانوي */
  --secondary: 210 40% 96%;      /* Light Gray */
  
  /* لون الخلفية */
  --background: 0 0% 100%;       /* White */
  
  /* لون النص */
  --foreground: 222.2 84% 4.9%;  /* Dark */
}

.dark {
  /* الألوان للوضع الداكن */
  --primary: 160 84% 45%;
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### 2. تعديل الخط

**الموقع:** `src/app/layout.tsx`

```typescript
import { IBM_Plex_Sans_Arabic } from "next/font/google";

// تغيير الخط
const customFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});
```

### 3. تعديل قسم في الصفحة

**الموقع:** `src/app/page.tsx`

```typescript
// مثال: تعديل قسم البطل
<section id="hero" className="relative overflow-hidden gradient-hero">
  <div className="container mx-auto px-4 py-20">
    <h1>عنوان جديد</h1>
    <p>وصف جديد</p>
    {/* ... */}
  </div>
</section>
```

---

## 📦 إضافة منتج جديد

### الخطوة 1: إضافة البيانات

**الموقع:** `src/app/page.tsx`

```typescript
const products = [
  // ... المنتجات الحالية
  {
    name: "منتج جديد",
    description: "وصف المنتج الجديد",
    icon: <Icon className="w-10 h-10" />,
    features: ["ميزة 1", "ميزة 2", "ميزة 3"],
    color: "from-blue-500 to-blue-700",
    popular: false,
  },
];
```

### الخطوة 2: اختيار أيقونة

```typescript
import { YourIcon } from "lucide-react";
```

---

## 🧩 إضافة موديول جديد

### الخطوة 1: تحديد الفئة

```typescript
const modulesCategories = [
  {
    title: "الموديولات الأساسية",
    icon: <Calculator className="w-6 h-6" />,
    description: "الحلول المحاسبية الأساسية",
    modules: [
      // ... الموديولات الحالية
      {
        name: "موديول جديد",
        desc: "وصف الموديول الجديد",
        icon: <NewIcon className="w-6 h-6" />,
        features: ["ميزة 1", "ميزة 2"],
        benefits: ["فائدة 1", "فائدة 2"],
      },
    ],
  },
];
```

---

## 🏢 إضافة نشاط تجاري جديد

### الخطوة 1: إضافة البيانات

```typescript
const businessActivities: BusinessActivity[] = [
  // ... الأنشطة الحالية
  {
    name: "نشاط تجاري جديد",
    desc: "وصف النشاط التجاري",
    icon: <NewIcon className="w-8 h-8" />,
    pdfUrl: "/pdfs/sectors/new-activity.pdf", // اختياري
    features: ["ميزة 1", "ميزة 2", "ميزة 3", "ميزة 4", "ميزة 5", "ميزة 6"],
    solutions: ["حل 1", "حل 2", "حل 3", "حل 4"],
    stats: { value: "50+", label: "منشأة" }
  },
];
```

### الخطوة 2: إضافة ملف PDF (اختياري)

1. ضع الملف في `public/pdfs/sectors/`
2. حدث `pdfUrl` في البيانات

---

## 📝 إضافة مقال جديد

### الخطوة 1: إضافة المقال

```typescript
const blogArticles = [
  // ... المقالات الحالية
  {
    id: 7,
    title: "عنوان المقال الجديد",
    excerpt: "ملخص المقال...",
    category: "التصنيف",
    tags: ["وسم1", "وسم2", "وسم3"],
    date: "2024-12-01",
    readTime: "5 دقائق",
    featured: false,
    content: `
## مقدمة
محتوى المقال...

## القسم الأول
...

## الخلاصة
...
    `
  },
];
```

---

## ❓ إضافة سؤال شائع

```typescript
const faqs = [
  // ... الأسئلة الحالية
  {
    question: "السؤال الجديد؟",
    answer: "الجواب على السؤال الجديد...",
    category: "التصنيف",
  },
];
```

---

## 🗄️ إضافة جدول قاعدة بيانات

### الخطوة 1: تعريف المخطط

**الموقع:** `prisma/schema.prisma`

```prisma
model NewTable {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
}
```

### الخطوة 2: تطبيق التغييرات

```bash
bun run db:push
```

### الخطوة 3: إنشاء API

**الموقع:** `src/app/api/new-table/route.ts`

```typescript
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const items = await db.newTable.findMany();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const item = await db.newTable.create({
    data: body,
  });
  return NextResponse.json(item);
}
```

---

## 🔌 إضافة API Endpoint جديد

### الخطوة 1: إنشاء الملف

**الموقع:** `src/app/api/new-endpoint/route.ts`

```typescript
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET - جلب البيانات
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter");
    
    const data = await db.table.findMany({
      where: filter ? { field: filter } : undefined,
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ" },
      { status: 500 }
    );
  }
}

// POST - إنشاء سجل جديد
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // التحقق من البيانات
    if (!body.requiredField) {
      return NextResponse.json(
        { error: "البيانات غير مكتملة" },
        { status: 400 }
      );
    }
    
    const data = await db.table.create({
      data: {
        field: body.requiredField,
        optional: body.optionalField,
      },
    });
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ" },
      { status: 500 }
    );
  }
}

// PUT - تحديث سجل
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const data = await db.table.update({
      where: { id: body.id },
      data: body,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ" },
      { status: 500 }
    );
  }
}

// DELETE - حذف سجل
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    await db.table.delete({
      where: { id },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ" },
      { status: 500 }
    );
  }
}
```

---

## 🎭 إضافة Dialog جديد

### الخطوة 1: إضافة State

```typescript
const [selectedItem, setSelectedItem] = useState<Item | null>(null);
```

### الخطوة 2: إضافة Dialog

```typescript
<Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
    {selectedItem && (
      <>
        <DialogHeader>
          <DialogTitle>{selectedItem.name}</DialogTitle>
          <DialogDescription>{selectedItem.desc}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          {/* المحتوى */}
        </div>
      </>
    )}
  </DialogContent>
</Dialog>
```

### الخطوة 3: إضافة onClick

```typescript
<Card onClick={() => setSelectedItem(item)}>
  {/* محتوى البطاقة */}
</Card>
```

---

## 🌐 تعديل معلومات التواصل

**الموقع:** `src/app/page.tsx`

```typescript
// تعديل رقم الواتساب
const WHATSAPP_NUMBER = "966XXXXXXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "+966XXXXXXXXX";
const EMAIL = "new@email.com";
```

---

## 🔐 إضافة مصادقة (اختياري)

### الخطوة 1: إعداد NextAuth

```bash
bun add next-auth
```

### الخطوة 2: إنشاء API Route

**الموقع:** `src/app/api/auth/[...nextauth]/route.ts`

```typescript
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // منطق المصادقة
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
```

---

## ✅ قائمة التحقق قبل التعديل

- [ ] قراءة التوثيق
- [ ] فهم البنية الحالية
- [ ] اختبار التعديلات محلياً
- [ ] التحقق من عدم كسر الميزات الحالية
- [ ] تحديث التوثيق إذا لزم الأمر

---

## 📚 ملفات التوثيق المرتبطة

- [CODE_GUIDE.md](./CODE_GUIDE.md) - دليل الكود
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - دليل المطورين
- [DATABASE.md](./DATABASE.md) - قاعدة البيانات
