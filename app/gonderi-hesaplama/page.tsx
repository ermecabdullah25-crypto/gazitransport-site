"use client";

import React, { useState } from "react";
import { Search, Plus, Minus, Trash2, MessageCircle, Truck, MapPin, User, Globe, Mail, Phone } from "lucide-react";

interface ItemData {
  id: string;
  name: string;
  category: string;
  volume?: number;
  weight?: number;
}

const ITEMS_DATABASE: ItemData[] = [
  // SALON
  { id: "s1", name: "L KOLTUK (BÜYÜK)", category: "SALON", volume: 3.0 },
  { id: "s2", name: "TEKLİ KOLTUK", category: "SALON", volume: 0.5 },
  { id: "s3", name: "KİTAPLIK (BÜYÜK)", category: "SALON", volume: 1.0 },
  { id: "s4", name: "3'LÜ KOLTUK", category: "SALON", volume: 1.8 },
  { id: "s5", name: "TV ÜNİTESİ (ALT)", category: "SALON", volume: 0.5 },
  { id: "s6", name: "KİTAPLIK (AHŞAP)", category: "SALON", volume: 0.5 },
  { id: "s7", name: "TV ÜNİTESİ (KAPLI)", category: "SALON", volume: 0.8 },
  { id: "s8", name: "L KOLTUK (ORTA)", category: "SALON", volume: 2.2 },
  { id: "s9", name: "2'Lİ KOLTUK", category: "SALON", volume: 1.2 },
  { id: "s10", name: "PIYANO (DUVAR TİPİ)", category: "SALON", volume: 1.0 },
  { id: "s11", name: "PUF (YUVARLAK)", category: "SALON", volume: 0.2 },
  { id: "s12", name: "YAN SEHPA", category: "SALON", volume: 0.1 },
  { id: "s13", name: "ORTA SEHPA (ORTA)", category: "SALON", volume: 0.3 },
  { id: "s14", name: "ORTA SEHPA (KÜÇÜK)", category: "SALON", volume: 0.2 },
  { id: "s15", name: "ZİGON SEHPA", category: "SALON", volume: 0.15 },
  { id: "s16", name: "ORTA SEHPA (BÜYÜK)", category: "SALON", volume: 0.5 },
  { id: "s17", name: "LAMBADER", category: "SALON", volume: 0.1 },
  { id: "s18", name: "PİYANO (KUYRUKLU)", category: "SALON", volume: 3.0 },
  { id: "s19", name: "ABAJUR (MASA TİPİ)", category: "SALON", volume: 0.05 },
  { id: "s20", name: "PUF (BENÇ TİPİ)", category: "SALON", volume: 0.3 },
  { id: "s21", name: "AVİZE (1-2)", category: "SALON", volume: 0.05 },
  { id: "s22", name: "AYNA (KÜÇÜK)", category: "SALON", volume: 0.05 },
  { id: "s23", name: "AVİZE (3-5)", category: "SALON", volume: 0.1 },
  { id: "s24", name: "AYNA (BÜYÜK)", category: "SALON", volume: 0.15 },
  { id: "s25", name: "SES SİSTEMİ", category: "SALON", volume: 0.1 },
  { id: "s26", name: "TV", category: "SALON", volume: 0.1 },
  { id: "s27", name: "TV (55\" ÜZERİ)", category: "SALON", volume: 0.2 },
  { id: "s28", name: "4'LÜ KOLTUK", category: "SALON", volume: 2.2 },

  // YEMEK ODASI
  { id: "yo1", name: "YEMEK MASASI (6-8 KİŞİLİK)", category: "YEMEK ODASI", volume: 1.5 },
  { id: "yo2", name: "YEMEK MASASI (4-6 KİŞİLİK)", category: "YEMEK ODASI", volume: 1.0 },
  { id: "yo3", name: "SANDALYE (KOLLU)", category: "YEMEK ODASI", volume: 0.3 },
  { id: "yo4", name: "SANDALYE (KOLSUZ)", category: "YEMEK ODASI", volume: 0.2 },
  { id: "yo5", name: "VİTRİN (2 KAPILI)", category: "YEMEK ODASI", volume: 1.2 },
  { id: "yo6", name: "VİTRİN (1 KAPILI)", category: "YEMEK ODASI", volume: 0.8 },
  { id: "yo7", name: "KONSOL (UZUN)", category: "YEMEK ODASI", volume: 1.0 },
  { id: "yo8", name: "KONSOL (KISA)", category: "YEMEK ODASI", volume: 0.8 },
  { id: "yo9", name: "HALI (KISA)", category: "YEMEK ODASI", volume: 0.1 },
  { id: "yo10", name: "HALI (UZUN)", category: "YEMEK ODASI", volume: 0.2 },
  { id: "yo11", name: "TABLO (KÜÇÜK)", category: "YEMEK ODASI", volume: 0.15 },
  { id: "yo12", name: "TABLO (ORTA)", category: "YEMEK ODASI", volume: 0.25 },
  { id: "yo13", name: "TABLO (BÜYÜK)", category: "YEMEK ODASI", volume: 0.5 },

  // YATAK ODASI
  { id: "yt1", name: "YATAK (ÇİFT KİŞİLİK)", category: "YATAK ODASI", volume: 1.0 },
  { id: "yt2", name: "YATAK (TEK KİŞİLİK)", category: "YATAK ODASI", volume: 0.6 },
  { id: "yt3", name: "BAZA (TEK KİŞİLİK)", category: "YATAK ODASI", volume: 1.1 },
  { id: "yt4", name: "BAZA (ÇİFT KİŞİLİK)", category: "YATAK ODASI", volume: 1.4 },
  { id: "yt5", name: "BAŞLIK (TEK KİŞİLİK)", category: "YATAK ODASI", volume: 0.12 },
  { id: "yt6", name: "BAŞLIK (ÇİFT KİŞİLİK)", category: "YATAK ODASI", volume: 0.20 },
  { id: "yt7", name: "GARDİROP (TAÇLI 2 KAPI)", category: "YATAK ODASI", volume: 1.8 },
  { id: "yt8", name: "GARDİROP (2-3-4 KAPI)", category: "YATAK ODASI", volume: 1.5 },
  { id: "yt9", name: "ŞİFONYER (3 ÇEKMECE)", category: "YATAK ODASI", volume: 0.4 },
  { id: "yt10", name: "ŞİFONYER (5 ÇEKMECE)", category: "YATAK ODASI", volume: 0.9 },
  { id: "yt11", name: "KOMODİN", category: "YATAK ODASI", volume: 0.2 },
  { id: "yt12", name: "MAKYAJ MASASI (BÜYÜK)", category: "YATAK ODASI", volume: 1.0 },
  { id: "yt13", name: "MAKYAJ MASASI (KÜÇÜK)", category: "YATAK ODASI", volume: 0.7 },
  { id: "yt14", name: "ÜTÜ MASASI", category: "YATAK ODASI", volume: 0.2 },
  { id: "yt15", name: "ELEKTRİK SÜPÜRGESİ", category: "YATAK ODASI", volume: 0.1 },
  { id: "yt16", name: "ÇİFT KİŞİLİK YATAK-BAZA-BAŞLIK", category: "YATAK ODASI", volume: 2.4 },

  // ÇOCUK-GENÇ ODASI (Eklendi)
  { id: "cg1", name: "ARABALI YATAK", category: "ÇOCUK-GENÇ ODASI", volume: 1.70 },
  { id: "cg2", name: "MONTESSORİ YATAK", category: "ÇOCUK-GENÇ ODASI", volume: 1.50 },
  { id: "cg3", name: "TEK KİŞİLİK YATAK-BAZA-BAŞLIK", category: "ÇOCUK-GENÇ ODASI", volume: 1.50 },
  { id: "cg4", name: "ÇALIŞMA MASASI", category: "ÇOCUK-GENÇ ODASI", volume: 0.70 },
  { id: "cg5", name: "OFİS SANDALYESİ", category: "ÇOCUK-GENÇ ODASI", volume: 0.40 },
  { id: "cg6", name: "BİLGİSAYAR (TAKIM)", category: "ÇOCUK-GENÇ ODASI", volume: 0.30 },
  { id: "cg7", name: "BEŞİK", category: "ÇOCUK-GENÇ ODASI", volume: 0.50 },
  { id: "cg8", name: "MONİTÖR (17-27)", category: "ÇOCUK-GENÇ ODASI", volume: 0.10 },
  { id: "cg9", name: "BİLGİSAYAR KASASI", category: "ÇOCUK-GENÇ ODASI", volume: 0.10 },
  { id: "cg10", name: "AKÜLÜ ÇOCUK ARABASI", category: "ÇOCUK-GENÇ ODASI", volume: 0.30 },
  { id: "cg11", name: "BEBEK ARABASI", category: "ÇOCUK-GENÇ ODASI", volume: 0.50 },
  { id: "cg12", name: "BEBEK ARAÇ KOLTUĞU", category: "ÇOCUK-GENÇ ODASI", volume: 0.20 },
  { id: "cg13", name: "OYUNCAK", category: "ÇOCUK-GENÇ ODASI" },

  // MUTFAK
  { id: "m1", name: "BUZDOLABI (BÜYÜK ÇİFT KAPILI)", category: "MUTFAK", volume: 1.5 },
  { id: "m2", name: "BUZDOLABI (STANDART)", category: "MUTFAK", volume: 1.1 },
  { id: "m3", name: "BULAŞIK MAKİNESİ", category: "MUTFAK", volume: 0.5 },
  { id: "m4", name: "FIRIN", category: "MUTFAK", volume: 0.5 },
  { id: "m5", name: "MİKRODALGA FIRIN", category: "MUTFAK", volume: 0.1 },
  { id: "m6", name: "MUTFAK MASASI", category: "MUTFAK", volume: 0.8 },
  { id: "m7", name: "ÇAYCI", category: "MUTFAK", volume: 0.02 },
  { id: "m8", name: "TOST MAKİNESİ", category: "MUTFAK", volume: 0.03 },
  { id: "m9", name: "KAHVE MAKİNESİ", category: "MUTFAK", volume: 0.06 },
  { id: "m10", name: "SU SEBİLİ", category: "MUTFAK", volume: 0.3 },
  { id: "m11", name: "MUTFAK EŞYASI", category: "MUTFAK" },

  // MİSAFİR ODASI
  { id: "mo1", name: "ELBİSE DOLABI (TEKLİ UZUN)", category: "MİSAFİR ODASI", volume: 1.0 },
  { id: "mo2", name: "ELBİSE DOLABI (TEKLİ KISA)", category: "MİSAFİR ODASI", volume: 0.7 },
  { id: "mo3", name: "MİSAFİR YATAĞI", category: "MİSAFİR ODASI", volume: 0.6 },
  { id: "mo4", name: "ÇEKYAT", category: "MİSAFİR ODASI", volume: 1.2 },
  { id: "mo5", name: "KATLANIR YATAK", category: "MİSAFİR ODASI", volume: 0.4 },

  // BANYO (Eklendi)
  { id: "b1", name: "ÇAMAŞIR MAKİNESİ", category: "BANYO", volume: 0.50 },
  { id: "b2", name: "KURUTMA MAKİNESİ", category: "BANYO", volume: 0.50 },
  { id: "b3", name: "ÇAMAŞIR SEPETİ", category: "BANYO", volume: 0.10 },
  { id: "b4", name: "KLOZET", category: "BANYO", volume: 0.12 },
  { id: "b5", name: "DUŞAKABİN", category: "BANYO" },
  { id: "b6", name: "BANYO MALZEMESİ", category: "BANYO" },

  // HOL
  { id: "h1", name: "AYAKKABILIK (3-4 RAF)", category: "HOL", volume: 0.3 },
  { id: "h2", name: "PORTMANTO (KÜÇÜK)", category: "HOL", volume: 1.0 },
  { id: "h3", name: "PORTMANTO (BÜYÜK)", category: "HOL", volume: 1.5 },
  { id: "h4", name: "DRESUAR (KÜÇÜK)", category: "HOL", volume: 0.4 },
  { id: "h5", name: "DRESUAR (BÜYÜK)", category: "HOL", volume: 0.6 },

  // BALKON-BAHÇE
  { id: "bb1", name: "BALKON MASASI", category: "BALKON-BAHÇE", volume: 0.8 },
  { id: "bb2", name: "KARE SEHPA (KÜÇÜK)", category: "BALKON-BAHÇE", volume: 0.15 },
  { id: "bb3", name: "SANDALYE (KATLANIR)", category: "BALKON-BAHÇE", volume: 0.18 },
  { id: "bb4", name: "BAHÇE MASASI", category: "BALKON-BAHÇE", volume: 1.0 },
  { id: "bb5", name: "BAHÇE SANDALYESİ", category: "BALKON-BAHÇE", volume: 0.25 },
  { id: "bb6", name: "ŞEZLONG", category: "BALKON-BAHÇE", volume: 0.4 },
  { id: "bb7", name: "BARBEKÜ", category: "BALKON-BAHÇE", volume: 0.5 },

  // MUHTELİF
  { id: "mt1", name: "BİSİKLET (YETİŞKİN)", category: "MUHTELİF", volume: 0.6 },
  { id: "mt2", name: "BİSİKLET (ÇOCUK)", category: "MUHTELİF", volume: 0.3 },
  { id: "mt3", name: "MİNİ BİSİKLET (ÇOCUK)", category: "MUHTELİF", volume: 0.2 },
  { id: "mt4", name: "GİTAR", category: "MUHTELİF", volume: 0.2 },
  { id: "mt5", name: "BAĞLAMA", category: "MUHTELİF", volume: 0.2 },
  { id: "mt6", name: "KLİMA (DİŞ ÜNİTE)", category: "MUHTELİF", volume: 0.08 },
  { id: "mt7", name: "KLİMA (İÇ ÜNİTE)", category: "MUHTELİF", weight: 100 },
  { id: "mt8", name: "ÇELİK KAPI", category: "MUHTELİF", volume: 1.0, weight: 150 },
  { id: "mt9", name: "VALİZ", category: "MUHTELİF" },
  { id: "mt10", name: "PLASTİK KUTU", category: "MUHTELİF" },
  { id: "mt11", name: "AHŞAP DOLAP", category: "MUHTELİF", volume: 1.0 },
  { id: "mt12", name: "DİĞER", category: "MUHTELİF" },

  // ARAÇ
  { id: "a1", name: "4 X 4 SUV", category: "ARAÇ", volume: 40.0 },
  { id: "a2", name: "OTOMOBİL", category: "ARAÇ", volume: 40.0 },
  { id: "a3", name: "KAMYONET", category: "ARAÇ", volume: 35.0 },
  { id: "a4", name: "MOTOSİKLET", category: "ARAÇ", volume: 10.0 },

  // TİCARİ
  { id: "t1", name: "EURO PALET", category: "TİCARİ", volume: 1.5 },
  { id: "t2", name: "KOLİ (KÜÇÜK)", category: "TİCARİ", volume: 0.05 },
  { id: "t3", name: "KOLİ (ORTA)", category: "TİCARİ", volume: 0.10 },
  { id: "t4", name: "KOLİ (BÜYÜK)", category: "TİCARİ", volume: 0.20 },
  { id: "t5", name: "OFİS MASASI", category: "TİCARİ", volume: 0.80 },
  { id: "t6", name: "OFİS KOLTUĞU", category: "TİCARİ", volume: 0.40 },
  { id: "t7", name: "DOSYA DOLABI", category: "TİCARİ", volume: 1.00 },
  { id: "t8", name: "MAĞAZA RAFİ", category: "TİCARİ", volume: 0.80 },
  { id: "t9", name: "TİCARİ MAKİNE", category: "TİCARİ", volume: 1.00 },
  { id: "t10", name: "DİĞER TİCARİ EŞYA", category: "TİCARİ" },
];

const CATEGORIES = [
  "SALON",
  "YEMEK ODASI",
  "YATAK ODASI",
  "ÇOCUK-GENÇ ODASI",
  "MUTFAK",
  "MİSAFİR ODASI",
  "BANYO",
  "HOL",
  "BALKON-BAHÇE",
  "MUHTELİF",
  "ARAÇ",
  "TİCARİ",
];

export default function GonderiHesaplamaPage() {
  const [selectedCategory, setSelectedCategory] = useState("SALON");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({});
  
  // Müşteri Detayları
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  
  // Alım Adresi
  const [pickupCountry, setPickupCountry] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [pickupZip, setPickupZip] = useState("");

  // Teslim Adresi
  const [deliveryCountry, setDeliveryCountry] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryZip, setDeliveryZip] = useState("");

  const handleAddItem = (id: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const handleClearAll = () => {
    setSelectedItems({});
  };

  // Filtrelenmiş Eşya Listesi
  const filteredItems = ITEMS_DATABASE.filter((item) => {
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return searchQuery ? matchesSearch : matchesCategory;
  });

  // Toplam Hacim ve Ağırlık Hesaplama
  let totalVolume = 0;
  let totalWeight = 0;

  Object.entries(selectedItems).forEach(([id, qty]) => {
    const item = ITEMS_DATABASE.find((i) => i.id === id);
    if (item) {
      if (item.volume) totalVolume += item.volume * qty;
      if (item.weight) totalWeight += item.weight * qty;
    }
  });

  // WhatsApp Mesaj Oluşturucu
  const sendToWhatsApp = () => {
    const phone = "905368310636";
    let messageList = "";

    Object.entries(selectedItems).forEach(([id, qty]) => {
      const item = ITEMS_DATABASE.find((i) => i.id === id);
      if (item) {
        messageList += `• ${item.name} (${qty} Adet)\n`;
      }
    });

    let headerInfo = `Merhaba, nakliye teklifi almak istiyorum:\n\n`;
    if (customerName) headerInfo += `👤 Ad Soyad: ${customerName}\n`;
    if (customerPhone) headerInfo += `📞 Telefon: ${customerPhone}\n`;
    if (customerEmail) headerInfo += `✉️ E-posta: ${customerEmail}\n`;
    
    // Alım Adresi Mesajı
    if (pickupCountry || pickupCity || pickupZip) {
      headerInfo += `📍 ALIM ADRESİ: ${[pickupCountry, pickupCity, pickupZip ? `PK: ${pickupZip}` : ""].filter(Boolean).join(" / ")}\n`;
    }

    // Teslim Adresi Mesajı
    if (deliveryCountry || deliveryCity || deliveryZip) {
      headerInfo += `🏁 TESLİM ADRESİ: ${[deliveryCountry, deliveryCity, deliveryZip ? `PK: ${deliveryZip}` : ""].filter(Boolean).join(" / ")}\n`;
    }

    const text = `${headerInfo}\n📦 Eşya Listesi:\n${messageList}\n📊 Toplam Hacim: ${totalVolume.toFixed(2)} m³${
      totalWeight > 0 ? `\n⚖️ Toplam Ağırlık: ${totalWeight} kg` : ""
    }`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-8">
      <main className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <Truck className="w-8 h-8 text-slate-900" />
          <h1 className="text-2xl font-bold text-slate-900">Eşya & Hacim Hesaplama</h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* SOL ALAN: Kategori & Eşya Seçimi */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              {/* Kategori Butonları */}
              <div className="flex flex-wrap gap-2 mb-6">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSearchQuery("");
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                        isActive
                          ? "bg-slate-950 text-white border-slate-950 shadow-md shadow-slate-900/10 scale-[1.02]"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Arama Barı */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ürün veya kod ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                />
              </div>

              {/* Eşya Listesi */}
              <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
                {filteredItems.length === 0 ? (
                  <p className="text-center py-8 text-slate-400 text-sm">Aranan ürün bulunamadı.</p>
                ) : (
                  filteredItems.map((item) => {
                    const count = selectedItems[item.id] || 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-sm"
                      >
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                          <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                            {item.category}
                            {item.volume ? ` · ${item.volume.toFixed(2)} m³` : ""}
                            {item.weight ? ` · Ağırlık: ${item.weight.toFixed(2)} kg` : ""}
                          </div>
                        </div>

                        {count === 0 ? (
                          <button
                            onClick={() => handleAddItem(item.id)}
                            className="w-9 h-9 rounded-lg bg-slate-950 hover:bg-slate-800 text-white flex items-center justify-center transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="w-7 h-7 rounded-md bg-white hover:bg-slate-200 text-slate-800 flex items-center justify-center transition shadow-sm"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-bold">{count}</span>
                            <button
                              onClick={() => handleAddItem(item.id)}
                              className="w-7 h-7 rounded-md bg-slate-950 hover:bg-slate-800 text-white flex items-center justify-center transition shadow-sm"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* SAĞ ALAN: Özet & WhatsApp Teklif Alanı */}
          <div className="lg:col-span-4 space-y-4">
            {/* Taşıma Bilgileri Formu */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b pb-2 border-slate-100">
                Taşıma Detayları (Opsiyonel)
              </h3>
              
              {/* Ad Soyad */}
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                />
              </div>

              {/* Telefon ve E-posta */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="E-posta"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              {/* ALIM ADRESİ */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600" /> Alım Adresi
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <input
                    type="text"
                    placeholder="Ülke"
                    value={pickupCountry}
                    onChange={(e) => setPickupCountry(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Şehir"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Posta Kodu"
                    value={pickupZip}
                    onChange={(e) => setPickupZip(e.target.value)}
                    className="w-full px-2 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              {/* TESLİM ADRESİ */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Globe className="w-3 h-3 text-blue-600" /> Teslim Adresi
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <input
                    type="text"
                    placeholder="Ülke"
                    value={deliveryCountry}
                    onChange={(e) => setDeliveryCountry(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Şehir"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Posta Kodu"
                    value={deliveryZip}
                    onChange={(e) => setDeliveryZip(e.target.value)}
                    className="w-full px-2 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Özet ve WhatsApp Butonu */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 sticky top-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h2 className="font-bold text-slate-900">Eşya Özetiniz</h2>
                {Object.keys(selectedItems).length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 font-medium"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Temizle
                  </button>
                )}
              </div>

              {/* Seçilen Eşyalar Listesi */}
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1 mb-6">
                {Object.keys(selectedItems).length === 0 ? (
                  <div className="text-center py-8 text-slate-400 text-sm">
                    Henüz eşya eklemediniz.
                  </div>
                ) : (
                  Object.entries(selectedItems).map(([id, qty]) => {
                    const item = ITEMS_DATABASE.find((i) => i.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex justify-between items-center text-sm py-1">
                        <span className="text-slate-700 font-medium">
                          {item.name} <span className="text-xs text-slate-400">x{qty}</span>
                        </span>
                        <span className="text-slate-500 font-semibold">
                          {item.volume ? `${(item.volume * qty).toFixed(2)} m³` : "-"}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Toplam Göstergeleri */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-2 mb-6 border border-slate-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Toplam Hacim:</span>
                  <span className="text-lg font-extrabold text-slate-900">
                    {totalVolume.toFixed(2)} m³
                  </span>
                </div>
                {totalWeight > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Toplam Ağırlık:</span>
                    <span className="text-sm font-bold text-slate-900">{totalWeight} kg</span>
                  </div>
                )}
              </div>

              {/* WhatsApp Butonu */}
              <button
                onClick={sendToWhatsApp}
                disabled={Object.keys(selectedItems).length === 0}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/10"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Teklifi WhatsApp'a Gönder</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}