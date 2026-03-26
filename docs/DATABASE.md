# 🗄️ توثيق قاعدة البيانات

## 📊 نظرة عامة

| البند | القيمة |
|-------|--------|
| **نوع قاعدة البيانات** | SQLite |
| **ORM** | Prisma |
| **موقع الملف** | `/db/custom.db` |
| **موقع المخطط** | `/prisma/schema.prisma` |

---

## 📋 مخطط قاعدة البيانات (ER Diagram)

```
┌─────────────────┐       ┌─────────────────┐
│    Contact      │       │  DemoRequest    │
├─────────────────┤       ├─────────────────┤
│ id (PK)         │       │ id (PK)         │
│ name            │       │ name            │
│ email           │       │ email           │
│ phone           │       │ phone           │
│ company         │       │ company         │
│ product         │       │ employees       │
│ message         │       │ businessType    │
│ source          │       │ notes           │
│ status          │       │ status          │
│ createdAt       │       │ createdAt       │
│ updatedAt       │       │ updatedAt       │
└─────────────────┘       └─────────────────┘

┌─────────────────┐       ┌─────────────────┐
│    Article      │       │      FAQ        │
├─────────────────┤       ├─────────────────┤
│ id (PK)         │       │ id (PK)         │
│ title           │       │ question        │
│ slug (Unique)   │       │ answer          │
│ content         │       │ category        │
│ excerpt         │       │ order           │
│ category        │       │ published       │
│ tags (JSON)     │       │ createdAt       │
│ image           │       │ updatedAt       │
│ author          │       └─────────────────┘
│ featured        │
│ published       │       ┌─────────────────┐
│ views           │       │  PricingPlan    │
│ metaTitle       │       ├─────────────────┤
│ metaDescription │       │ id (PK)         │
│ createdAt       │       │ name            │
│ updatedAt       │       │ nameEn          │
└─────────────────┘       │ price           │
                          │ priceYearly     │
┌─────────────────┐       │ currency        │
│ Testimonial     │       │ description     │
├─────────────────┤       │ features (JSON) │
│ id (PK)         │       │ recommended     │
│ name            │       │ order           │
│ company         │       │ active          │
│ position        │       │ createdAt       │
│ content         │       │ updatedAt       │
│ rating          │       └─────────────────┘
│ image           │
│ approved        │       ┌─────────────────┐
│ order           │       │    Setting      │
│ createdAt       │       ├─────────────────┤
│ updatedAt       │       │ id (PK)         │
└─────────────────┘       │ key (Unique)    │
                          │ value           │
┌─────────────────┐       │ type            │
│NewsletterSub    │       │ createdAt       │
├─────────────────┤       │ updatedAt       │
│ id (PK)         │       └─────────────────┘
│ email (Unique)  │
│ active          │
│ createdAt       │
│ updatedAt       │
└─────────────────┘
```

---

## 📝 تفاصيل الجداول

### 1. جدول Contact (جهات الاتصال)

يخزن طلبات التواصل من الموقع.

| الحقل | النوع | الوصف | القيم الممكنة |
|-------|------|-------|--------------|
| `id` | String | المعرف الفريد | UUID |
| `name` | String | اسم المرسل | - |
| `email` | String | البريد الإلكتروني | - |
| `phone` | String | رقم الهاتف | - |
| `company` | String? | اسم الشركة | اختياري |
| `product` | String? | المنتج المطلوب | اختياري |
| `message` | String? | الرسالة | اختياري |
| `source` | String? | مصدر التواصل | website, whatsapp, phone |
| `status` | String | حالة الطلب | new, contacted, converted |
| `createdAt` | DateTime | تاريخ الإنشاء | - |
| `updatedAt` | DateTime | تاريخ التحديث | - |

**استخدامات الجدول:**
- تخزين طلبات التواصل من نموذج "تواصل معنا"
- متابعة حالة كل طلب
- إحصائيات التواصل

---

### 2. جدول DemoRequest (طلبات العرض التجريبي)

يخزن طلبات الحصول على عرض تجريبي للبرنامج.

| الحقل | النوع | الوصف | القيم الممكنة |
|-------|------|-------|--------------|
| `id` | String | المعرف الفريد | UUID |
| `name` | String | اسم الطالب | - |
| `email` | String | البريد الإلكتروني | - |
| `phone` | String | رقم الهاتف | - |
| `company` | String? | اسم الشركة | اختياري |
| `employees` | String? | عدد الموظفين | 1-10, 11-50, 51-200, 200+ |
| `businessType` | String? | نوع النشاط | - |
| `notes` | String? | ملاحظات إضافية | اختياري |
| `status` | String | حالة الطلب | pending, contacted, scheduled, completed |
| `createdAt` | DateTime | تاريخ الإنشاء | - |
| `updatedAt` | DateTime | تاريخ التحديث | - |

---

### 3. جدول Article (المقالات)

يخزن مقالات المدونة.

| الحقل | النوع | الوصف |
|-------|------|-------|
| `id` | String | المعرف الفريد |
| `title` | String | عنوان المقال |
| `slug` | String | الرابط المختصر (فريد) |
| `content` | String | محتوى المقال |
| `excerpt` | String | ملخص المقال |
| `category` | String | التصنيف |
| `tags` | Json | الوسوم |
| `image` | String? | صورة المقال |
| `author` | String? | الكاتب |
| `featured` | Boolean | مقال مميز |
| `published` | Boolean | منشور |
| `views` | Int | عدد المشاهدات |
| `metaTitle` | String? | عنوان SEO |
| `metaDescription` | String? | وصف SEO |
| `createdAt` | DateTime | تاريخ الإنشاء |
| `updatedAt` | DateTime | تاريخ التحديث |

---

### 4. جدول FAQ (الأسئلة الشائعة)

| الحقل | النوع | الوصف |
|-------|------|-------|
| `id` | String | المعرف الفريد |
| `question` | String | السؤال |
| `answer` | String | الجواب |
| `category` | String | التصنيف |
| `order` | Int | الترتيب |
| `published` | Boolean | منشور |
| `createdAt` | DateTime | تاريخ الإنشاء |
| `updatedAt` | DateTime | تاريخ التحديث |

---

### 5. جدول PricingPlan (باقات الأسعار)

| الحقل | النوع | الوصف |
|-------|------|-------|
| `id` | String | المعرف الفريد |
| `name` | String | اسم الباقة (عربي) |
| `nameEn` | String? | اسم الباقة (إنجليزي) |
| `price` | Float | السعر الشهري |
| `priceYearly` | Float? | السعر السنوي |
| `currency` | String | العملة (SAR) |
| `description` | String? | الوصف |
| `features` | Json | الميزات |
| `recommended` | Boolean | موصى بها |
| `order` | Int | الترتيب |
| `active` | Boolean | نشط |
| `createdAt` | DateTime | تاريخ الإنشاء |
| `updatedAt` | DateTime | تاريخ التحديث |

---

### 6. جدول Testimonial (الشهادات)

| الحقل | النوع | الوصف |
|-------|------|-------|
| `id` | String | المعرف الفريد |
| `name` | String | اسم العميل |
| `company` | String? | الشركة |
| `position` | String? | المنصب |
| `content` | String | محتوى الشهادة |
| `rating` | Int | التقييم (1-5) |
| `image` | String? | صورة العميل |
| `approved` | Boolean | معتمد |
| `order` | Int | الترتيب |
| `createdAt` | DateTime | تاريخ الإنشاء |
| `updatedAt` | DateTime | تاريخ التحديث |

---

### 7. جدول Setting (الإعدادات)

| الحقل | النوع | الوصف |
|-------|------|-------|
| `id` | String | المعرف الفريد |
| `key` | String | المفتاح (فريد) |
| `value` | String | القيمة |
| `type` | String | النوع (text, json, boolean) |
| `createdAt` | DateTime | تاريخ الإنشاء |
| `updatedAt` | DateTime | تاريخ التحديث |

---

### 8. جدول NewsletterSubscriber (المشتركون في النشرة)

| الحقل | النوع | الوصف |
|-------|------|-------|
| `id` | String | المعرف الفريد |
| `email` | String | البريد الإلكتروني (فريد) |
| `active` | Boolean | نشط |
| `createdAt` | DateTime | تاريخ الإنشاء |
| `updatedAt` | DateTime | تاريخ التحديث |

---

## 🔧 أوامر Prisma

### تشغيل الترحيلات

```bash
# إنشاء قاعدة البيانات
bun run db:push

# إنشاء ترحيل جديد
bunx prisma migrate dev --name init

# تطبيق الترحيلات
bunx prisma migrate deploy

# إعادة تعيين قاعدة البيانات
bunx prisma migrate reset
```

### Prisma Studio

```bash
# فتح واجهة إدارة قاعدة البيانات
bunx prisma studio
```

### إنشاء العميل

```bash
# إنشاء Prisma Client
bunx prisma generate
```

---

## 📝 كيفية إضافة جدول جديد

### 1. تعديل المخطط

```prisma
// prisma/schema.prisma

model NewTable {
  id        String   @id @default(uuid())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 2. تطبيق التغييرات

```bash
bun run db:push
```

### 3. إنشاء Prisma Client

```bash
bunx prisma generate
```

### 4. استخدام الجدول في الكود

```typescript
import { db } from '@/lib/db';

// إنشاء سجل جديد
const newRecord = await db.newTable.create({
  data: {
    name: 'Example'
  }
});

// جلب السجلات
const records = await db.newTable.findMany();
```

---

## 🔒 الفهارس (Indexes)

```prisma
model Article {
  slug String @unique // فهرس فريد
  
  @@index([category]) // فهرس عادي
  @@index([published, createdAt])
}
```

---

## 📊 العلاقات

### علاقة One-to-Many

```prisma
model User {
  id      String    @id @default(uuid())
  posts   Post[]
}

model Post {
  id       String @id @default(uuid())
  authorId String
  author   User   @relation(fields: [authorId], references: [id])
}
```

---

## 📚 ملفات التوثيق المرتبطة

- [ARCHITECTURE.md](./ARCHITECTURE.md) - بنية النظام
- [CODE_GUIDE.md](./CODE_GUIDE.md) - دليل الكود
- [MODIFICATION_GUIDE.md](./MODIFICATION_GUIDE.md) - دليل التعديل
