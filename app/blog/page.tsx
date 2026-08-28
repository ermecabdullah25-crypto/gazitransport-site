'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, User, Clock, Shield, Truck, Calculator } from 'lucide-react';

export const BLOG_POSTS = [
  {
    slug: "turkiyeden-ingiltereye-zati-esya-tasima-rehberi",
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (2026 Gümrük Kuralları)",
    excerpt: "İngiltere'ye yerleşirken ev eşyalarınızı vergisiz (TOR1 muafiyeti) nasıl taşırsınız? GaziTransport gümrük uzmanlarından adım adım rehber.",
    category: "Zati Eşya",
    date: "24 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    slug: "avrupa-parsiyel-tasimacilikta-m3-hacim-hesaplama",
    title: "Avrupa Parsiyel Taşımacılıkta m³ Hacim Hesaplama Neden Önemlidir?",
    excerpt: "Lojistikte desi ve m³ hesabı navlun fiyatını doğrudan etkiler. GaziTransport Gönderi Hesaplama aracı ile sürpriz maliyetleri engelleyin.",
    category: "Ticari Lojistik",
    date: "20 Ağustos 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800"
  },
  {
    slug: "inegol-mobilyalarinin-avrupaya-guvenli-nakliyesi",
    title: "İnegöl Mobilyalarının Avrupa'ya Çizilmeden Nakliyesi Nasıl Yapılır?",
    excerpt: "Ahşap ve hassas mobilyaların uluslararası yollarda hasarsız taşınması için uyguladığımız 5 katmanlı paketleme standartları.",
    category: "Mobilya Taşımacılığı",
    date: "15 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800"
  },
  {
    slug: "turk-gida-urunlerinin-avrupaya-frigo-lojistigi",
    title: "Türk Gıda Ürünlerinin Avrupa'ya Frigo Lojistiği ve Sağlık Sertifikaları",
    excerpt: "Kuru gıda ve taze ikramlıkların tazeliğini koruyarak AB standartlarında gümrükten geçirilmesi sürecini inceliyoruz.",
    category: "Gıda Lojistiği",
    date: "11 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800"
  },
  {
    slug: "yapi-dekorasyon-malzemelerinde-kirilmaz-tasima",
    title: "Yapı & Dekorasyon Malzemelerinde Kırılmaz Taşıma Çözümleri",
    excerpt: "Seramik, tabela, cam ve aydınlatma armatürlerinin şantiye adreslerine hassas ve sigortalı nakliye detayları.",
    category: "Yapı Lojistiği",
    date: "08 Ağustos 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
  },
  {
    slug: "multimodal-tasimacilik-ile-karbon-salinimi-ve-maliyet-tasarrufu",
    title: "Multimodal Taşımacılık ile %25 Maliyet Tasarrufu ve Çevreci Rotalar",
    excerpt: "Kara, Ro-Ro ve Demiryolu hatlarının entegrasyonu ile GaziTransport nasıl çevreci ve bütçe dostu lojistik sunuyor?",
    category: "Multimodal",
    date: "03 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800"
  },
  {
    slug: "cmr-sigortasi-nedir-uluslararasi-nakliyede-yuk-emniyeti",
    title: "CMR Sigortası Nedir? Uluslararası Nakliyede Yük Emniyeti",
    excerpt: "GaziTransport filosu ile taşınan tüm ticari ve bireysel yüklerin yasal CMR konvansiyonu altındaki güvenceleri.",
    category: "Lojistik Güvenlik",
    date: "28 Temmuz 2026",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
  },
  {
    slug: "gazitransport-ile-almanya-ve-hollandaya-parsiyel-seferler",
    title: "GaziTransport ile Almanya ve Hollanda'ya Düzenli Parsiyel Seferler",
    excerpt: "Haftalık sabit çıkışlı tırlarımızla Berlin, Frankfurt, Amsterdam ve Rotterdam hatlarında hızlı ve güvenilir teslimat.",
    category: "Hat Bilgisi",
    date: "22 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800"
  }
];

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HEADER HERO */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2 block">GaziTransport Bilgi Merkezi</span>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">Lojistik & Gümrük Blogu</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Türkiye, Avrupa ve İngiltere arasındaki nakliye süreçleri, gümrük mevzuatları ve yük hesaplama rehberleri.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-orange-600 transition leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs hover:text-orange-700 transition"
                >
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}