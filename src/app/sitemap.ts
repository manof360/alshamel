import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aman-soft.com";

  // Main sections
  const sections = [
    { path: "", priority: 1, changeFreq: "daily" as const },
    { path: "#about", priority: 0.9, changeFreq: "weekly" as const },
    { path: "#features", priority: 0.9, changeFreq: "weekly" as const },
    { path: "#modules", priority: 0.9, changeFreq: "weekly" as const },
    { path: "#products", priority: 0.9, changeFreq: "weekly" as const },
    { path: "#invoicing", priority: 0.9, changeFreq: "weekly" as const },
    { path: "#faq", priority: 0.8, changeFreq: "monthly" as const },
    { path: "#contact", priority: 0.8, changeFreq: "monthly" as const },
  ];

  return sections.map((section) => ({
    url: `${baseUrl}/${section.path}`,
    lastModified: new Date(),
    changeFrequency: section.changeFreq,
    priority: section.priority,
    alternates: {
      languages: {
        ar: `${baseUrl}/${section.path}`,
        en: `${baseUrl}/en/${section.path}`,
      },
    },
  }));
}
