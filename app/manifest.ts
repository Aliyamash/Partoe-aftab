import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "مؤسسه زبان پرتو آفتاب",
    short_name: "پرتو آفتاب",
    description: "آموزش زبان‌های خارجی و تعیین سطح رایگان حضوری و آنلاین",
    start_url: "/",
    display: "standalone",
    background_color: "#fff4df",
    theme_color: "#ff8700",
    lang: "fa",
    dir: "rtl",
    icons: [
      {
        src: "/brand/logo-light.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}

