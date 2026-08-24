import type { Metadata } from "next";
import { LevelTestProvider } from "@/components/level-test/LevelTestProvider";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { RevealProvider } from "@/components/motion/RevealProvider";
import { StructuredData } from "@/components/seo/StructuredData";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const themeScript = `(function(){try{var key='parto-aftab-theme';var theme=localStorage.getItem(key);if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(error){document.documentElement.dataset.theme='light'}})()`;
const languageScript = `(function(){try{var key='parto-aftab-language';var saved=localStorage.getItem(key);var languages=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];var system=languages.some(function(language){return /^fa(?:-|$)/i.test(language)})?'fa':'en';var locale=saved==='fa'||saved==='en'?saved:system;document.documentElement.lang=locale;document.documentElement.dir=locale==='fa'?'rtl':'ltr'}catch(error){document.documentElement.lang='fa';document.documentElement.dir='rtl'}})()`;

export const metadata: Metadata = {
  title: {
    default: "مؤسسه زبان پرتو آفتاب | آموزش زبان‌های خارجی",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "education",
  keywords: [
    "مؤسسه زبان پرتو آفتاب",
    "آموزش زبان انگلیسی",
    "آموزش زبان آلمانی",
    "آموزش زبان کره‌ای",
    "آموزش زبان ترکی استانبولی",
    "تعیین سطح رایگان زبان",
    "آموزشگاه زبان زرین شهر",
    "IELTS",
    "EPT",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "مؤسسه زبان پرتو آفتاب",
    description: "زبان را زندگی کن، جهان را بساز.",
    type: "website",
    url: siteUrl,
    siteName,
    locale: "fa_IR",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 910,
        alt: "مؤسسه زبان پرتو آفتاب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مؤسسه زبان پرتو آفتاب",
    description: "زبان را زندگی کن، جهان را بساز.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/brand/logo-light.webp", type: "image/webp" }],
    shortcut: "/brand/logo-light.webp",
    apple: "/brand/logo-light.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
        <StructuredData />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <LevelTestProvider>
              <RevealProvider>{children}</RevealProvider>
            </LevelTestProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
