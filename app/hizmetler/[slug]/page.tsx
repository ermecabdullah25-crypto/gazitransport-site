'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Truck, 
  Home as HomeIcon, 
  Armchair, 
  Apple, 
  Building2, 
  Ship, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  Phone, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const SERVICES_DATA: Record<string, {
  title: string;
  badge: string;
  heroImg: string;
  summary: string;
  features: string[];
  content: string[];
  specifications: { label: string; value: string }[];
}> = {
  "ticari-parsiyel-tasimacilik": {
    title: "Gazitransport Ticari & Parsiyel Taşımacılık",
    badge: "Ticari Lojistik",
    heroImg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    summary: "Türkiye'den Avrupa ve İngiltere'ye parsiyel (LTL) ve komple (FTL) yükleriniz için kapıdan kapıya güvenli nakliye çözümleri.",
    features: [
      "Düzenli haftalık parsiyel seferler",
      "Gümrükleme ve T1 transit belgesi desteği",
      "CMR Sigortası kapsamında tam koruma",
      "7/24 GPS ile araç ve yük takibi"
    ],
    content: [
      "GaziTransport, Türkiye imalat sektörünün ihracat potansiyelini Avrupa ve İngiltere pazarına taşır. Parsiyel (parça yük) taşımacılığında en yüksek hacim verimliliğini sunarak nakliye maliyetlerinizi minimuma indiriyoruz.",
      "Almanya, Hollanda, Belçika, Fransa ve İngiltere başta olmak üzere geniş acente ağımız sayesinde ürünleriniz depolarımızda tasnif edilir ve doğrudan alıcının adresine teslim edilir."
    ],
    specifications: [
      { label: "Transit Süre", value: "5 - 8 İş Günü" },
      { label: "Taşıma Tipi", value: "LTL (Parsiyel) / FTL (Komple)" },
      { label: "Güzergah", value: "TR ↔ AB & UK" },
      { label: "Teminat", value: "CMR Sigortalı" }
    ]
  },
  "evden-eve-zati-esya": {
    title: "Gazitransport Evden Eve & Zati Eşya Taşımacılığı",
    badge: "Zati Eşya",
    heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    summary: "Uluslararası ev taşıma ve zati eşya nakliyesinde havalı ambalajlama, gümrükleme ve kapıya kurulum hizmeti.",
    features: [
      "Marangozlu ve ambalajlı söküm-montaj",
      "Zati eşya gümrük muafiyeti danışmanlığı",
      "Asansörlü yükleme ve boşaltma",
      "Özel eşya kolileme ve etiketleme"
    ],
    content: [
      "Yurtdışına taşınma sürecinde yaşadığınız stresi sıfıra indiriyoruz. GaziTransport uzman ekipleri evinizdeki tüm mobilya ve zati eşyaları uluslararası standartlara uygun darbe emici baloncuklu naylonlar ile paketler.",
      "Gümrük mevzuatına uygun envanter listeleri hazırlayarak vergisiz (zati eşya statüsünde) geçiş işlemlerinizi eksiksiz yönetiyoruz."
    ],
    specifications: [
      { label: "Paketleme", value: "5 Katmanlı Koruma" },
      { label: "Gümrük", value: "Zati Eşya Danışmanlığı" },
      { label: "Teslimat", value: "Anahtar Teslim Kapı İçi" },
      { label: "Hizmet Alanı", value: "Tüm Avrupa & İngiltere" }
    ]
  },
  "mobilya-tasimaciligi": {
    title: "Gazitransport Mobilya Taşımacılığı",
    badge: "Hassas Taşıma",
    heroImg: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    summary: "İnegöl, Kayseri ve İstanbul üretimi mobilyaların çizilmeden ve kırılmadan yurtdışı adreslerine güvenle ulaştırılması.",
    features: [
      "Köşe koruyuculu ve ahşap kafesli paketleme",
      "Büyük hacimli koltuk ve gardırop lojistiği",
      "Mağaza veya son tüketici adrese teslimat",
      "Yüksek m³ avantajlı navlun fiyatları"
    ],
    content: [
      "Mobilya taşımacılığı yüksek hassasiyet gerektirir. GaziTransport, mobilya üreticilerinin ve bireysel alıcıların İnegöl veya diğer üretim merkezlerinden aldığı ürünleri özel kargo kasalı araçlarıyla taşır.",
      "Ürünleriniz araç içinde sabitlenerek çizilme, kırılma ve deformasyon riskine karşı sigortalı olarak sevk edilir."
    ],
    specifications: [
      { label: "Koruma", value: "Ahşap Kasa & Köşe Kartonu" },
      { label: "Maksimum Hacim", value: "90 m³ Mega Tır" },
      { label: "Kapsam", value: "Bireysel / Toptan İhracat" },
      { label: "Takip", value: "Online Yük Takibi" }
    ]
  },
  "gida-kargosu-lojistigi": {
    title: "Gazitransport Gıda Kargosu & Lojistiği",
    badge: "Soğuk Zincir / Kuru Gıda",
    heroImg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    summary: "Türk gıda ürünlerinin, kuru gıdaların ve paketli ikramlıkların Avrupa standartlarında iklimlendirmeli nakliyesi.",
    features: [
      "Derece kontrollü Frigo araç seçeneği",
      "Hijyenik ve sertifikalı taşıma alanları",
      "Gıda ihracatı sağlık sertifikası takibi",
      "Avrupa etnik market ağına düzenli dağıtım"
    ],
    content: [
      "Gıda lojistiğinde zamanlama ve tazelik hayati önem taşır. GaziTransport, kuru gıda, bakliyat, zeytinyağı, unlu mamuller ve paketli gıda ürünlerinizi uluslararası gıda güvenliği standartlarına uygun olarak taşır.",
      "Gümrüklerdeki bitki sağlığı ve gıda denetim süreçlerini uzman ekibimizle hızlıca tamamlayarak ürün raf ömrünü koruyoruz."
    ],
    specifications: [
      { label: "Araç Tipi", value: "Frigo / Isı Kontrollü" },
      { label: "Sertifikasyon", value: "HACCP Uygunluk" },
      { label: "Hedef", value: "Market & Depo Teslimat" },
      { label: "Süre", value: "Ekspres 4-6 Gün" }
    ]
  },
  "dekorasyon-yapi-urunleri": {
    title: "Gazitransport Dekorasyon & Yapı Ürünleri Taşımacılığı",
    badge: "Hassas Malzeme",
    heroImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    summary: "Seramik, tabela, aydınlatma, mermer ve dekoratif yapı elemanlarının yüksek güvenlikli lojistiği.",
    features: [
      "Paletli ve strafor destekli sabitleme",
      "Kırılabilir malzemeler için sigortalı taşıma",
      "Şantiye ve proje bazlı adrese teslimat",
      "Ağır tonajlı yapı ürünleri nakliyesi"
    ],
    content: [
      "Mimar ve müteahhitlerin Avrupa projelerindeki dekorasyon ve yapı malzemeleri ihtiyacını GaziTransport çözmektedir. Cam, seramik, tabela ve aydınlatma armatürleri darbe emici özel paletleme sistemleriyle taşınır.",
      "Şantiye teslimatlarında vinçli ve lifli araç organizasyonu sağlayarak indirme kolaylığı sunuyoruz."
    ],
    specifications: [
      { label: "Sabitleme", value: "Spanset & Palet Kilidi" },
      { label: "Teslim Tipi", value: "Şantiye / Mağaza Teslim" },
      { label: "Gümrük", value: "ATR / EUR.1 Düzenleme" },
      { label: "Sigorta", value: "All-Risk Kasko" }
    ]
  },
  "multimodal-tasimacilik": {
    title: "Gazitransport Multimodal Taşımacılık",
    badge: "Karma Lojistik",
    heroImg: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    summary: "Kara, deniz ve demiryolu hatlarını birleştirerek optimum maliyet ve çevreci lojistik rotaları oluşturuyoruz.",
    features: [
      "Ro-Ro deniz hattı + Karayolu kombinasyonu",
      "Düşük karbon salınımlı çevreci taşıma",
      "Ekonomik navlun avantajları",
      "Tek konşimento ile uçtan uca takip"
    ],
    content: [
      "En verimli rotayı oluşturmak için taşıma modlarını birleştiriyoruz. GaziTransport Multimodal çözümleri, yükünüzü Türkiye limanlarından Ro-Ro gemileriyle İtalya veya Fransa'ya geçirip, ardından tren veya karayolu ile İngiltere ve Kuzey Avrupa'ya ulaştırır.",
      "Bu yöntem hem navlun bütçenizde %25'e varan tasarruf sağlar hem de sürdürülebilir lojistik destekler."
    ],
    specifications: [
      { label: "Kombinasyon", value: "Kara + Deniz (Ro-Ro) + Tren" },
      { label: "Avantaj", value: "%25 Ekonomik Fiyat" },
      { label: "Karbon Ayak İzi", value: "%40 Düşük Salınım" },
      { label: "Kapsam", value: "Tüm AB & İngiltere" }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">Hizmet Bulunamadı</h1>
          <Link href="/" className="text-orange-600 underline mt-4 inline-block font-semibold">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* BREADCRUMB NAV */}
      <div className="bg-slate-900 text-slate-300 py-4 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
          <Link href="/" className="hover:text-white">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-400">Hizmetlerimiz</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-orange-500 font-semibold">{service.badge}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <img src={service.heroImg} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">{service.title}</h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">{service.summary}</p>
          </div>
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
            <h3 className="text-lg font-bold mb-2">Hemen Fiyat Teklifi Alın</h3>
            <p className="text-xs text-slate-300 mb-6">Yükünüzün m³ hacmini hesaplayarak dakikalar içinde fiyat alın.</p>
            <Link 
              href="/gonderi-hesaplama"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition mb-3 shadow-lg"
            >
              <Calculator className="w-4 h-4" /> Gönderi Hesaplama
            </Link>
            <a 
              href="https://wa.me/905368310636"
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4" /> WhatsApp Danışma
            </a>
          </div>
        </div>
      </section>

      {/* İÇERİK BÖLÜMÜ */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Hizmet Detayları</h2>
            {service.content.map((p, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed mb-4">{p}</p>
            ))}
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              GaziTransport Öne Çıkan Avantajları
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEKNİK SPESİFİKASYON TABLOSU */}
        <div className="lg:col-span-4">
          <div className="bg-slate-900 text-white p-6 rounded-2xl sticky top-28">
            <h3 className="text-lg font-bold mb-4 border-b border-slate-800 pb-3 text-orange-500">Operasyonel Parametreler</h3>
            <div className="space-y-4">
              {service.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs border-b border-slate-800/60 pb-2">
                  <span className="text-slate-400">{spec.label}:</span>
                  <span className="font-semibold text-slate-200">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800 text-center">
              <p className="text-[11px] text-slate-400 mb-3">Sorularınız için lojistik uzmanlarımızla görüşebilirsiniz.</p>
              <a href="tel:+905368310636" className="text-xs font-bold text-orange-400 hover:underline">
                +90 536 831 06 36
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}