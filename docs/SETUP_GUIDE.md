# 🚀 دليل التثبيت والتشغيل (Setup Guide)

## 📋 المتطلبات الأساسية

### البرامج المطلوبة

| البرنامج | الإصدار المطلوب | طريقة التثبيت |
|----------|----------------|----------------|
| **Node.js** | 18.x أو أحدث | https://nodejs.org |
| **Bun** | أحدث إصدار | https://bun.sh |
| **Git** | أحدث إصدار | https://git-scm.com |

### التحقق من التثبيت

```bash
# التحقق من Node.js
node --version
# الناتج: v18.x.x أو أحدث

# التحقق من Bun
bun --version
# الناتج: 1.x.x

# التحقق من Git
git --version
# الناتج: git version 2.x.x
```

---

## 📥 استنساخ المشروع

### الطريقة الأولى: HTTPS

```bash
git clone https://github.com/username/alshamel.git
cd alshamel
```

### الطريقة الثانية: SSH

```bash
git clone git@github.com:username/alshamel.git
cd alshamel
```

---

## 📦 تثبيت التبعيات

### باستخدام Bun (موصى به)

```bash
bun install
```

### باستخدام npm

```bash
npm install
```

---

## ⚙️ إعداد البيئة

### 1. إنشاء ملف `.env`

```bash
# نسخ ملف المثال
cp .env.example .env
```

### 2. متغيرات البيئة المطلوبة

```env
# قاعدة البيانات
DATABASE_URL="file:./db/custom.db"

# التطبيق
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# البريد الإلكتروني (اختياري)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# الإشعارات (اختياري)
NOTIFICATION_EMAIL="admin@example.com"
```

---

## 🗄️ إعداد قاعدة البيانات

### 1. إنشاء قاعدة البيانات

```bash
# تطبيق المخطط
bun run db:push
```

### 2. (اختياري) ملء البيانات الأولية

```bash
# تشغيل سكربت البذور
bun run db:seed
```

---

## 🏃 تشغيل المشروع

### وضع التطوير

```bash
bun run dev
```

الموقع سيكون متاحاً على: `http://localhost:3000`

### وضع الإنتاج

```bash
# بناء المشروع
bun run build

# تشغيل الإنتاج
bun run start
```

---

## 📜 أوامر متاحة

| الأمر | الوصف |
|-------|-------|
| `bun run dev` | تشغيل خادم التطوير |
| `bun run build` | بناء المشروع للإنتاج |
| `bun run start` | تشغيل الإنتاج |
| `bun run lint` | فحص جودة الكود |
| `bun run db:push` | تطبيق مخطط قاعدة البيانات |
| `bun run db:seed` | ملء البيانات الأولية |
| `bun run db:studio` | فتح Prisma Studio |

---

## 🔧 استكشاف الأخطاء

### المشكلة: المنفذ 3000 مستخدم

```bash
# استخدام منفذ آخر
PORT=3001 bun run dev
```

### المشكلة: خطأ في قاعدة البيانات

```bash
# إعادة تعيين قاعدة البيانات
rm db/custom.db
bun run db:push
```

### المشكلة: خطأ في التبعيات

```bash
# حذف node_modules وإعادة التثبيت
rm -rf node_modules
rm bun.lockb
bun install
```

### المشكلة: خطأ في TypeScript

```bash
# التحقق من الأخطاء
bunx tsc --noEmit
```

---

## 🌐 الوصول للمشروع

### في بيئة التطوير المحلية

```
http://localhost:3000
```

### في بيئة Sandbox

استخدم **لوحة المعاينة** على الجانب الأيمن من الواجهة، أو انقر على **"Open in New Tab"** لفتح الموقع في تبويب جديد.

---

## 📁 هيكل المشروع بعد التثبيت

```
alshamel/
├── node_modules/         # التبعيات (محلياً فقط)
├── db/
│   └── custom.db         # قاعدة البيانات
├── public/               # الملفات العامة
├── src/                  # الكود المصدري
├── .env                  # متغيرات البيئة
├── package.json          # معلومات المشروع
└── ...                   # ملفات أخرى
```

---

## ✅ التحقق من التثبيت

### 1. تشغيل الخادم

```bash
bun run dev
```

### 2. فتح المتصفح

انتقل إلى `http://localhost:3000`

### 3. التحقق من:

- [ ] الصفحة الرئيسية تظهر بشكل صحيح
- [ ] الوضع الداكن يعمل
- [ ] التنقل بين الأقسام يعمل
- [ ] نموذج التواصل يعمل
- [ ] لا توجد أخطاء في Console

---

## 🔒 الأمان في الإنتاج

### 1. متغيرات البيئة

```env
# استخدم قيم آمنة في الإنتاج
DATABASE_URL="your-production-database-url"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

### 2. إعدادات Next.js

```typescript
// next.config.ts
const config = {
  // تعطيل x-powered-by header
  poweredByHeader: false,
  // إعدادات الأمان
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
      ],
    },
  ],
};
```

---

## 📚 ملفات التوثيق المرتبطة

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - نظرة عامة
- [ARCHITECTURE.md](./ARCHITECTURE.md) - بنية النظام
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - دليل المطورين
