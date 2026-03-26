import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almohasibalshamel.com"),
  title: {
    default: "برنامج المحاسب الشامل - حلول محاسبية متكاملة | فوترة إلكترونية معتمدة من ZATCA",
    template: "%s | المحاسب الشامل",
  },
  description: "برنامج المحاسب الشامل - أفضل برنامج محاسبة في السعودية والخليج. فوترة إلكترونية معتمدة من هيئة الزكاة والضريبة ZATCA ومرتبط مباشرة مع منصة فاتورة. إدارة المخزون، نقاط البيع، الموارد البشرية، تقارير مالية دقيقة. أكثر من 15 سنة خبرة و10,000 عميل راضٍ في 7 دول عربية. دعم فني 24/7. جرب مجاناً الآن!",
  keywords: [
    // كلمات مفتاحية أساسية
    "برنامج محاسبة",
    "برنامج محاسبي",
    "برامج محاسبة السعودية",
    "نظام محاسبي",
    "برنامج فوترة إلكترونية",
    "فوترة إلكترونية معتمدة",
    // ZATCA متعلقة
    "هيئة الزكاة والضريبة",
    "ZATCA",
    "فوترة ZATCA",
    "المرحلة الأولى ZATCA",
    "المرحلة الثانية ZATCA",
    "ربط فاتورة",
    "منصة فاتورة",
    // منتجات
    "المحاسب الشامل",
    "الشامل بلس",
    "الشامل ويب",
    "أولتكس",
    "تروست",
    "الشامل لايت",
    // موديولات
    "إدارة المخزون",
    "نقاط البيع",
    "الموارد البشرية",
    "تقارير مالية",
    "نظام الذهب",
    "برنامج المطاعم",
    "برنامج المستشفيات",
    "التخليص الجمركي",
    // جغرافية
    "برنامج محاسبة السعودية",
    "برنامج محاسبة الإمارات",
    "برنامج محاسبة قطر",
    "برنامج محاسبة مصر",
    "برنامج محاسبة عُمان",
    "برنامج محاسبة البحرين",
    // تقنية
    "ERP",
    "نظام سحابي",
    "برنامج محاسبة سحابي",
    "تطبيق محاسبة",
    // خدمات
    "دعم فني محاسبة",
    "استشارات محاسبية",
    "حلول محاسبية متكاملة",
  ],
  authors: [{ name: "المحاسب الشامل", url: "https://almohasibalshamel.com" }],
  creator: "المحاسب الشامل",
  publisher: "المحاسب الشامل",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://almohasibalshamel.com",
    siteName: "المحاسب الشامل",
    title: "برنامج المحاسب الشامل - أفضل برنامج محاسبة في السعودية | فوترة إلكترونية معتمدة",
    description: "برنامج محاسبي متكامل للشركات والمؤسسات. فوترة إلكترونية معتمدة من هيئة الزكاة والضريبة ZATCA. أكثر من 15 سنة خبرة و10,000 عميل راضٍ. جرب مجاناً!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "المحاسب الشامل - برنامج محاسبي متكامل معتمد من ZATCA",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@almohasib",
    creator: "@almohasib",
    title: "برنامج المحاسب الشامل - حلول محاسبية متكاملة",
    description: "برنامج محاسبي متكامل للشركات والمؤسسات. فوترة إلكترونية معتمدة من ZATCA.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://almohasibalshamel.com",
    languages: {
      "ar-SA": "https://almohasibalshamel.com",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Business Application",
  classification: "Accounting Software, ERP, E-Invoicing",
  other: {
    "geo.region": "SA-01",
    "geo.country": "Saudi Arabia",
    "geo.placename": "Riyadh",
    "language": "Arabic",
    "author": "المحاسب الشامل",
    "revisit-after": "1 days",
    "rating": "general",
    "distribution": "global",
    "doc-type": "Web Page",
    "robots": "index, follow, max-image-preview:large",
    "googlebot": "index, follow",
    "msnbot": "index, follow",
  },
};

// Enhanced JSON-LD Schema for SEO & GEO (Generative Engine Optimization)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization Schema
    {
      "@type": "Organization",
      "@id": "https://almohasibalshamel.com/#organization",
      name: "المحاسب الشامل",
      alternateName: ["Al Shamel Accounting", "Almohasib Alshamel", "الشامل المحاسبي"],
      url: "https://almohasibalshamel.com",
      logo: {
        "@type": "ImageObject",
        url: "https://almohasibalshamel.com/shamel-logo.png",
        width: 200,
        height: 200,
      },
      description: "برنامج محاسبي متكامل للشركات والمؤسسات في المنطقة العربية مع فوترة إلكترونية معتمدة من ZATCA",
      foundingDate: "2009",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
        maxValue: 200,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+966505166252",
          contactType: "customer service",
          areaServed: ["SA", "AE", "QA", "EG", "OM", "BH", "YE"],
          availableLanguage: ["Arabic", "English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+966505166252",
          contactType: "sales",
          areaServed: "SA",
          availableLanguage: "Arabic",
        },
        {
          "@type": "ContactPoint",
          telephone: "+966505166252",
          contactType: "technical support",
          areaServed: ["SA", "AE", "QA", "EG", "OM", "BH", "YE"],
          availableLanguage: ["Arabic", "English"],
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "الرياض",
          addressRegion: "الرياض",
          addressCountry: "SA",
        },
      ],
      sameAs: [
        "https://twitter.com/almohasib",
        "https://linkedin.com/company/almohasib",
        "https://facebook.com/almohasib",
        "https://instagram.com/almohasib",
      ],
      awards: [
        "معتمد من هيئة الزكاة والضريبة والجمارك ZATCA",
        "مزود حلول فوترة إلكترونية معتمد",
      ],
      knowsAbout: [
        "برامج المحاسبة",
        "الفوترة الإلكترونية",
        "إدارة المخزون",
        "نقاط البيع",
        "الموارد البشرية",
        "التقارير المالية",
        "ZATCA",
        "ERP",
      ],
    },
    // 2. Software Application Schema
    {
      "@type": "SoftwareApplication",
      "@id": "https://almohasibalshamel.com/#software",
      name: "المحاسب الشامل",
      description: "برنامج محاسبي متكامل للشركات والمؤسسات في المنطقة العربية مع فوترة إلكترونية معتمدة من ZATCA. يدعم أكثر من 20 موديول للحلول المتخصصة.",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Accounting Software",
      operatingSystem: ["Windows", "Web Browser", "iOS", "Android"],
      softwareVersion: "2024.1",
      releaseNotes: "دعم كامل للمرحلة الثانية من الفوترة الإلكترونية ZATCA",
      fileFormat: ["XML", "PDF", "Excel", "CSV"],
      memoryRequirements: "4GB RAM",
      storageRequirements: "500MB",
      processorRequirements: "Intel Core i3 or equivalent",
      offers: [
        {
          "@type": "Offer",
          name: "الشامل بلس",
          description: "للمنشآت الكبيرة - يدعم التسعيرة بحسب المخازن",
          price: "0",
          priceCurrency: "SAR",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://almohasibalshamel.com/#organization" },
        },
        {
          "@type": "Offer",
          name: "الشامل",
          description: "للمؤسسات المتوسطة والصغيرة - الأكثر انتشاراً",
          price: "0",
          priceCurrency: "SAR",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://almohasibalshamel.com/#organization" },
        },
        {
          "@type": "Offer",
          name: "أولتكس",
          description: "للمبتدئين - خيارك الذكي لبدء نشاطك",
          price: "0",
          priceCurrency: "SAR",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://almohasibalshamel.com/#organization" },
        },
        {
          "@type": "Offer",
          name: "الشامل ويب",
          description: "نظام سحابي - معك في كل مكان وزمان",
          price: "0",
          priceCurrency: "SAR",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://almohasibalshamel.com/#organization" },
        },
        {
          "@type": "Offer",
          name: "تروست",
          description: "نظام اشتراكات مرنة - ادفع حسب استخدامك",
          price: "0",
          priceCurrency: "SAR",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://almohasibalshamel.com/#organization" },
        },
        {
          "@type": "Offer",
          name: "الشامل لايت",
          description: "تطبيق جوال - iOS و Android",
          price: "0",
          priceCurrency: "SAR",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://almohasibalshamel.com/#organization" },
        },
      ],
      featureList: [
        "الحسابات المتكاملة",
        "إدارة المخزون",
        "نقاط البيع POS",
        "الموارد البشرية",
        "إدارة المستشفيات",
        "المختبرات الطبية",
        "إدارة المعدات",
        "المطاعم والمقاهي",
        "إدارة الشقق المفروشة",
        "نظام الذهب والمجوهرات",
        "نظام النقل والشحن",
        "إدارة العقود",
        "التخليص الجمركي",
        "ربط المتاجر الإلكترونية",
        "تكامل الواتساب",
        "رسائل SMS",
        "الفوترة الإلكترونية ZATCA",
        "التقارير المالية المتقدمة",
        "النسخ الاحتياطي التلقائي",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "10000",
        bestRating: "5",
        worstRating: "1",
        itemReviewed: { "@id": "https://almohasibalshamel.com/#software" },
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "أحمد محمد",
          },
          reviewBody: "أفضل برنامج محاسبة استخدمته. سهل الاستخدام ودعم فني ممتاز.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "سارة عبدالله",
          },
          reviewBody: "نظام متكامل ومرن. التوافق مع ZATCA ممتاز.",
        },
      ],
      provider: { "@id": "https://almohasibalshamel.com/#organization" },
      author: { "@id": "https://almohasibalshamel.com/#organization" },
      publisher: { "@id": "https://almohasibalshamel.com/#organization" },
    },
    // 3. WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://almohasibalshamel.com/#website",
      url: "https://almohasibalshamel.com",
      name: "المحاسب الشامل",
      description: "برنامج محاسبي متكامل للشركات والمؤسسات - فوترة إلكترونية معتمدة من ZATCA",
      publisher: { "@id": "https://almohasibalshamel.com/#organization" },
      inLanguage: "ar-SA",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://almohasibalshamel.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // 4. WebApplication Schema
    {
      "@type": "WebApplication",
      name: "المحاسب الشامل - نسخة الويب",
      url: "https://almohasibalshamel.com",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      softwareVersion: "2024.1",
      operatingSystem: "Any",
      applicationCategory: "BusinessApplication",
    },
    // 5. FAQPage Schema (مهم جداً للظهور في نتائج البحث)
    {
      "@type": "FAQPage",
      name: "الأسئلة الشائعة - المحاسب الشامل",
      description: "إجابات على الأسئلة الشائعة حول برنامج المحاسب الشامل والفوترة الإلكترونية",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هو برنامج المحاسب الشامل؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "المحاسب الشامل هو برنامج محاسبي متكامل يخدم الشركات والمؤسسات في المنطقة العربية. يوفر أكثر من 20 موديول تشمل الحسابات، إدارة المخزون، نقاط البيع، الموارد البشرية، وغيرها. البرنامج معتمد من هيئة الزكاة والضريبة ZATCA ومرتبط مباشرة مع منصة فاتورة.",
          },
        },
        {
          "@type": "Question",
          name: "ما هو الفرق بين الفاتورة الضريبية والفاتورة المبسطة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "الفاتورة الضريبية تستخدم في التعاملات بين الشركات (B2B) وتتضمن جميع بيانات الطرفين بالتفصيل، بينما الفاتورة المبسطة تستخدم في التعاملات مع المستهلكين (B2C) وتكفي بيانات البائع فقط. كلا النوعين مدعوم في نظام المحاسب الشامل.",
          },
        },
        {
          "@type": "Question",
          name: "هل النظام متوافق مع متطلبات هيئة الزكاة والضريبة ZATCA؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، نظام المحاسب الشامل متوافق 100% مع متطلبات هيئة الزكاة والضريبة والجمارك في المرحلتين الأولى والثانية. البرنامج مسجل كمزود حلول معتمد ومرتبط مباشرة مع منصة فاتورة، مع دعم كامل للQR Code والتوقيع الإلكتروني.",
          },
        },
        {
          "@type": "Question",
          name: "ما هي المنتجات المتاحة وكيف أختار المناسب؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نوفر 6 منتجات متنوعة: الشامل بلس للمنشآت الكبيرة، الشامل للمتوسطة، أولتكس للمبتدئين، الشامل ويب السحابي، تروست بالاشتراكات، والشامل لايت للجوال. يمكنك التواصل معنا لاختيار الأنسب لنشاطك التجاري.",
          },
        },
        {
          "@type": "Question",
          name: "هل يمكنني تجربة النظام قبل الشراء؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، نقدم نسخة تجريبية مجانية لجميع منتجاتنا. يمكنك طلب النسخة التجريبية من خلال نموذج التواصل في الموقع أو عبر الواتساب على الرقم +966505166252.",
          },
        },
        {
          "@type": "Question",
          name: "ما هي الموديولات المتاحة في النظام؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نوفر أكثر من 20 موديول تشمل: الحسابات، المخزون، نقاط البيع، الموارد البشرية، المستشفيات، المختبرات، المطاعم، الذهب، النقل، العقود، التخليص الجمركي، ربط المتاجر الإلكترونية، الواتساب، SMS، وغيرها الكثير.",
          },
        },
        {
          "@type": "Question",
          name: "هل يوجد دعم فني بعد الشراء؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، نوفر دعم فني متاح 24/7 عبر الهاتف والواتساب والبريد الإلكتروني، مع تدريب مجاني على استخدام النظام. فريقنا متخصص وجاهز لمساعدتك في أي وقت.",
          },
        },
        {
          "@type": "Question",
          name: "ما هي الدول التي تغطونها؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نغطي المملكة العربية السعودية، الإمارات، قطر، مصر، عُمان، البحرين، واليمن مع مكاتب محلية وفريق دعم متخصص في كل دولة.",
          },
        },
        {
          "@type": "Question",
          name: "هل يمكن ربط المتجر الإلكتروني مع النظام؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، نوفر موديول خاص لربط المتاجر الإلكترونية مع النظام لتزامن الفواتير والطلبات والمخزون بشكل تلقائي. يدعم الربط مع منصات متعددة مثل Salla و Zid و غيرها.",
          },
        },
      ],
    },
    // 6. LocalBusiness Schema (مهم للبحث المحلي)
    {
      "@type": "LocalBusiness",
      "@id": "https://almohasibalshamel.com/#localbusiness",
      name: "المحاسب الشامل",
      alternateName: "Al Shamel Accounting",
      image: "https://almohasibalshamel.com/shamel-logo.png",
      telephone: "+966505166252",
      email: "info@alshamel.com",
      url: "https://almohasibalshamel.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "الرياض",
        addressLocality: "الرياض",
        addressRegion: "الرياض",
        postalCode: "12345",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "24.7136",
        longitude: "46.6753",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: [
        { "@type": "Country", name: "السعودية" },
        { "@type": "Country", name: "الإمارات" },
        { "@type": "Country", name: "قطر" },
        { "@type": "Country", name: "مصر" },
        { "@type": "Country", name: "عُمان" },
        { "@type": "Country", name: "البحرين" },
        { "@type": "Country", name: "اليمن" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "10000",
        bestRating: "5",
      },
    },
    // 7. BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      name: "مسار التنقل",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://almohasibalshamel.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "من نحن",
          item: "https://almohasibalshamel.com/#about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "المميزات",
          item: "https://almohasibalshamel.com/#features",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "الموديولات",
          item: "https://almohasibalshamel.com/#modules",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "المنتجات",
          item: "https://almohasibalshamel.com/#products",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "الفوترة الإلكترونية",
          item: "https://almohasibalshamel.com/#invoicing",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "الأسئلة الشائعة",
          item: "https://almohasibalshamel.com/#faq",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "تواصل معنا",
          item: "https://almohasibalshamel.com/#contact",
        },
      ],
    },
    // 8. Service Schema
    {
      "@type": "Service",
      name: "برنامج محاسبة متكامل",
      description: "خدمة برامج محاسبية متكاملة للشركات والمؤسسات",
      provider: { "@id": "https://almohasibalshamel.com/#organization" },
      serviceType: "Accounting Software",
      areaServed: [
        { "@type": "Country", name: "السعودية" },
        { "@type": "Country", name: "الإمارات" },
        { "@type": "Country", name: "قطر" },
        { "@type": "Country", name: "مصر" },
        { "@type": "Country", name: "عُمان" },
        { "@type": "Country", name: "البحرين" },
        { "@type": "Country", name: "اليمن" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "منتجات المحاسب الشامل",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "الشامل بلس",
              description: "برنامج قوي يخدم المنشآت الكبيرة",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "الشامل",
              description: "الأكثر انتشاراً للمؤسسات المتوسطة",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "أولتكس",
              description: "للمبتدئين",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "الشامل ويب",
              description: "نظام سحابي",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "تروست",
              description: "نظام اشتراكات مرنة",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "الشامل لايت",
              description: "تطبيق جوال",
            },
          },
        ],
      },
    },
    // 9. HowTo Schema (للظهور في النتائج الإرشادية)
    {
      "@type": "HowTo",
      name: "كيفية بدء استخدام برنامج المحاسب الشامل",
      description: "دليل خطوة بخطوة للبدء في استخدام برنامج المحاسب الشامل لإدارة أعمالك",
      totalTime: "P1D",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "SAR",
        value: "0",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "التواصل معنا",
          text: "تواصل معنا عبر الواتساب أو نموذج التواصل لطلب نسخة تجريبية مجانية",
          item: "https://almohasibalshamel.com/#contact",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "اختيار المنتج المناسب",
          text: "اختر المنتج المناسب لنشاطك التجاري من بين 6 منتجات متاحة",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "التدريب",
          text: "احصل على تدريب مجاني على استخدام النظام من فريقنا المتخصص",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "البدء بالاستخدام",
          text: "ابدأ بإدارة أعمالك باستخدام البرنامج مع دعم فني 24/7",
        },
      ],
    },
    // 10. SpeakableSpecification (للمساعدات الصوتية)
    {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-navbutton-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1e40af" />
        
        {/* Additional SEO meta tags */}
        <link rel="author" href="https://almohasibalshamel.com" />
        <link rel="canonical" href="https://almohasibalshamel.com" />
        
        {/* GEO Tags for local SEO */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="المحاسب الشامل" />
        
        {/* Cache control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      </head>
      <body
        className={`${ibmPlexArabic.variable} font-sans antialiased bg-background text-foreground`}
        style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
