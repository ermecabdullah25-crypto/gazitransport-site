'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, User, Calculator, Phone, Share2 } from 'lucide-react';

const BLOG_CONTENTS: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  paragraphs: string[];
}> = {
  "turkiyeden-ingiltereye-zati-esya-tasima-rehberi": {
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (2026 Gümrük Kuralları)",
    category: "Zati Eşya",
    date: "24 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    paragraphs: [
      "İngiltere'ye taşınmak heyecan verici bir adım olmakla birlikte, ev eşyalarının ve zati eşyaların taşınması detaylı bir gümrük hazırlığı gerektirir. GaziTransport olarak, Türkiye'den Birleşik Krallık'a yapılan zati eşya transferlerinde müşterilerimize eksiksiz destek sağlıyoruz.",
      "İngiltere Gümrük İdaresi (HMRC), yerleşen kişilerin kullanılmış ev eşyaları için Transfer of Residence (TOR1) muafiyeti sunar. Bu onay alındığında eşyalarınız gümrük vergisi ve KDV'den muaf tutulur. GaziTransport ekibi, envanter listenizin TOR standartlarına göre hazırlanmasında danışmanlık verir.",
      "Paketleme aşamasında ise uluslararası yol şartlarına uygun 5 katmanlı ambalaj malzemeleri kullanılır. Mobilyalarınız sökülür, etiketlenir ve varış adresinde uzman ekiplerimizce yeniden monte edilir."
    ]
  },
  "avrupa-parsiyel-tasimacilikta-m3-hacim-hesaplama": {
    title: "Avrupa Parsiyel Taşımacılıkta m³ Hacim Hesaplama Neden Önemlidir?",
    category: "Ticari Lojistik",
    date: "20 Ağustos 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    paragraphs: [
      "Uluslararası parsiyel (LTL) taşımacılıkta navlun fiyatı belirlenirken sadece ağırlık değil, eşyanın araç içinde kapladığı hacim (m³) ve desisi dikkate alınır. GaziTransport, müşterilerine şeffaf fiyatlandırma sunmak için Gönderi Hesaplama altyapısını geliştirmiştir.",
      "En x Boy x Yükseklik ölçüleri ile elde edilen metreküp değeri, aracın kullanılabilir kapasitesiyle oranlanır. Doğru ölçüm yapmak navlun maliyetlerinizi %20 ila %35 oranında optimize etmenizi sağlar.",
      "GaziTransport web sitesindeki online hesaplayıcı sayesinde yükünüzün ebatlarını girerek anında tahmini hacim sonucuna ulaşabilirsiniz."
    ]
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_CONTENTS[slug] || BLOG_CONTENTS["turkiyeden-ingiltereye-zati-esya-tasima-rehberi"];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* BREADCRUMB */}
      <div className="bg-slate-900 text-slate-300 py-4 border-b border-slate-800 text-xs">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2">
          <Link href="/" className="hover:text-white">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-orange-500 font-semibold truncate">{post.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-6 text-xs text-slate-500 mb-8 border-b border-slate-100 pb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-600" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-600" /> {post.readTime}</span>
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-600" /> GaziTransport Yayın Ekibi</span>
        </div>

        <div className="rounded-2xl overflow-hidden mb-8 h-[400px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose max-w-none text-slate-700 leading-relaxed space-y-6">
          {post.paragraphs.map((p, i) => (
            <p key={i} className="text-base">{p}</p>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">GaziTransport ile Gönderinizi Planlayın</h3>
            <p className="text-xs text-slate-400">Anında hacim hesaplayın veya lojistik uzmanlarımızdan bilgi alın.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link href="/gonderi-hesaplama" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition">
              <Calculator className="w-4 h-4" /> Gönderi Hesapla
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}