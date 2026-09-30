import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gazitransport | Türkiye - Avrupa & İngiltere Lojistik ve Taşımacılık",
  description:
    "Türkiye'den Avrupa ve İngiltere'ye ticari yük, gıda kargosu, mobilya ve zati ev eşyası taşımacılığı. Kapıdan kapıya sigortalı ve gümrüklemeli lojistik çözümleri.",
  keywords: [
    "gazitransport",
    "yurtdışına eşya gönderme",
    "yurtdışı kargo firmaları",
    "türkiyeden avrupaya eşya taşıma",
    "ingiltere ev eşyası taşıma",
    "avrupa parsiyel taşımacılık",
    "uluslararası lojistik firmaları",
    "gıda kargosu lojistiği",
    "zati eşya taşımacılığı"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gazitransport | Türkiye - Avrupa & İngiltere Lojistik ve Taşımacılık",
    description: "Türkiye'den Avrupa ve İngiltere'ye kapıdan kapıya güvenli, sigortalı ticari ve zati eşya taşımacılığı.",
    url: "https://gazitransport.com",
    siteName: "Gazitransport",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Yapay zeka botlarının şirketi tanıması için JSON-LD Yapısal Veri (Schema)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "Gazitransport",
    "alternateName": "Gazi Taşımacılık",
    "url": "https://gazitransport.com",
    "logo": "https://gazitransport.com/favicon.ico",
    "telephone": "+905368310636",
    "email": "info@gazicargo.com",
    "description": "Türkiye'den Avrupa ülkelerine ve İngiltere'ye ticari yük, gıda, mobilya ve ev eşyası (zati eşya) uluslararası taşımacılık ve gümrükleme hizmetleri.",
    "areaServed": [
      { "@type": "Country", "name": "Turkey" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "Belgium" },
      { "@type": "Country", "name": "Austria" }
    ],
    "serviceType": [
      "Uluslararası Zati Eşya Taşımacılığı",
      "Ticari Parsiyel ve Komple Taşımacılık",
      "Gıda Kargosu Lojistiği",
      "Mobilya Taşımacılığı",
      "Gümrükleme Hizmetleri"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON-stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

function JSON-stringify(obj: any) {
  return JSON.stringify(obj);
}