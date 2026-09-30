'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';

export const BLOG_POSTS = [
  {
    slug: "turkiyeden-ingiltereye-zati-esya-tasima-rehberi",
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (TOR1 Gümrük Muafiyeti)",
    excerpt: "İngiltere'ye yerleşirken ev eşyalarınızı gümrük vergisinden muaf (TOR1 başvurusu) taşıma adımları ve gümrükleme evrak listesi.",
    category: "Zati Eşya",
    date: "24 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    slug: "turkiyeden-almanyaya-ev-esyasi-tasimada-zoll-gumruk-sürecleri",
    title: "Türkiye'den Almanya'ya Ev Eşyası Taşımada Zoll Gümrük Prosedürleri",
    excerpt: "Almanya gümrük idaresi (Zoll) kuralları çerçevesinde ev eşyası ve kişisel yüklerin vergisiz ithalat şartları, Form 0350 beyanı ve kapıdan kapıya teslimat.",
    category: "Gümrük & Zati Eşya",
    date: "22 Ağustos 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800"
  },
  {
    slug: "avrupa-parsiyel-tasimacilikta-m3-hacim-hesaplama",
    title: "Avrupa Parsiyel Taşımacılıkta m³ ve Desi Hacim Hesaplama Rehberi",
    excerpt: "Uluslararası kara yolu nakliyesinde navlun maliyetini belirleyen m³ ve en/boy/yükseklik hesaplama metodolojisi.",
    category: "Ticari Lojistik",
    date: "20 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800"
  },
  {
    slug: "inegol-mobilyalarinin-avrupaya-guvenli-nakliyesi",
    title: "İnegöl Mobilyalarının Avrupa'ya Hasarsız Nakliyesi ve Ambalajlama",
    excerpt: "Ahşap, döşeme ve hassas mobilyaların uluslararası sevkiyatında uyguladığımız 5 katmanlı koruyucu ambalajlama standartları.",
    category: "Mobilya Taşımacılığı",
    date: "15 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800"
  },
  {
    slug: "turk-gida-urunlerinin-avrupaya-frigo-lojistigi",
    title: "Türk Gıda Ürünlerinin Avrupa'ya Frigo Lojistiği ve Sağlık Sertifikaları",
    excerpt: "Kuru gıda, ikramlık ve ısı kontrollü gıdaların AB standartlarında gümrük belgelendirmeleri ve iklimlendirmeli tır sevkiyatı.",
    category: "Gıda Lojistiği",
    date: "11 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800"
  },
  {
    slug: "yapi-dekorasyon-malzemelerinde-kirilmaz-tasima",
    title: "Yapı, Seramik ve Dekorasyon Malzemelerinde Kırılmaz Nakliye Çözümleri",
    excerpt: "Tabela, aydınlatma, mermer ve hassas şantiye malzemelerinin paletli ve darbe emici kasalama ile sevkiyatı.",
    category: "Yapı Lojistiği",
    date: "08 Ağustos 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
  },
  {
    slug: "multimodal-tasimacilik-ile-karbon-salinimi-ve-maliyet-tasarrufu",
    title: "Multimodal Taşımacılık: Ro-Ro ve Karayolu İle %25 Maliyet Avantajı",
    excerpt: "Deniz yolu (Ro-Ro) ve kara yolu entegrasyonu ile hem karbon ayak izini azaltan hem de nakliye bütçesini düşüren lojistik rotaları.",
    category: "Multimodal",
    date: "03 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800"
  },
  {
    slug: "cmr-sigortasi-nedir-uluslararasi-nakliyede-yuk-emniyeti",
    title: "CMR Sigortası Nedir? Uluslararası Taşımacılıkta Yük ve Eşya Güvencesi",
    excerpt: "Uluslararası Nakliyat Taşıyıcı Sorumluluk Sigortası (CMR Konvansiyonu) hakları, poliçe kapsamı ve hasar güvencesi.",
    category: "Lojistik Güvenlik",
    date: "28 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
  },
  {
    slug: "gazitransport-ile-almanya-ve-hollandaya-parsiyel-seferler",
    title: "Almanya, Hollanda ve Belçika Düzenli Parsiyel Tır Hatları",
    excerpt: "Haftalık sabit çıkışlı tırlarımızla Rotterdam, Amsterdam, Frankfurt, Köln ve Brüksel teslimat hatlarımız.",
    category: "Hat Bilgisi",
    date: "22 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800"
  },
  {
    slug: "turkiyeden-fransaya-ve-isvicreye-nakliye-rehberi",
    title: "Türkiye'den Fransa ve İsviçre'ye Nakliye: Gümrük ve Teslimat Süreçleri",
    excerpt: "AB dışı İsviçre gümrük geçişleri ve Fransa metropol bölgelerine kapıdan kapıya eşya/yük taşıma detayları.",
    category: "Avrupa Rotaları",
    date: "18 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800"
  },
  {
    slug: "uluslararasi-evden-eve-tasimada-ambalajlama-teknikleri",
    title: "Uluslararası Evden Eve Taşımada Kullanılan Profesyonel Ambalaj Teknikleri",
    excerpt: "Havalı naylon, ahşap sandıklama ve elbise dolaplı kutular ile yurt dışı nakliyede eşyaların korunması.",
    category: "Paketleme Rehberi",
    date: "10 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
  },
  {
    slug: "e-ticaret-ve-mikro-ihracat-lojistigi-avrupayi-hedefleyin",
    title: "Türkiye'den Avrupa'ya Mikro İhracat ve B2B ETGB Lojistiği",
    excerpt: "ETGB (Elektronik Ticaret Gümrük Beyannamesi) ile vergisiz ve hızlı e-ticaret kargo gönderim rehberi.",
    category: "E-Ticaret & İhracat",
    date: "02 Temmuz 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800"
  }
];

export default function BlogListPage() {
  // Yapay zeka motorları için Yapısal Veri (ItemList Schema)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GaziTransport Lojistik, Zati Eşya ve Gümrük Rehberi Blogu",
    "description": "Türkiye, Avrupa ve İngiltere hatlarında nakliye, gümrükleme, TOR1 muafiyeti ve hacim hesaplama rehberleri.",
    "itemListElement": BLOG_POSTS.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://gazitransport.com/blog/${post.slug}`,
      "name": post.title
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* SCHEMA ENTEGRASYONU */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 text-xs text-orange-400 font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Uluslararası Taşımacılık & Gümrük Bilgi Bankası</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">
            GaziTransport <span className="text-orange-500">Lojistik Blogu</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Türkiye'den Avrupa ülkelerine ve İngiltere'ye ev eşyası taşıma, gümrük muafiyetleri (TOR1 / Zoll), parsiyel hesaplamalar ve lojistik rehberleri.
          </p>
        </div>
      </section>

      {/* BLOG LIST GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-500/50 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1 font-medium"><Calendar className="w-3.5 h-3.5 text-orange-500" /> {post.date}</span>
                    <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5 text-orange-500" /> {post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-900 text-base sm:text-lg mb-3 group-hover:text-orange-600 transition leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs sm:text-sm hover:text-orange-700 transition"
                >
                  <span>Rehberi Oku</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}