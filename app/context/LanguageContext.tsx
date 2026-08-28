'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Header & Genel
    topBar: "Türkiye ↔ Avrupa & İngiltere Lojistik Hattı",
    support: "Kesintisiz Müşteri Desteği",
    navHome: "Ana Sayfa",
    navServices: "Hizmetlerimiz",
    navProcess: "Operasyon Süreci",
    navCalc: "Gönderi Hesaplama",
    navBlog: "Blog",
    navContact: "İletişim",
    
    // Hero & Anasayfa
    heroBadge: "Gazitransport Uluslararası Taşımacılık Ağı",
    heroTitle1: "Türkiye’den Avrupa & İngiltere’ye",
    heroTitle2: "Güvencesiyle Lojistik",
    heroDesc: "Gazitransport; ticari yüklerinizden gıda kargolarınıza, özel mobilya taşımacılığından zati ev eşyalarınıza kadar tüm sevkiyat sürecini uçtan uca yönetir.",
    calcBtn: "Anında m³ & Gönderi Hesapla",
    servicesTitle: "Uluslararası Lojistik Çözümlerimiz",
    servicesBadge: "GAZITRANSPORT HİZMET PORTFÖYÜ",
    processTitle: "İşletmeler İçin Uçtan Uca Operasyon",
    processBadge: "GAZITRANSPORT İŞ MODELİ",
    details: "Hizmet Detayı",
    quickLinks: "Hızlı Bağlantılar",
    rights: "Tüm hakları saklıdır.",
  },
  en: {
    // Header & General
    topBar: "Turkey ↔ Europe & UK Logistics Network",
    support: "24/7 Customer Support",
    navHome: "Home",
    navServices: "Services",
    navProcess: "Process",
    navCalc: "Freight Calculator",
    navBlog: "Blog",
    navContact: "Contact",
    
    // Hero & Home
    heroBadge: "Gazitransport International Logistics Network",
    heroTitle1: "Logistics from Turkey to Europe & UK",
    heroTitle2: "Assurance",
    heroDesc: "Gazitransport manages your entire shipment process from commercial cargo to food logistics, furniture transport to personal household goods.",
    calcBtn: "Calculate Volume & Shipping Instantly",
    servicesTitle: "Our International Logistics Solutions",
    servicesBadge: "GAZITRANSPORT SERVICE PORTFOLIO",
    processTitle: "End-to-End Operational Process",
    processBadge: "GAZITRANSPORT BUSINESS MODEL",
    details: "Details",
    quickLinks: "Quick Links",
    rights: "All rights reserved.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('tr');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage, LanguageProvider içinde kullanılmalıdır.');
  }
  return context;
}