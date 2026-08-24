import { defaultDescription, siteName, siteUrl, socialProfiles } from "@/lib/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: "Parto Aftab Language Institute",
      url: siteUrl,
      logo: `${siteUrl}/brand/logo-light.webp`,
      image: `${siteUrl}/og.png`,
      description: defaultDescription,
      foundingDate: "2024-10",
      telephone: ["+983152230945", "+989399376890", "+989962058446"],
      openingHours: ["08:00-13:00", "13:45-20:45"],
      sameAs: socialProfiles,
      knowsLanguage: ["fa", "en", "de", "ko", "tr"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+983152230945",
        contactType: "customer service",
        availableLanguage: ["Persian", "English"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "دوره‌های آموزشی مؤسسه زبان پرتو آفتاب",
        itemListElement: [
          "دوره زبان انگلیسی",
          "دوره زبان آلمانی",
          "دوره زبان کره‌ای",
          "دوره زبان ترکی استانبولی",
          "دوره آمادگی IELTS",
          "دوره آمادگی EPT",
          "زبان تخصصی گردشگری",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Course", name, provider: { "@id": `${siteUrl}/#organization` } },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: ["fa-IR", "en"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}

