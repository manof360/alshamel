# 👨‍💻 دليل المطورين (Developer Guide)

## 🎯 معايير الكود

### 1. TypeScript

```typescript
// ✅ صحيح - تعريف الأنواع
type ModuleItem = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  features?: string[];
  benefits?: string[];
};

// ✅ صحيح - استخدام الأنواع
const module: ModuleItem = {
  name: "الحسابات",
  desc: "نظام محاسبي متكامل",
  icon: <Calculator />,
};

// ❌ خطأ - استخدام any
const module: any = {...}; // تجنب!
```

### 2. تسمية المتغيرات

| النوع | الأسلوب | مثال |
|-------|--------|------|
| المتغيرات | camelCase | `userName`, `isLoggedIn` |
| الثوابت | UPPER_SNAKE_CASE | `MAX_RETRIES`, `API_URL` |
| الدوال | camelCase | `handleSubmit`, `fetchData` |
| المكونات | PascalCase | `ContactForm`, `ProductCard` |
| الملفات | camelCase أو kebab-case | `contact-form.tsx`, `useToast.ts` |

### 3. التعليقات

```typescript
/**
 * إرسال نموذج التواصل إلى الخادم
 * @param e - حدث النموذج
 * @returns Promise<void>
 */
const handleSubmit = async (e: React.FormEvent) => {
  // منع السلوك الافتراضي
  e.preventDefault();
  
  // تعيين حالة التحميل
  setIsSubmitting(true);
  
  try {
    // إرسال البيانات
    const response = await fetch("/api/contact", {...});
    
    // معالجة النجاح
    toast({ title: "تم الإرسال بنجاح" });
  } catch (error) {
    // معالجة الخطأ
    toast({ title: "حدث خطأ", variant: "destructive" });
  }
};
```

---

## 📁 هيكل الملفات

### 1. المكونات

```typescript
// src/components/ui/button.tsx

// 1. Imports
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

// 2. Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

// 3. Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

// 4. Export
Button.displayName = "Button";
export { Button };
```

### 2. API Routes

```typescript
// src/app/api/example/route.ts

// 1. Imports
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// 2. GET Handler
export async function GET(request: Request) {
  try {
    const data = await db.example.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

// 3. POST Handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await db.example.create({ data: body });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
```

---

## 🎨 أسلوب CSS

### 1. Tailwind CSS

```typescript
// ✅ صحيح - استخدام Tailwind
<div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-md">
  <span className="text-lg font-bold text-primary">عنوان</span>
  <Button variant="outline">زر</Button>
</div>

// ❌ خطأ - CSS مخصص بدون حاجة
<div style={{ display: 'flex', padding: '16px' }}>...</div>
```

### 2. المتغيرات

```typescript
// استخدام متغيرات Tailwind
<div className="bg-background text-foreground border-border">
  <span className="text-primary">نص أساسي</span>
  <span className="text-muted-foreground">نص ثانوي</span>
</div>
```

### 3. Classes مشروطة

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>
```

---

## 🔄 إدارة الحالة

### 1. useState

```typescript
// حالة بسيطة
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);

// حالة معقدة
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
});

// تحديث جزئي
setForm(prev => ({ ...prev, name: "New Name" }));
```

### 2. useEffect

```typescript
// تحميل البيانات عند التثبيت
useEffect(() => {
  fetchData();
}, []);

// الاستماع للتغييرات
useEffect(() => {
  if (userId) {
    fetchUserData(userId);
  }
}, [userId]);

// تنظيف
useEffect(() => {
  const handler = () => {...};
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
}, []);
```

---

## 🌐 التعامل مع API

### 1. GET Request

```typescript
const fetchData = async () => {
  try {
    const response = await fetch("/api/data");
    if (!response.ok) throw new Error("Failed");
    const data = await response.json();
    setData(data);
  } catch (error) {
    toast({ title: "حدث خطأ", variant: "destructive" });
  }
};
```

### 2. POST Request

```typescript
const submitData = async (payload: any) => {
  try {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed");
    const result = await response.json();
    toast({ title: "تم بنجاح" });
    return result;
  } catch (error) {
    toast({ title: "حدث خطأ", variant: "destructive" });
    throw error;
  }
};
```

---

## 🧩 إضافة مكون جديد

### 1. إنشاء المكون

```typescript
// src/components/ui/new-component.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-4 rounded-lg bg-card", className)} {...props}>
        <h3 className="font-bold">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
        {children}
      </div>
    );
  }
);

NewComponent.displayName = "NewComponent";
export { NewComponent };
```

### 2. استخدام المكون

```typescript
import { NewComponent } from "@/components/ui/new-component";

<NewComponent title="عنوان" description="وصف">
  <Button>زر</Button>
</NewComponent>
```

---

## 🔧 إضافة API Endpoint جديد

### 1. إنشاء الملف

```typescript
// src/app/api/new-endpoint/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const param = searchParams.get("param");
    
    const data = await db.table.findMany({
      where: param ? { field: param } : undefined,
    });
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // التحقق من البيانات
    if (!body.required) {
      return NextResponse.json(
        { error: "البيانات غير مكتملة" },
        { status: 400 }
      );
    }
    
    const data = await db.table.create({
      data: body,
    });
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ" },
      { status: 500 }
    );
  }
}
```

---

## 🧪 أفضل الممارسات

### 1. معالجة الأخطاء

```typescript
// ✅ صحيح
try {
  await riskyOperation();
} catch (error) {
  console.error("Error:", error);
  toast({ title: "حدث خطأ", variant: "destructive" });
}

// ❌ خطأ
try {
  await riskyOperation();
} catch (error) {
  // تجاهل الخطأ
}
```

### 2. تحسين الأداء

```typescript
// ✅ صحيح - useCallback
const handleClick = useCallback((id: string) => {
  setSelected(id);
}, []);

// ✅ صحيح - useMemo
const filteredItems = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);

// ❌ خطأ - إعادة الحساب في كل render
const filteredItems = items.filter(item => item.active);
```

### 3. Accessibility

```typescript
// ✅ صحيح
<button
  onClick={handleClick}
  aria-label="إغلاق القائمة"
  aria-expanded={isOpen}
>
  <X className="w-6 h-6" />
</button>

// ❌ خطأ - لا يمكن الوصول إليه
<div onClick={handleClick}>
  <X className="w-6 h-6" />
</div>
```

---

## 📚 الموارد المفيدة

| المورد | الرابط |
|--------|--------|
| Next.js Docs | https://nextjs.org/docs |
| React Docs | https://react.dev |
| Tailwind CSS | https://tailwindcss.com/docs |
| shadcn/ui | https://ui.shadcn.com |
| Prisma | https://www.prisma.io/docs |
| Framer Motion | https://www.framer.com/motion |

---

## 📚 ملفات التوثيق المرتبطة

- [CODE_GUIDE.md](./CODE_GUIDE.md) - دليل الكود
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - دليل التثبيت
- [MODIFICATION_GUIDE.md](./MODIFICATION_GUIDE.md) - دليل التعديل
