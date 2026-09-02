import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gazitransport | Türkiye - Avrupa & İngiltere Lojistik ve Taşımacılık",
  description:
    "Türkiye'den Avrupa ve İngiltere'ye ticari yük, gıda kargosu ve zati ev eşyası taşımacılığı. Hızlı ve güvenli lojistik çözümleri için hemen fiyat alın.",
  keywords: [
    "lojistik",
    "avrupa taşımacılık",
    "ingiltere kargo",
    "eşya taşıma",
    "gazitransport",
  ],
  // İKONU BURADA TANIMLIYORUZ:
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}