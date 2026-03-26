"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Check,
  Star,
  ArrowLeft,
  Zap,
  BarChart3,
  Users,
  FileText,
  Calculator,
  Package,
  CreditCard,
  Globe,
  Clock,
  Award,
  HeadphonesIcon,
  ChevronUp,
  MessageCircle,
  Building2,
  TrendingUp,
  Receipt,
  Database,
  Lock,
  QrCode,
  Send,
  Hospital,
  FlaskConical,
  Wrench,
  UtensilsCrossed,
  Building,
  Gem,
  Truck,
  Ship,
  ShoppingCart,
  Smartphone,
  MessageSquare,
  Cloud,
  Puzzle,
  Settings,
  Archive,
  Shield,
  Languages,
  Download,
  ExternalLink,
  Info,
  CloudUpload,
  CheckCircle,
  University,
  RefreshCw,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Constants
const WHATSAPP_NUMBER = "966505166252";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "+966505166252";
const EMAIL = "info@alshamel.com";

// Navigation Items
const navItems = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "المميزات", href: "#features" },
  { label: "الموديولات", href: "#modules" },
  { label: "الأنشطة التجارية", href: "#business-activities" },
  { label: "المنتجات", href: "#products" },
  { label: "الفوترة الإلكترونية", href: "#invoicing" },
  { label: "المدونة", href: "#blog" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" },
];

// Products Data
const products = [
  {
    name: "الشامل بلس",
    description: "برنامج قوي يخدم المنشآت الكبيرة ويدعم التسعيرة بحسب المخازن",
    icon: <Building2 className="w-10 h-10" />,
    features: ["منشآت كبيرة", "تسعيرة متعددة", "إدارة مخازن", "تقارير متقدمة"],
    color: "from-blue-600 to-blue-800",
    popular: true,
  },
  {
    name: "الشامل",
    description: "الأكثر انتشارًا ومرونة يخدم المؤسسات المتوسطة والصغيرة",
    icon: <Calculator className="w-10 h-10" />,
    features: ["مؤسسات متوسطة", "سهل الاستخدام", "تقارير شاملة", "دعم فني"],
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "أولتكس",
    description: "خيارك الذكي لبدء نشاطك التجاري بسهولة وفعالية",
    icon: <Zap className="w-10 h-10" />,
    features: ["للمبتدئين", "واجهة بسيطة", "بدء سريع", "تكلفة منخفضة"],
    color: "from-green-500 to-green-700",
  },
  {
    name: "الشامل ويب",
    description: "نظام سحابي قوي ومرن معك في كل مكان وزمان",
    icon: <Cloud className="w-10 h-10" />,
    features: ["سحابي", "وصول من أي مكان", "تحديثات تلقائية", "حماية متقدمة"],
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "تروست",
    description: "نظام محاسبي متكامل بنظام الاشتراكات المرنة",
    icon: <Shield className="w-10 h-10" />,
    features: ["اشتراكات مرنة", "دفع شهري", "مميزات كاملة", "ترقية سهلة"],
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "الشامل لايت",
    description: "يدعم أجهزة الجوال بمختلف أنواعها وأنظمتها",
    icon: <Smartphone className="w-10 h-10" />,
    features: ["تطبيق جوال", "iOS و Android", "مزامنة فورية", "سهل الاستخدام"],
    color: "from-pink-500 to-pink-700",
  },
];

// Module type definition
type ModuleItem = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  features?: string[];
  benefits?: string[];
};

// Business Activity type definition
type BusinessActivity = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  pdfUrl?: string;
  features?: string[];
  solutions?: string[];
  stats?: { value: string; label: string };
};

// Modules Data
const modulesCategories = [
  {
    title: "الموديولات الأساسية",
    icon: <Calculator className="w-6 h-6" />,
    description: "الحلول المحاسبية الأساسية لإدارة أعمالك",
    modules: [
      { 
        name: "الحسابات", 
        desc: "نظام محاسبي متكامل لإدارة جميع العمليات المالية", 
        icon: <FileText className="w-6 h-6" />,
        features: ["قيود يومية", "دفتر الأستاذ", "ميزان المراجعة", "القوائم المالية"],
        benefits: ["أتمتة العمليات المحاسبية", "تقارير مالية دقيقة", "توفير الوقت والجهد"]
      },
      { 
        name: "إدارة المخزون", 
        desc: "تتبع وإدارة المخزون بدقة مع تقارير تفصيلية", 
        icon: <Package className="w-6 h-6" />,
        features: ["إدارة الأصناف", "حركات المخزون", "الجرد", "تقارير المخزون"],
        benefits: ["منع نفاد المخزون", "تقليل الهدر", "تحسين التدفق النقدي"]
      },
      { 
        name: "نقاط البيع", 
        desc: "نظام متطور لإدارة المبيعات والعمليات اليومية", 
        icon: <CreditCard className="w-6 h-6" />,
        features: ["شاشة بيع سريعة", "إدارة الكاشير", "الخصومات", "الفواتير الإلكترونية"],
        benefits: ["سرعة في الإنجاز", "تكامل مع ZATCA", "متابعة المبيعات"]
      },
    ],
  },
  {
    title: "القطاعات المتخصصة",
    icon: <Building2 className="w-6 h-6" />,
    description: "حلول مخصصة للقطاعات والأنشطة المختلفة",
    modules: [
      { 
        name: "إدارة المستشفيات", 
        desc: "نظام شامل لإدارة المستشفيات والمراكز الطبية", 
        icon: <Hospital className="w-6 h-6" />,
        features: ["إدارة المرضى", "حجوزات العيادات", "السجلات الطبية", "الفواتير الطبية"],
        benefits: ["تكامل العمليات الطبية", "تحسين خدمة المرضى", "دقة في الفوترة"]
      },
      { 
        name: "المختبرات", 
        desc: "إدارة العينات والفحوصات والتقارير المخبرية", 
        icon: <FlaskConical className="w-6 h-6" />,
        features: ["إدارة العينات", "نتائج الفحوصات", "التقارير المخبرية", "إدارة الأجهزة"],
        benefits: ["دقة في النتائج", "سرعة الإنجاز", "تتبع العينات"]
      },
      { 
        name: "إدارة المعدات", 
        desc: "متابعة وصيانة المعدات والآلات", 
        icon: <Wrench className="w-6 h-6" />,
        features: ["سجل المعدات", "جدول الصيانة", "طلبات الصيانة", "تكاليف الصيانة"],
        benefits: ["إطالة عمر المعدات", "منع الأعطال", "توفير التكاليف"]
      },
      { 
        name: "المطاعم", 
        desc: "نظام متكامل لإدارة المطاعم والمقاهي", 
        icon: <UtensilsCrossed className="w-6 h-6" />,
        features: ["قائمة الطعام", "الطلبات", "المطبخ", "التوصيل"],
        benefits: ["سرعة الخدمة", "إدارة المخزون", "تكامل مع ZATCA"]
      },
      { 
        name: "إدارة الشقق", 
        desc: "إدارة العقارات والشقق المفروشة", 
        icon: <Building className="w-6 h-6" />,
        features: ["الحجوزات", "إدارة الوحدات", "الفواتير", "الصيانة"],
        benefits: ["زيادة الإشغال", "إدارة سلسة", "متابعة الإيرادات"]
      },
      { 
        name: "نظام الذهب", 
        desc: "حلول متخصصة لتجارة الذهب والمجوهرات", 
        icon: <Gem className="w-6 h-6" />,
        features: ["إدارة الأصناف الذهبية", "معايرات الذهب", "حساب الأجرة", "التقارير"],
        benefits: ["دقة في الحسابات", "متابعة المعايرات", "إدارة المخزون"]
      },
    ],
  },
  {
    title: "الخدمات الإدارية",
    icon: <Users className="w-6 h-6" />,
    description: "أدوات لإدارة الموارد البشرية والعمليات الإدارية",
    modules: [
      { 
        name: "الموارد البشرية", 
        desc: "إدارة شاملة للموظفين والرواتب والحضور", 
        icon: <Users className="w-6 h-6" />,
        features: ["سجل الموظفين", "الرواتب", "الحضور والانصراف", "الإجازات"],
        benefits: ["أتمتة الرواتب", "متابعة الأداء", "الامتثال للقوانين"]
      },
      { 
        name: "نظام النقل", 
        desc: "إدارة أسطول النقل والشحنات والتوصيل", 
        icon: <Truck className="w-6 h-6" />,
        features: ["إدارة المركبات", "الرحلات", "الشحنات", "تكاليف التشغيل"],
        benefits: ["تحسين المسارات", "تقليل التكاليف", "متابعة الأسطول"]
      },
      { 
        name: "إدارة العقود", 
        desc: "متابعة وإدارة العقود والاتفاقيات", 
        icon: <FileText className="w-6 h-6" />,
        features: ["سجل العقود", "التنبيهات", "التجديدات", "التقارير"],
        benefits: ["منع فوات التجديد", "متابعة الالتزامات", "تنظيم العلاقات"]
      },
      { 
        name: "التخليص الجمركي", 
        desc: "إدارة عمليات الاستيراد والتخليص الجمركي", 
        icon: <Ship className="w-6 h-6" />,
        features: ["البيانات الجمركية", "حساب الرسوم", "الشهادات", "التقارير"],
        benefits: ["سرعة الإجراءات", "دقة الحسابات", "الامتثال الجمركي"]
      },
    ],
  },
  {
    title: "التقنيات الرقمية",
    icon: <Globe className="w-6 h-6" />,
    description: "حلول تقنية متطورة للتواصل والتجارة الإلكترونية",
    modules: [
      { 
        name: "نقاط البيع المحلية", 
        desc: "نظام محلي متطور لنقاط البيع", 
        icon: <CreditCard className="w-6 h-6" />,
        features: ["يعمل بدون انترنت", "سريع", "متكامل", "سهل الاستخدام"],
        benefits: ["استمرارية العمل", "سرعة الإنجاز", "تكامل كامل"]
      },
      { 
        name: "ربط المتاجر الإلكترونية", 
        desc: "ربط متجرك الإلكتروني مع النظام", 
        icon: <ShoppingCart className="w-6 h-6" />,
        features: ["مزامنة المنتجات", "استيراد الطلبات", "تحديث المخزون", "الفواتير"],
        benefits: ["أتمتة الطلبات", "دقة المخزون", "توفير الوقت"]
      },
      { 
        name: "الواتساب", 
        desc: "تكامل مع واتساب للتواصل المباشر", 
        icon: <MessageCircle className="w-6 h-6" />,
        features: ["إرسال تلقائي", "قوالب الرسائل", "متابعة العملاء", "التقارير"],
        benefits: ["تواصل فعال", "زيادة المبيعات", "رضا العملاء"]
      },
      { 
        name: "رسائل SMS", 
        desc: "إرسال الرسائل النصية للعملاء", 
        icon: <MessageSquare className="w-6 h-6" />,
        features: ["إرسال جماعي", "قوالب الرسائل", "جدولة الإرسال", "التقارير"],
        benefits: ["وصول سريع", "تكلفة منخفضة", "فعالية عالية"]
      },
    ],
  },
];

// Features Data
const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "سهولة وسرعة",
    description: "واجهة بسيطة وسريعة الاستجابة تناسب الجميع مع تصميم عصري وسهل الاستخدام",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "تقارير دقيقة",
    description: "احصل على تقارير مالية متقدمة ومفصلة في لحظات مع إمكانية التصدير بصيغ متعددة",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "دعم فني 24/7",
    description: "فريق دعم جاهز للإجابة على أسئلتك دائمًا مع خدمة عملاء متميزة ومتاحة على مدار الساعة",
  },
  {
    icon: <Languages className="w-8 h-8" />,
    title: "متعدد اللغات",
    description: "يدعم البرنامج لغات متعددة لسهولة الاستخدام عالمياً مع إمكانية التبديل السريع بين اللغات",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "واجهات موحدة",
    description: "سهولة التنقل بفضل التصميم الموحد لجميع النوافذ مع تجربة مستخدم متسقة",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "إدارة صلاحيات المستخدمين",
    description: "تحكم كامل في صلاحيات المستخدمين لضمان الأمان مع نظام متقدم لإدارة الأذونات",
  },
  {
    icon: <Archive className="w-8 h-8" />,
    title: "أرشيف مدمج",
    description: "أرشيف متكامل في كل النوافذ لتسهيل الوصول للبيانات مع إمكانية البحث المتقدم",
  },
  {
    icon: <CloudUpload className="w-8 h-8" />,
    title: "النسخ الاحتياطية",
    description: "حماية بياناتك مع نظام نسخ احتياطية تلقائية وآمنة لضمان عدم فقدان المعلومات",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "متوافق مع الجوال",
    description: "يعمل على جميع الأجهزة المحمولة والأجهزة اللوحية مع تصميم متجاوب بالكامل",
  },
];

// Benefits
const benefits = [
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "حل متكامل وشامل",
    description: "نقدم لك أكثر من برنامج محاسبي، نقدم لك حل متكامل يساعدك في إدارة حساباتك وفواتيرك ومخزونك بكل احترافية.",
  },
  {
    icon: <University className="w-8 h-8" />,
    title: "الربط مع هيئة الزكاة والضريبة",
    description: "نظامنا متوافق ومرتبط مباشرة مع أنظمة هيئة الزكاة والضريبة السعودية لضمان الامتثال الكامل للقوانين المالية.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "خدمة عملاء متميزة",
    description: "فريق دعم فني متخصص متاح 24/7 لمساعدتك والإجابة على جميع استفساراتك.",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "تحديثات مستمرة",
    description: "نواكب أحدث التطورات التقنية والقوانين المحاسبية لضمان حصولك على أفضل خدمة.",
  },
];

// Stats
const stats = [
  { value: "15+", label: "سنة خبرة" },
  { value: "10,000+", label: "عميل راضٍ" },
  { value: "24/7", label: "دعم فني" },
  { value: "20+", label: "موديول" },
];

// Countries
const countries = [
  { name: "المملكة العربية السعودية", flag: "🇸🇦" },
  { name: "الإمارات", flag: "🇦🇪" },
  { name: "قطر", flag: "🇶🇦" },
  { name: "مصر", flag: "🇪🇬" },
  { name: "عُمان", flag: "🇴🇲" },
  { name: "البحرين", flag: "🇧🇭" },
  { name: "اليمن", flag: "🇾🇪" },
];

// Business Activities with PDFs
const businessActivities: BusinessActivity[] = [
  {
    name: "الحسابات والمخزون",
    desc: "نظام متكامل لإدارة الحسابات والمخزون لكافة الأنشطة التجارية",
    icon: <Calculator className="w-8 h-8" />,
    features: ["القيود المحاسبية", "إدارة الأصناف", "الميزانيات", "التقارير المالية", "تكامل مع ZATCA", "الجرد والمخزون"],
    solutions: ["تكامل كامل بين الحسابات والمخزون", "تقارير تفصيلية", "متابعة التكاليف", "أرشفة تلقائية"],
    stats: { value: "500+", label: "منشأة تستخدمه" }
  },
  {
    name: "المطاعم والكافيهات",
    desc: "حلول متخصصة لإدارة المطاعم والكافيهات بكفاءة عالية مع تكامل كامل مع ZATCA",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    pdfUrl: "/pdfs/sectors/restaurants.pdf",
    features: ["إدارة الطلبات", "قوائم الطعام", "المطبخ والتوصيل", "نقاط البيع", "إدارة الطاولات", "الطباعة على المطبخ"],
    solutions: ["تكامل مع ZATCA", "إدارة المخزون الغذائي", "حساب التكاليف", "تقارير المبيعات"],
    stats: { value: "200+", label: "مطعم وكافيه" }
  },
  {
    name: "قطاع المقاولات وإدارة المشاريع",
    desc: "نظام شامل لإدارة المقاولات ومتابعة المشاريع مع حساب التكاليف الدقيق",
    icon: <Building2 className="w-8 h-8" />,
    features: ["إدارة العقود", "متابعة المشاريع", "حساب التكاليف", "إدارة العمالة", "حساب الدفعات", "تقارير المشاريع"],
    solutions: ["تقارير المشاريع", "متابعة الجداول الزمنية", "إدارة الدفعات", "شهادات الاستلام"],
    stats: { value: "150+", label: "مقاول" }
  },
  {
    name: "قطاع المصانع والإنتاج",
    desc: "حلول متكاملة لإدارة المصانع وعمليات الإنتاج مع مراقبة الجودة",
    icon: <Wrench className="w-8 h-8" />,
    pdfUrl: "/pdfs/sectors/factories.pdf",
    features: ["إدارة الإنتاج", "خطوط الإنتاج", "مراقبة الجودة", "التخطيط الإنتاجي", "إدارة المواد الخام", "حساب التكلفة"],
    solutions: ["حساب تكلفة الإنتاج", "إدارة المواد الخام", "تقارير الإنتاج", "مراقبة الجودة"],
    stats: { value: "100+", label: "مصنع" }
  },
  {
    name: "قطاع السوبرماركت والهايبر ماركت",
    desc: "نظام متطور لإدارة السوبرماركت والهايبر ماركت مع دعم الفروع المتعددة",
    icon: <ShoppingCart className="w-8 h-8" />,
    pdfUrl: "/pdfs/sectors/supermarkets.pdf",
    features: ["إدارة الأصناف", "نقاط البيع", "العروض والخصومات", "إدارة الفروع", "برامج الولاء", "الموازين"],
    solutions: ["تكامل مع ZATCA", "إدارة المخزون المتعدد", "برامج الولاء", "مزامنة الفروع"],
    stats: { value: "300+", label: "سوبرماركت" }
  },
  {
    name: "قطاع قطع غيار السيارات",
    desc: "حلول متخصصة لتجارة قطع غيار السيارات والزيوت والبطاريات",
    icon: <Truck className="w-8 h-8" />,
    pdfUrl: "/pdfs/sectors/spareparts.pdf",
    features: ["إدارة القطع", "التوافق مع الموديلات", "إدارة الزيوت والبطاريات", "التقارير", "الأرقام التسلسلية", "المرتجعات"],
    solutions: ["قاعدة بيانات القطع", "متابعة الأرقام التسلسلية", "إدارة المرتجعات", "التوافق مع الموديلات"],
    stats: { value: "80+", label: "محل قطع غيار" }
  },
  {
    name: "قطاع إدارة الأملاك والعقار",
    desc: "نظام شامل لإدارة الأملاك والعقارات والفنادق والشقق المفروشة",
    icon: <Building className="w-8 h-8" />,
    features: ["إدارة العقود", "حجز الوحدات", "الفواتير والإيجارات", "الصيانة", "إدارة النزلاء", "تقارير الإيرادات"],
    solutions: ["متابعة الإيرادات", "إدارة العقارات", "تنبيهات تجديد العقود", "حجز تلقائي"],
    stats: { value: "120+", label: "شركة عقارية" }
  },
  {
    name: "مواد البناء والسباكة والكهرباء",
    desc: "حلول متكاملة لتجارة مواد البناء والسباكة والكهرباء والأدوات الصحية",
    icon: <Archive className="w-8 h-8" />,
    pdfUrl: "/pdfs/sectors/building-materials.pdf",
    features: ["إدارة الأصناف", "وحدات القياس", "الكميات الكبيرة", "التوريدات", "التسعيرة المتعددة", "عروض الأسعار"],
    solutions: ["تسعيرة متعددة", "إدارة العملاء", "تقارير المبيعات", "إدارة التوريدات"],
    stats: { value: "90+", label: "محل مواد بناء" }
  },
  {
    name: "قطاع الذهب والمجوهرات",
    desc: "نظام متخصص لتجارة الذهب والمجوهرات مع حساب المعايرات الدقيق",
    icon: <Gem className="w-8 h-8" />,
    features: ["إدارة الأصناف الذهبية", "معايرات الذهب", "حساب الأجرة", "التقارير", "حساب المصنعية", "تتبع العيارات"],
    solutions: ["دقة في الحسابات", "متابعة المعايرات", "حساب الأجر والخصم", "تقارير الذهب"],
    stats: { value: "70+", label: "محل ذهب" }
  },
  {
    name: "الصيدليات",
    desc: "حلول متخصصة لإدارة الصيدليات والمستودعات الطبية",
    icon: <Hospital className="w-8 h-8" />,
    features: ["إدارة الأدوية", "تواريخ الانتهاء", "الوصفات الطبية", "التقارير", "تكامل التأمين", "إدارة الفروع"],
    solutions: ["تنبيهات تواريخ الانتهاء", "تكامل مع التأمين", "إدارة الفروع", "الوصفات الإلكترونية"],
    stats: { value: "60+", label: "صيدلية" }
  },
  {
    name: "الأجهزة الكهربائية والإلكترونيات",
    desc: "نظام متكامل لتجارة الأجهزة الكهربائية والإلكترونيات",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["إدارة المنتجات", "الضمانات", "خدمة ما بعد البيع", "التقارير", "الأرقام التسلسلية", "الصيانة"],
    solutions: ["متابعة أرقام التسلسلية", "إدارة الضمانات", "الصيانة والتركيب", "خدمة العملاء"],
    stats: { value: "100+", label: "محل أجهزة" }
  },
  {
    name: "محطات الوقود",
    desc: "حلول شاملة لإدارة محطات الوقود ومراكز الخدمة",
    icon: <Globe className="w-8 h-8" />,
    features: ["إدارة المضخات", "المخزون", "خدمة السيارات", "التقارير", "إدارة العمالة", "حساب التكاليف"],
    solutions: ["متابعة المبيعات اليومية", "إدارة العمالة", "تكامل مع ZATCA", "تقارير تفصيلية"],
    stats: { value: "50+", label: "محطة وقود" }
  }
];

// Blog Articles with full content
const blogArticles = [
  {
    id: 1,
    title: "دليل الفوترة الإلكترونية في السعودية - المرحلة الأولى والثانية",
    excerpt: "تعرف على متطلبات هيئة الزكاة والضريبة والجمارك للفوترة الإلكترونية، الفرق بين المرحلة الأولى والثانية، وكيفية الالتزام بالمتطلبات.",
    category: "الفوترة الإلكترونية",
    tags: ["ZATCA", "فوترة إلكترونية", "السعودية", "المرحلة الثانية"],
    date: "2024-12-01",
    readTime: "8 دقائق",
    featured: true,
    content: `
## مقدمة
في إطار رؤية المملكة العربية السعودية 2030 وتحولها الرقمي، أطلقت هيئة الزكاة والضريبة والجمارك (ZATCA) مشروع الفوترة الإلكترونية الذي يهدف إلى تحويل جميع الفواتير من الشكل الورقي إلى الإلكتروني.

## المرحلة الأولى من الفوترة الإلكترونية
بدأت المرحلة الأولى في ديسمبر 2021 وتشمل:

### المتطلبات الأساسية:
- إصدار الفواتير الإلكترونية بصيغة XML أو PDF/A-3
- تضمين رمز QR في كل فاتورة
- حفظ الفواتير إلكترونياً لمدة لا تقل عن 6 سنوات
- استخدام نظام محاسبي معتمد من ZATCA

### البيانات المطلوبة في الفاتورة:
1. اسم البائع ورقم تسجيله الضريبي
2. تاريخ ووقت إصدار الفاتورة
3. إجمالي الفاتورة ومبلغ الضريبة
4. رمز QR للتحقق من صحة الفاتورة

## المرحلة الثانية من الفوترة الإلكترونية
بدأ تطبيق المرحلة الثانية في يناير 2023 وتتضمن:

### الربط المباشر مع ZATCA:
- ربط النظام المحاسبي مباشرة مع أنظمة ZATCA
- إرسال الفواتير في الوقت الفعلي
- التوقيع الإلكتروني لكل فاتورة
- استلام إشعارات القبول أو الرفض فوراً

### الفرق بين المرحلتين:
| الميزة | المرحلة الأولى | المرحلة الثانية |
|--------|---------------|----------------|
| إصدار الفواتير | إلكتروني | إلكتروني مع ربط |
| التوقيع | غير مطلوب | إلكتروني معتمد |
| الإرسال | حفظ محلي | إرسال فوري |
| الرد | غير متاح | قبول/رفض فوري |

## كيفية الالتزام
للiona الكامل، يجب:
1. اختيار نظام محاسبي معتمد مثل المحاسب الشامل
2. التأكد من دعم النظام للمرحلتين
3. تدريب الموظفين على استخدام النظام
4. التواصل مع ZATCA للحصول على الاعتماد

## الخلاصة
الفوترة الإلكترونية ليست خياراً بل إلزام قانوني. برنامج المحاسب الشامل يوفر لك حلاً متكاملاً ومتوافقاً مع جميع متطلبات ZATCA.
    `
  },
  {
    id: 2,
    title: "أفضل برنامج محاسبة للمؤسسات الصغيرة والمتوسطة في السعودية",
    excerpt: "دليل شامل لاختيار البرنامج المحاسبي المناسب لمؤسستك، مع مقارنة بين الخيارات المتاحة والميزات الأساسية.",
    category: "برامج المحاسبة",
    tags: ["برنامج محاسبة", "المؤسسات الصغيرة", "السعودية", "ERP"],
    date: "2024-11-28",
    readTime: "6 دقائق",
    featured: false,
    content: `
## مقدمة
اختيار برنامج المحاسبة المناسب هو قرار حاسم لأي مؤسسة. في هذا المقال، نقدم لك دليلاً شاملاً لاختيار البرنامج الأنسب.

## المعايير الأساسية للاختيار

### 1. التوافق مع ZATCA
يجب أن يكون البرنامج:
- معتمداً من هيئة الزكاة والضريبة
- يدعم الفوترة الإلكترونية (المرحلة الأولى والثانية)
- يوفر رمز QR في الفواتير

### 2. سهولة الاستخدام
- واجهة مستخدم بسيطة وواضحة
- دعم اللغة العربية
- إمكانية التدريب السريع

### 3. الميزات الأساسية
- دفتر اليومية العامة
- دفتر الأستاذ
- ميزان المراجعة
- القوائم المالية
- إدارة المخزون
- نقاط البيع

### 4. التقارير
- تقارير مالية متنوعة
- تقارير ضريبية
- تقارير مخصصة
- إمكانية التصدير لـ Excel

## مقارنة بين البرامج المتاحة

| الميزة | المحاسب الشامل | برامج أخرى |
|--------|---------------|------------|
| التوافق مع ZATCA | ✓ كامل | متفاوت |
| الدعم الفني | 24/7 | محدود |
| التدريب | مجاني | مدفوع |
| السعر | مناسب | مرتفع |

## نصائح قبل الشراء
1. اطلب نسخة تجريبية مجانية
2. تحقق من وجود دعم فني محلي
3. تأكد من إمكانية الترقية مستقبلاً
4. اقرأ تقييمات العملاء السابقين

## الخلاصة
برنامج المحاسب الشامل يعد الخيار الأمثل للمؤسسات الصغيرة والمتوسطة في السعودية، بتوافقه الكامل مع ZATCA ودعمه الفني المتميز.
    `
  },
  {
    id: 3,
    title: "كيف تختار نظام نقاط البيع المناسب لمتجرك؟",
    excerpt: "نصائح وإرشادات لاختيار نظام نقاط البيع الأنسب لنشاطك التجاري، مع مراعاة التكامل مع الفوترة الإلكترونية.",
    category: "نقاط البيع",
    tags: ["POS", "نقاط البيع", "التجارة", "المبيعات"],
    date: "2024-11-25",
    readTime: "5 دقائق",
    featured: false,
    content: `
## مقدمة
نظام نقاط البيع (POS) هو شريان أي تجارة. اختيار النظام المناسب يؤثر مباشرة على كفاءة عملياتك وحساباتك.

## ما هو نظام نقاط البيع؟
نظام نقاط البيع هو برنامج يدير عمليات البيع في المتاجر، ويشمل:
- تسجيل المبيعات
- إدارة الدفع
- طباعة الفواتير
- متابعة المخزون

## المعايير الأساسية للاختيار

### 1. التوافق مع الفوترة الإلكترونية
- يجب أن يتكامل مع نظام ZATCA
- يصدر فواتير إلكترونية معتمدة
- يدعم رمز QR

### 2. سهولة الاستخدام
- واجهة بسيطة للموظفين
- سرعة في تنفيذ العمليات
- دعم الشاشات اللمسية

### 3. إدارة المخزون
- تتبع الكميات تلقائياً
- تنبيهات نفاد المخزون
- تقارير حركة المخزون

### 4. التقارير والإحصائيات
- تقارير المبيعات اليومية
- تقارير أداء الموظفين
- تحليل المبيعات حسب المنتج

## الأجهزة المدعومة
- أجهزة الكمبيوتر
- الأجهزة اللوحية
- الهواتف الذكية
- أجهزة POS المتخصصة

## طرق الدفع
- النقدية
- البطاقات البنكية
- المدى
- Apple Pay و Google Pay
- STC Pay

## الخلاصة
اختر نظام نقاط بيع يتكامل مع برنامج المحاسب الشامل لضمان توافق كامل مع متطلبات ZATCA وإدارة شاملة لأعمالك.
    `
  },
  {
    id: 4,
    title: "إدارة المخزون بفعالية: نصائح للمحاسبين",
    excerpt: "أفضل الممارسات في إدارة المخزون وكيفية استخدام التقارير المخزنية لاتخاذ قرارات أفضل.",
    category: "إدارة المخزون",
    tags: ["المخزون", "إدارة المخزون", "التقارير", "المحاسبة"],
    date: "2024-11-20",
    readTime: "7 دقائق",
    featured: false,
    content: `
## مقدمة
إدارة المخزون الفعالة هي مفتاح النجاح لأي تجارة. في هذا المقال، نقدم لك أفضل الممارسات والنصائح.

## أهمية إدارة المخزون
- تقليل التكاليف التخزينية
- تجنب نفاد المخزون
- تحسين التدفق النقدي
- زيادة رضا العملاء

## أساليب إدارة المخزون

### 1. طريقة FIFO (الوارد أولاً يخرج أولاً)
مناسبة للمنتجات سريعة التلف أو ذات تاريخ انتهاء.

### 2. طريقة LIFO (الوارد أخيراً يخرج أولاً)
مناسبة للمنتجات غير القابلة للتلف.

### 3. طريقة JIT (في الوقت المحدد)
تقليل المخزون وتلقي البضائع عند الحاجة فقط.

## التقارير الأساسية

### 1. تقرير حركة المخزون
يوضح الداخل والخارج من المخزون خلال فترة معينة.

### 2. تقرير المخزون الراكد
يظهر المنتجات التي لم تتحرك منذ فترة.

### 3. تقرير نقاط إعادة الطلب
يحدد المنتجات التي وصلت للحد الأدنى.

### 4. تقرير تقييم المخزون
يوضح قيمة المخزون الحالية.

## مؤشرات الأداء (KPIs)
- معدل دوران المخزون
- نسبة المخزون الراكد
- دقة الجرد
- تكلفة الاحتفاظ بالمخزون

## نصائح عملية
1. اعمل جرد دوري منتظم
2. استخدم الباركود لتتبع المنتجات
3. حدد نقاط إعادة الطلب لكل منتج
4. راقب المنتجات الراكدة وتخلص منها
5. درب الموظفين على إجراءات المخزون

## الخلاصة
برنامج المحاسب الشامل يوفر لك نظاماً متكاملاً لإدارة المخزون مع تقارير متقدمة وتنبيهات ذكية.
    `
  },
  {
    id: 5,
    title: "التوافق مع ZATCA: كل ما تحتاج معرفته",
    excerpt: "شرح مفصل لمتطلبات هيئة الزكاة والضريبة والجمارك وكيفية ضمان امتثال نظامك المحاسبي.",
    category: "ZATCA",
    tags: ["ZATCA", "الامتثال", "الضريبة", "السعودية"],
    date: "2024-11-15",
    readTime: "10 دقائق",
    featured: true,
    content: `
## مقدمة
هيئة الزكاة والضريبة والجمارك (ZATCA) هي الجهة المسؤولة عن تحصيل الضرائب في السعودية. الالتزام بمتطلباتها أمر إلزامي.

## ما هي ZATCA؟
هيئة حكومية سعودية تأسست لتنظيم قطاع الضرائب والجمارك، وتشمل:
- ضريبة القيمة المضافة (VAT)
- الضريبة الانتقائية
- الزكاة
- الفوترة الإلكترونية

## متطلبات التسجيل

### 1. التسجيل في ضريبة القيمة المضافة
إلزامي للمؤسسات التي يتجاوز إيرادها السنوي 375,000 ريال.

### 2. التسجيل في الفوترة الإلكترونية
إلزامي لجميع المنشآت الخاضعة للضريبة.

## متطلبات الفوترة الإلكترونية

### الفاتورة الضريبية (للتعاملات B2B)
- اسم وعنوان ورقم التسجيل للبائع
- اسم وعنوان ورقم التسجيل للمشتري
- تاريخ إصدار الفاتورة
- وصف السلع أو الخدمات
- القيمة قبل الضريبة
- مبلغ الضريبة ونسبتها
- إجمالي الفاتورة
- رمز QR

### الفاتورة المبسطة (للتعاملات B2C)
- بيانات البائع فقط
- إجمالي الفاتورة مع الضريبة
- رمز QR

## عقوبات عدم الالتزام
- غرامات مالية تصل إلى 100,000 ريال
- إيقاف النشاط
- مساءلة قانونية

## كيف تضمن الالتزام؟
1. استخدم نظاماً معتمداً من ZATCA
2. احتفظ بنسخ احتياطية
3. درب موظفيك
4. راجع فواتيرك دورياً

## الخلاصة
برنامج المحاسب الشامل معتمد بالكامل من ZATCA ويوفر لك حلاً متكاملاً لضمان الالتزام الكامل.
    `
  },
  {
    id: 6,
    title: "نظام الموارد البشرية: كيف تدير موظفيك بكفاءة",
    excerpt: "دليل لإدارة الرواتب والحضور والإجازات باستخدام نظام الموارد البشرية المتكامل.",
    category: "الموارد البشرية",
    tags: ["HR", "الرواتب", "الموظفين", "إدارة الموارد"],
    date: "2024-11-10",
    readTime: "6 دقائق",
    featured: false,
    content: `
## مقدمة
إدارة الموارد البشرية من أهم وظائف أي مؤسسة. نظام متكامل يوفر عليك الوقت والجهد ويقلل الأخطاء.

## مكونات نظام الموارد البشرية

### 1. إدارة بيانات الموظفين
- البيانات الشخصية
- بيانات التوظيف
- المؤهلات والخبرات
- الوثائق والشهادات

### 2. إدارة الحضور والانصراف
- تسجيل الدوام
- حساب ساعات العمل
- العمل الإضافي
- التأخير والغياب

### 3. إدارة الرواتب
- حساب الراتب الأساسي
- البدلات (سكن، نقل، اتصالات)
- الخصومات (تأمينات، غياب)
- المكافآت

### 4. إدارة الإجازات
- إجازة سنوية
- إجازة مرضية
- إجازة طوارئ
- إجازة أمومة

### 5. نظام الأداء
- تقييم دوري
- أهداف فردية
- خطط تطوير

## التقارير الأساسية
- تقرير كشف الرواتب
- تقرير الحضور الشهري
- تقرير رصيد الإجازات
- تقرير تكلفة الموظف

## التكامل مع الحسابات
- قيود رواتب تلقائية
- تسوية التأمينات
- إعداد التقارير الضريبية

## مميزات نظام الموارد البشرية في المحاسب الشامل
- متوافق مع نظام العمل السعودي
- حساب تلقائي للـ GOSI
- تقارير متنوعة
- تكامل كامل مع الحسابات

## الخلاصة
نظام الموارد البشرية في المحاسب الشامل يوفر لك إدارة شاملة لموظفيك مع تكامل كامل مع الحسابات والفوترة الإلكترونية.
    `
  },
];

// FAQs
const faqs = [
  {
    question: "ما هو الفرق بين الفاتورة الضريبية والفاتورة المبسطة؟",
    answer: "الفاتورة الضريبية تستخدم في التعاملات بين الشركات (B2B) وتتضمن جميع بيانات الطرفين بالتفصيل، بينما الفاتورة المبسطة تستخدم في التعاملات مع المستهلكين (B2C) وتكفي بيانات البائع فقط.",
    category: "الفوترة",
  },
  {
    question: "هل النظام متوافق مع متطلبات هيئة الزكاة والضريبة؟",
    answer: "نعم، نظام المحاسب الشامل متوافق 100% مع متطلبات هيئة الزكاة والضريبة والجمارك في المرحلتين الأولى والثانية، ومسجل كمزود حلول معتمد ومرتبط مباشرة مع منصة فاتورة.",
    category: "ZATCA",
  },
  {
    question: "ما هي المنتجات المتاحة وكيف أختار المناسب؟",
    answer: "نوفر 6 منتجات متنوعة: الشامل بلس للمنشآت الكبيرة، الشامل للمتوسطة، أولتكس للمبتدئين، الشامل ويب السحابي، تروست بالاشتراكات، والشامل لايت للجوال. يمكنك التواصل معنا لاختيار الأنسب.",
    category: "المنتجات",
  },
  {
    question: "هل يمكنني تجربة النظام قبل الشراء؟",
    answer: "نعم، نقدم نسخة تجريبية مجانية لجميع منتجاتنا. يمكنك طلب النسخة التجريبية من خلال نموذج التواصل أو عبر الواتساب.",
    category: "التجربة",
  },
  {
    question: "ما هي الموديولات المتاحة في النظام؟",
    answer: "نوفر أكثر من 20 موديول تشمل: الحسابات، المخزون، نقاط البيع، الموارد البشرية، المستشفيات، المختبرات، المطاعم، الذهب، النقل، العقود، التخليص الجمركي، وغيرها الكثير.",
    category: "الموديولات",
  },
  {
    question: "هل يوجد دعم فني بعد الشراء؟",
    answer: "نعم، نوفر دعم فني متاح 24/7 عبر الهاتف والواتساب والبريد الإلكتروني، مع تدريب مجاني على استخدام النظام.",
    category: "الدعم",
  },
  {
    question: "ما هي الدول التي تغطونها؟",
    answer: "نغطي المملكة العربية السعودية، الإمارات، قطر، مصر، عُمان، البحرين، واليمن مع مكاتب محلية وفريق دعم متخصص.",
    category: "التغطية",
  },
  {
    question: "هل يمكن ربط المتجر الإلكتروني مع النظام؟",
    answer: "نعم، نوفر موديول خاص لربط المتاجر الإلكترونية مع النظام لتزامن الفواتير والطلبات والمخزون بشكل تلقائي.",
    category: "التكامل",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof blogArticles[0] | null>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);
  const [selectedBusinessActivity, setSelectedBusinessActivity] = useState<BusinessActivity | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      if (response.ok) {
        toast({ title: "تم إرسال طلبك بنجاح", description: "سنتواصل معك خلال 24 ساعة" });
        setContactForm({ name: "", email: "", phone: "", company: "", product: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "حدث خطأ", description: "يرجى التواصل عبر الواتساب", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/shamel-logo.png" alt="المحاسب الشامل" width={45} height={45} className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">المحاسب الشامل</span>
                <span className="text-[10px] text-muted-foreground hidden sm:block">نظام محاسبي متكامل</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="hidden sm:flex">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button className="hidden sm:flex btn-gradient" onClick={() => scrollToSection("#contact")}>
                جرب مجاناً
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t">
                <div className="py-4 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-right px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeSection === item.href.replace("#", "") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex gap-2 px-4 pt-2">
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    <Button className="flex-1 btn-gradient">جرب مجاناً</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden gradient-hero">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center lg:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  معتمد من هيئة الزكاة والضريبة والربط مع منصة فاتورة
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  برنامج المحاسب الشامل
                  <br />
                  <span className="text-gradient">حلول محاسبية متكاملة</span>
                  <br />
                  لعملك
                </h1>

                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  أكثر من 15 عاماً من الخبرة في تقديم حلول محاسبية مبتكرة للشركات والمؤسسات. فوترة إلكترونية معتمدة،
                  إدارة مخزون، نقاط بيع، وتقارير مالية دقيقة.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-lg px-8 btn-gradient" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                    <MessageCircle className="ml-2 h-5 w-5" />
                    جرب مجاناً
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection("#contact")}>
                    احصل على استشارة مجانية
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                  {stats.map((stat, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center p-4 rounded-lg bg-card border">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative hidden lg:block">
                <div className="bg-card rounded-2xl shadow-2xl border overflow-hidden">
                  <div className="bg-muted p-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 text-center text-xs text-muted-foreground">almohasib.com</div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">لوحة التحكم</div>
                      <div className="flex gap-2">
                        <div className="w-20 h-8 bg-muted rounded" />
                        <div className="w-20 h-8 bg-muted rounded" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {["المبيعات", "المشتريات", "الأرباح"].map((item, i) => (
                        <div key={i} className="p-4 rounded-lg bg-muted">
                          <div className="text-xs text-muted-foreground mb-1">{item}</div>
                          <div className="text-xl font-bold">{i === 0 ? "125,000" : i === 1 ? "85,000" : "40,000"}</div>
                          <div className="text-xs text-green-600">+12%</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  </div>
                </div>

                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">معتمد من ZATCA</div>
                      <div className="text-xs text-muted-foreground">مرحلة 1 & 2</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">من نحن</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">لماذا تختار المحاسب الشامل؟</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">حل متكامل شامل لجميع احتياجاتك المحاسبية والإدارية منذ أكثر من 15 عاماً</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">المميزات</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">مزايا وخصائص المحاسب الشامل</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">نظام متكامل يوفر لك جميع الأدوات التي تحتاجها لإدارة أعمالك بكفاءة</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modules" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">الموديولات</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">الموديولات والوحدات المتاحة</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">مجموعة شاملة من الحلول المتخصصة لكافة القطاعات - أكثر من 20 موديول</p>
              </motion.div>
            </div>

            <div className="space-y-12">
              {modulesCategories.map((category, catIndex) => (
                <motion.div key={catIndex} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: catIndex * 0.1 }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.modules.map((module, modIndex) => (
                      <Card 
                        key={modIndex} 
                        className="hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-primary/50"
                        onClick={() => setSelectedModule(module)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                              {module.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-sm mb-1">{module.name}</h4>
                                <Info className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-xs text-muted-foreground">{module.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
              <Card className="inline-block p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Puzzle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold">اختر الموديولات المناسبة لنشاطك</h3>
                    <p className="text-sm text-muted-foreground">يمكنك اختيار الموديولات التي تحتاجها فقط</p>
                  </div>
                  <Button className="btn-gradient" onClick={() => scrollToSection("#contact")}>
                    استشارة مجانية
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Business Activities Section */}
        <section id="business-activities" className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">الأنشطة التجارية</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">حلول متخصصة لكل نشاط تجاري</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">نوفر حلولاً مخصصة لجميع الأنشطة التجارية مع عروض تقنية مفصلة</p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessActivities.map((activity, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.05 }}
                >
                  <Card 
                    className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer hover:border-primary/50"
                    onClick={() => setSelectedBusinessActivity(activity)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{activity.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{activity.desc}</p>
                          {activity.pdfUrl && (
                            <div className="flex items-center gap-1 mt-2 text-primary text-xs">
                              <Download className="w-3 h-3" />
                              <span>عرض فني PDF متاح</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {activity.stats && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary">{activity.stats.value}</span>
                            <span className="text-xs text-muted-foreground">{activity.stats.label}</span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">المنتجات</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">منتجاتنا</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">مجموعة متكاملة من الحلول المحاسبية لتلبية جميع احتياجاتك التجارية</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className={`h-full relative overflow-hidden group ${product.popular ? "border-2 border-primary" : ""}`}>
                    {product.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">الأكثر طلباً</Badge>
                      </div>
                    )}
                    <CardContent className="pt-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        {product.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full btn-gradient" onClick={() => scrollToSection("#contact")}>
                        اطلب الآن
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* E-Invoicing Section */}
        <section id="invoicing" className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white">الفوترة الإلكترونية</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">معتمد من هيئة الزكاة والضريبة والربط مع منصة فاتورة</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">نظام متوافق بالكامل مع متطلبات هيئة الزكاة والضريبة ومرتبط مباشرة مع منصة فاتورة</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Shield />, title: "معتمد رسمياً", desc: "حاصل على الاعتماد الرسمي من هيئة الزكاة والضريبة" },
                { icon: <QrCode />, title: "QR Code", desc: "رمز QR في كل فاتورة للتحقق" },
                { icon: <Globe />, title: "ربط مباشر", desc: "تكامل مباشر مع منصة فاتورة" },
                { icon: <Lock />, title: "توقيع رقمي", desc: "توقيع إلكتروني معتمد لكل فاتورة" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur">
                  <CardHeader>
                    <Badge className="w-fit mb-2">المرحلة الأولى</Badge>
                    <CardTitle className="text-white">إصدار وحفظ الفواتير</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80">
                    <ul className="space-y-2">
                      {["إصدار فواتير إلكترونية بصيغة XML/PDF", "حفظ الفواتير إلكترونياً لمدة 6 سنوات", "إضافة رمز QR لكل فاتورة", "تضمين جميع البيانات المطلوبة"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-accent text-accent-foreground">المرحلة الثانية</Badge>
                    <CardTitle className="text-white">الربط والتكامل</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80">
                    <ul className="space-y-2">
                      {["ربط مباشر مع نظام ZATCA عبر API", "إرسال الفواتير في الوقت الفعلي", "توقيع إلكتروني معتمد لكل فاتورة", "إشعارات فورية بقبول/رفض الفواتير"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">التغطية</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">نغطي منطقة الخليج والشرق الأوسط</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">مكاتب محلية وفريق دعم متخصص في كل منطقة</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <Card className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <span className="font-medium">{country.name}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">المدونة</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">مقالات ونصائح محاسبية</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">اكتشف أحدث المقالات والنصائح في مجال المحاسبة والفوترة الإلكترونية</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogArticles.map((article, index) => (
                <motion.div 
                  key={article.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedArticle(article)}
                >
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 group cursor-pointer ${article.featured ? "border-2 border-primary/30" : ""}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                        {article.featured && (
                          <Badge className="bg-primary text-primary-foreground text-xs">مميز</Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">#{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.date}</span>
                        <span>{article.readTime} قراءة</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
              <Button variant="outline" size="lg" className="px-8" onClick={() => setSelectedArticle(blogArticles[0])}>
                عرض جميع المقالات
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">الأسئلة الشائعة</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">هل لديك استفسار؟</h2>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <AccordionItem value={`item-${index}`} className="bg-card rounded-lg px-6">
                      <AccordionTrigger className="text-right hover:no-underline">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{faq.category}</Badge>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-right">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="secondary" className="mb-4">تواصل معنا</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">احصل على نسختك المجانية الآن</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">تواصل معنا لطلب عرض تجريبي أو للحصول على مزيد من المعلومات</p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input id="name" placeholder="أدخل اسمك" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input id="email" type="email" placeholder="example@company.com" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الواتساب *</Label>
                        <Input id="phone" placeholder="05xxxxxxxx" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product">المنتج المطلوب</Label>
                        <select id="product" className="w-full h-10 px-3 rounded-md border bg-background" value={contactForm.product} onChange={(e) => setContactForm({ ...contactForm, product: e.target.value })}>
                          <option value="">اختر المنتج</option>
                          {products.map((p) => (
                            <option key={p.name} value={p.name}>{p.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">ملاحظاتك أو متطلباتك</Label>
                      <Textarea id="message" placeholder="اكتب ملاحظاتك هنا..." rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-gradient" disabled={isSubmitting}>
                      {isSubmitting ? "جاري الإرسال..." : (
                        <>
                          أرسل الطلب الآن
                          <Send className="mr-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">واتساب</h3>
                      <p className="text-sm text-muted-foreground">تواصل معنا مباشرة</p>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">{PHONE_NUMBER}</a>
                    </div>
                    <Button className="bg-[#25D366] hover:bg-[#25D366]/90" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>تواصل الآن</Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">اتصل بنا</h3>
                      <p className="text-sm text-muted-foreground">الخط الساخن - 24/7</p>
                      <a href={`tel:${PHONE_NUMBER}`} className="text-primary font-medium hover:underline">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">البريد الإلكتروني</h3>
                      <p className="text-sm text-muted-foreground">نرد خلال 24 ساعة</p>
                      <a href={`mailto:${EMAIL}`} className="text-primary font-medium hover:underline">{EMAIL}</a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">موقعنا</h3>
                      <p className="text-sm text-muted-foreground">المملكة العربية السعودية • الإمارات • قطر • مصر • عُمان • البحرين • اليمن</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">جاهز للتحول إلى المحاسبة الإلكترونية؟</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">ابدأ تجربتك المجانية اليوم وانضم إلى أكثر من 10,000 عميل يثقون بالمحاسب الشامل</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => scrollToSection("#contact")}>جرب مجاناً لمدة 14 يوم</Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white hover:bg-white/10" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                  <MessageCircle className="ml-2 h-5 w-5" />
                  تواصل عبر واتساب
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/shamel-logo.png" alt="المحاسب الشامل" width={40} height={40} className="h-10 w-auto" />
                <span className="text-xl font-bold">المحاسب الشامل</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">برنامج محاسبي متكامل للشركات والمؤسسات. معتمد من هيئة الزكاة والضريبة والربط مع منصة فاتورة.</p>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                {navItems.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <button onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">المنتجات</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {products.slice(0, 5).map((p) => (
                  <li key={p.name}>{p.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary transition-colors">{PHONE_NUMBER}</a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">واتساب</a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{EMAIL}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image src="/shamel-logo.png" alt="الشامل" width={80} height={30} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <Image src="/fatora-logo.png" alt="فاتورة" width={60} height={25} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} المحاسب الشامل. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Article Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{selectedArticle.category}</Badge>
                  {selectedArticle.featured && (
                    <Badge className="bg-primary text-primary-foreground">مميز</Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl text-right">{selectedArticle.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 text-sm">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime} قراءة</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none dark:prose-invert text-right">
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {selectedArticle.content}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="mt-8 p-4 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-3">هل تحتاج مساعدة في اختيار البرنامج المناسب؟</p>
                  <Button className="btn-gradient" onClick={() => {
                    setSelectedArticle(null);
                    scrollToSection("#contact");
                  }}>
                    تواصل معنا الآن
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Module Dialog */}
      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedModule && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {selectedModule.icon}
                  </div>
                  <DialogTitle className="text-2xl text-right">{selectedModule.name}</DialogTitle>
                </div>
                <p className="text-muted-foreground text-right">{selectedModule.desc}</p>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                {/* Features */}
                {selectedModule.features && selectedModule.features.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      الميزات الرئيسية
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedModule.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Benefits */}
                {selectedModule.benefits && selectedModule.benefits.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      الفوائد
                    </h4>
                    <div className="space-y-2">
                      {selectedModule.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg">
                          <Star className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA */}
                <div className="p-4 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-3">هل تحتاج هذا الموديول في نشاطك التجاري؟</p>
                  <div className="flex gap-2 justify-center">
                    <Button 
                      className="btn-gradient"
                      onClick={() => {
                        setSelectedModule(null);
                        scrollToSection("#contact");
                      }}
                    >
                      اطلب الآن
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSelectedModule(null);
                        window.open(WHATSAPP_LINK, "_blank");
                      }}
                    >
                      <MessageCircle className="w-4 h-4 ml-2" />
                      واتساب
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Business Activity Dialog */}
      <Dialog open={!!selectedBusinessActivity} onOpenChange={() => setSelectedBusinessActivity(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedBusinessActivity && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {selectedBusinessActivity.icon}
                  </div>
                  <DialogTitle className="text-2xl text-right">{selectedBusinessActivity.name}</DialogTitle>
                </div>
                <p className="text-muted-foreground text-right">{selectedBusinessActivity.desc}</p>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                {/* Stats */}
                {selectedBusinessActivity.stats && (
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{selectedBusinessActivity.stats.value}</span>
                      <span className="text-muted-foreground">{selectedBusinessActivity.stats.label}</span>
                    </div>
                  </div>
                )}

                {/* Features */}
                {selectedBusinessActivity.features && selectedBusinessActivity.features.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      الميزات الرئيسية
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedBusinessActivity.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Solutions */}
                {selectedBusinessActivity.solutions && selectedBusinessActivity.solutions.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      الحلول المقدمة
                    </h4>
                    <div className="space-y-2">
                      {selectedBusinessActivity.solutions.map((solution, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg">
                          <Star className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Download PDF Button */}
                {selectedBusinessActivity.pdfUrl && (
                  <div className="pt-4 border-t">
                    <a 
                      href={selectedBusinessActivity.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <Download className="w-5 h-5" />
                      تحميل العرض الفني (PDF)
                    </a>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      احصل على تفاصيل كاملة عن هذا القطاع
                    </p>
                  </div>
                )}
                
                {/* CTA */}
                <div className="p-4 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-3">هل يعمل نشاطك في هذا القطاع؟</p>
                  <div className="flex gap-2 justify-center">
                    <Button 
                      className="btn-gradient" 
                      onClick={() => {
                        setSelectedBusinessActivity(null);
                        scrollToSection("#contact");
                      }}
                    >
                      طلب عرض تجريبي
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                    >
                      <MessageCircle className="w-4 h-4 ml-2" />
                      واتساب
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
