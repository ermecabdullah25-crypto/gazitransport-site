'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, User, Calculator, CheckCircle2, HelpCircle, Boxes } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPostContent {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  paragraphs: string[];
  faqs: FAQItem[];
}

const BLOG_CONTENTS: Record<string, BlogPostContent> = {
  "turkiyeden-ingiltereye-zati-esya-tasima-rehberi": {
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (TOR1 Gümrük Muafiyeti)",
    category: "Zati Eşya",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    summary: "Türkiye'den Birleşik Krallık'a (İngiltere, İskoçya, Galler) ev eşyası taşırken gümrük vergilerinden (%20 VAT ve gümrük vergisi) muaf olmak için TOR1 (Transfer of Residence) onayı alınmalıdır.",
    paragraphs: [
      "İngiltere'ye yerleşmek veya uzun süreli çalışma/eğitim vizesi ile taşınmak heyecan verici bir adımdır. Ancak ev eşyalarının Türkiye'den Birleşik Krallık adresinize nakliyesi kapsamlı bir gümrük ve ambalaj hazırlığı gerektirir.",
      "İngiltere Gümrük ve Vergi Dairesi (HMRC), Birleşik Krallık'a yerleşen kişilerin en az 6 aydır kullandığı kişisel ve ev eşyaları için TOR1 (Transfer of Residence) muafiyeti uygular. Bu onay alındığında eşyalarınız İngiltere gümrüğünde vergisiz (0% VAT) çekilir.",
      "GaziTransport olarak, kapıdan kapıya taşımacılık sürecinde envanter listesinin (Packing List) HMRC formatına uygun hazırlanması, 5 katmanlı darbe emici baloncuklu ambalajlama ve Türkiye çıkış gümrük işlemlerini tek elden yönetiyoruz.",
      "Tırımız Türkiye'den yola çıktıktan sonra Ro-Ro ve karayolu güzergahıyla İngiltere'ye ulaşır. Varış adresinizde eşyalarınız montaj ve ambalaj atıklarının toplanması dahil teslim edilir."
    ],
    faqs: [
      {
        question: "İngiltere zati eşya taşımasında TOR1 başvurusu ne zaman yapılmalıdır?",
        answer: "TOR1 başvurusu eşyalarınız Türkiye'den yola çıkmadan en az 2-3 hafta önce HMRC resmi portalı üzerinden yapılmalıdır. GaziTransport başvuru evrak listenizi ücretsiz kontrol eder."
      },
      {
        question: "Sıfır alınmış yeni mobilyalar TOR1 muafiyetine girer mi?",
        answer: "Hayır. TOR1 muafiyeti en az 6 aydır kullanılan kişisel eşyalar içindir. Sıfır ürünler için İngiltere gümrüğünde fatura değeri üzerinden KDV ve gümrük vergisi doğar."
      }
    ]
  },
  "turkiyeden-almanyaya-ev-esyasi-tasimada-zoll-gumruk-sürecleri": {
    title: "Türkiye'den Almanya'ya Ev Eşyası Taşımada Zoll Gümrük Prosedürleri",
    category: "Gümrük & Zati Eşya",
    date: "25 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200",
    summary: "Almanya gümrük idaresi (Zoll), Türkiye'den Almanya'ya nakledilen ev eşyalarında ikametgah değişimi (Übersiedlungsgut) şartları sağlandığında gümrük vergisi muafiyeti tanır.",
    paragraphs: [
      "Almanya, Türk vatandaşlarının ve gurbetçilerin en yoğun eşya nakliyesi yaptığı Avrupa ülkesidir. Ancak Almanya Gümrük Dairesi (Zoll), AB dışından gelen eşyalar için sıkı denetimler uygular.",
      "Almanya'da eşyalarınızı vergisiz gümrüklemek için 'Formular 0350' (Anmeldung von Übersiedlungsgut) doldurulmalı, Almanya oturum belgesi (Anmeldung) ve Türkiye'den çıkış/nakil belgeleri ibraz edilmelidir.",
      "GaziTransport, Berlin, Münih, Frankfurt, Stuttgart ve Köln dâhil Almanya'nın tüm eyaletlerine haftalık düzenli zati eşya tırları kaldırmaktadır. Eşyalarınız profesyonel ekiplerimizce marangozlu söküm-takım hizmetiyle taşınır."
    ],
    faqs: [
      {
        question: "Almanya gümrüğünde zati eşya için hangi belgeler gereklidir?",
        answer: "Almanya ikamet belgesi (Anmeldung), iş/kira sözleşmesi, pasaport fotokopisi, Formular 0350 ve GaziTransport onaylı Türkçe-Almanca eşya listesi gereklidir."
      }
    ]
  },
  "turk-gida-urunlerinin-avrupaya-frigo-lojistigi": {
    title: "Türk Gıda Ürünlerinin Avrupa'ya Frigo Lojistiği ve Sağlık Sertifikaları",
    category: "Gıda Lojistiği",
    date: "24 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1200",
    summary: "Sıcaklık kontrollü (Frigo) tırlarla Türk gıda ürünlerinin AB gümrük mevzuatına ve sağlık sertifikası (Health Certificate) standartlarına uygun nakliye rehberi.",
    paragraphs: [
      "Kuru gıda, dondurulmuş gıda, tatlı ve taze ikramlıkların Avrupa pazarına sevk edilmesi iklimlendirmeli soğutuculu frigo araçlar ile mümkündür.",
      "AB gümrük kapılarında gıda ürünleri için Bitki Sağlık Sertifikası (Phytosanitary) veya Gıda Analiz Raporları talep edilir.",
      "GaziTransport rekor sürede dereceli soğutuculu dorseleri ile gıda ürünlerinizin bozulmadan AB marketlerine ve toptancılarına ulaşmasını sağlar."
    ],
    faqs: [
      {
        question: "Gıda kargolarında gümrük takılmaları nasıl önlenir?",
        answer: "İhracatçı firmanın AB gıda tüzüğüne uygun etiketleme ve içerik analiz belgelerini yükleme öncesinde GaziTransport gümrük ekibine onaylatması gerekir."
      }
    ]
  },
  "inegol-mobilyalarinin-avrupaya-guvenli-nakliyesi": {
    title: "İnegöl Mobilyalarının Avrupa'ya Hasarsız Nakliyesi ve Ambalajlama",
    category: "Mobilya Taşımacılığı",
    date: "02 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    summary: "İnegöl, Kayseri ve İstanbul'dan satın alınan Türk mobilyalarının Avrupa'daki adrese kırılmadan ve çizilmeden ulaştırılması özel koruyucu paketleme teknikleri gerektirir.",
    paragraphs: [
      "Türk mobilyaları yüksek kalitesi ve estetik tasarımlarıyla Avrupa'daki gurbetçilerimiz ve Avrupalı tüketiciler tarafından yoğun ilgi görmektedir.",
      "Hassas ahşap yüzeyler, kumaş döşemeler ve camlı vitrinler uluslararası nakliyede sürtünme ve sarsıntıya maruz kalır. GaziTransport, 5 katmanlı patpat ambalaj, köşe koruyucu kartonlar ve streç filmleme ile maksimum koruma sağlar.",
      "İnegöl mobilya üreticilerinden doğrudan fabrika çıkışlı alım yapıp Fransa, Belçika, Hollanda ve Almanya'daki evinizin salonuna kadar kurulum dâhil teslim ediyoruz."
    ],
    faqs: [
      {
        question: "Mobilya üreticisinden doğrudan eşyayı teslim alıyor musunuz?",
        answer: "Evet. İnegöl, Kayseri veya Türkiye'nin herhangi bir yerindeki mobilya mağazasından veya fabrikasından ürünlerinizi sizin adınıza teslim alıp depoluyoruz."
      }
    ]
  }
};

// VARSAYILAN JENERİK ŞABLON (Tüm diğer 40+ slug için dinamik üretilir)
const createFallbackContent = (slug: string): BlogPostContent => {
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: formattedTitle,
    category: "Uluslararası Lojistik",
    date: "Güncel Lojistik Rehberi",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    summary: `${formattedTitle} alanında GaziTransport güvencesiyle sunduğumuz kapıdan kapıya uluslararası nakliye, gümrükleme, sigorta ve lojistik çözümleri.`,
    paragraphs: [
      `${formattedTitle} sürecinde doğru lojistik ortağıyla çalışmak, gümrük gecikmelerinin ve beklenmeyen maliyetlerin önüne geçer. GaziTransport, Türkiye'den Avrupa ve Birleşik Krallık'a kadar olan tüm rotalarda eksiksiz hizmet sunar.`,
      "Uluslararası standartlara uygun ambalajlama, CMR taşıyıcı sigortası, öz mal filo ve deneyimli gümrük operasyon ekibimiz sayesinde yükünüz güvenle hedef adrese ulaştırılır.",
      "Online hacim hesaplama araçlarımız ve anlık WhatsApp destek hattımız üzerinden gönderinizin detaylarını ileterek en uygun navlun teklifini derhal alabilirsiniz."
    ],
    faqs: [
      {
        question: `${formattedTitle} için teslimat süresi ne kadardır?`,
        answer: "Çıkış yapılan ülkeye ve taşıma moduna (Express, Karayolu, Frigo veya Multimodal) bağlı olarak teslimat süresi ortalama 3 ile 8 iş günü arasında değişmektedir."
      },
      {
        question: "Gümrükleme işlemleri GaziTransport tarafından mı yapılıyor?",
        answer: "Evet, hem Türkiye çıkış gümrüğü hem de varış ülkesi ithalat/zati eşya gümrükleme beyannameleri uzman kadromuzca yönetilmektedir."
      }
    ]
  };
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_CONTENTS[slug] || createFallbackContent(slug || 'turkiyeden-ingiltereye-zati-esya-tasima-rehberi');

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "image": post.image,
    "datePublished": "2026-09-30",
    "author": {
      "@type": "Organization",
      "name": "GaziTransport Lojistik Ekibi",
      "url": "https://gazitransport.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GaziTransport",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gazitransport.com/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://gazitransport.com/blog/${slug}`
    }
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-slate-950 text-slate-400 py-3.5 border-b border-slate-800 text-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-orange-400 font-medium truncate">{post.title}</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* KATEGORİ & BAŞLIK */}
        <div className="mb-6">
          <span className="bg-orange-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>

        {/* METADATA */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 pb-6 border-b border-slate-200 mb-8 font-medium">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-600" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-600" /> {post.readTime}</span>
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-600" /> GaziTransport Uzman Kadrosu</span>
        </div>

        {/* HIZLI YANIT / ÖZET (GEO ODAKLI YAPAY ZEKA BLOĞU) */}
        <div className="bg-orange-50/80 border-l-4 border-orange-600 p-5 rounded-r-2xl mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-orange-900 font-bold text-xs uppercase tracking-wider mb-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <span>Yapay Zeka & GEO Hızlı Yanıt Özeti</span>
          </div>
          <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* ANA GÖRSEL */}
        <div className="rounded-2xl overflow-hidden mb-10 h-[260px] sm:h-[420px] shadow-lg border border-slate-200 bg-slate-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* MAKALE İÇERİĞİ */}
        <div className="prose max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
          {post.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* SIKÇA SORULAN SORULAR (FAQ SECTION) */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Sıkça Sorulan Sorular</h2>
            </div>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* HESAPLAMA CTA */}
        <div className="mt-12 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest block mb-1">GAZITRANSPORT LOJİSTİK</span>
            <h3 className="text-lg sm:text-xl font-bold mb-1">Navlun ve Gönderinizi Anında Hesaplayın</h3>
            <p className="text-xs text-slate-400 max-w-md">
              Avrupa ve İngiltere hatlarında zati eşya veya ticari kargo navlun fiyati için online hesaplayıcıyı kullanın.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link 
              href="/gonderi-hesaplama" 
              className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg shadow-orange-600/30"
            >
              <Calculator className="w-4 h-4" />
              <span>Ev Eşyası Hesapla</span>
            </Link>
            <Link 
              href="/ticari-hesaplama" 
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Boxes className="w-4 h-4 text-orange-400" />
              <span>Ticari Yük Hesapla</span>
            </Link>
          </div>
        </div>

        {/* BLOG LİSTESİNE DÖNÜŞ */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-orange-600 transition">
            <span>← Tüm Lojistik ve Gümrük Rehberlerine Dön</span>
          </Link>
        </div>
      </article>
    </main>
  );
}