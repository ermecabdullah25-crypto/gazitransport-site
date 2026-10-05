import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  Calendar, Clock, ChevronRight, User, Calculator, 
  CheckCircle2, HelpCircle, Boxes, FileText, PackageCheck, 
  ShieldAlert, Landmark, Truck
} from 'lucide-react';
import { BLOG_POSTS } from '../blogData';

interface FAQItem {
  question: string;
  answer: string;
}

interface CustomProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface BlogPostContent {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  customsAuthority: string;
  requiredDocs: string[];
  processSteps: CustomProcessStep[];
  paragraphs: string[];
  faqs: FAQItem[];
}

// ÖZEL VEYA BÖLGESEL DİNAMİK MİMARİ MOTORU
function generateDynamicExpertContent(slug: string): BlogPostContent | null {
  const meta = BLOG_POSTS.find(p => p.slug === slug);
  if (!meta) return null;

  const isUK = slug.includes('ingiltere') || meta.category.includes('İngiltere');
  const isDE = slug.includes('almanya') || meta.category.includes('Almanya');
  const isNL = slug.includes('hollanda') || meta.category.includes('Hollanda');
  const isFR = slug.includes('fransa') || meta.category.includes('Fransa');
  const isCH = slug.includes('isvicre') || meta.category.includes('İsviçre');

  let customsAuthority = "İlgili Ülke Gümrük İdaresi & AB Gümrük Birliği Versiyonu";
  let requiredDocs = [
    "Detaylı Eşya Liste / Çeki Listesi (Packing List - Koli/Hacim Bazlı)",
    "Pasaport ve Geçerli Oturum Belgesi / Çalışma Vizesi Fotokopisi",
    "Türkiye Çıkış İkametgah Nakil Belgesi veya Yurtdışı Görev Yazısı",
    "CMR Uluslararası Taşıma Senedi ve Taşıyıcı Yetki Belgesi"
  ];

  if (isUK) {
    customsAuthority = "HM Revenue & Customs (HMRC) - Birleşik Krallık Gümrük Dairesi";
    requiredDocs = [
      "HMRC Onaylı Unique Reference Number (TOR1 Muafiyet Kodu)",
      "İngiltere Kira Sözleşmesi veya Ev Tapu Örneği",
      "Detaylı İngilizce Packing List (Kutu Numaralı ve Değer Beyanlı)",
      "Birlik Dışı Giriş Beyannamesi & Uluslararası CMR Belgesi"
    ];
  } else if (isDE) {
    customsAuthority = "Bundeszollverwaltung (Almanya Federal Gümrük Dairesi)";
    requiredDocs = [
      "Zoll Formular 0350 (Anmeldung von Übersiedlungsgut)",
      "Almanya Şehir Kayıt Belgesi (Anmeldung / Meldebestätigung)",
      "Almanca/Türkçe Hazırlanmış İmzalı Eşya Listesi",
      "İş Sözleşmesi veya Üniversite Kabul Belgesi Örneği"
    ];
  } else if (isNL) {
    customsAuthority = "Douane Nederland (Hollanda Gümrük İdaresi)";
    requiredDocs = [
      "Aangifte voor Vrijstelling van Invoerrechten (Muafiyet Beyannamesi)",
      "Hollanda Belediye İkamet Kaydı (BRP Entegrasyonu)",
      "Detaylı Kargo Çeki Listesi ve CMR Taşıma Belgesi"
    ];
  } else if (isFR) {
    customsAuthority = "Direction Générale des Douanes et Droits Indirects (Fransa Gümrüğü)";
    requiredDocs = [
      "Cerfa Form No: 10070*03 Vergisiz İthalat Beyannamesi",
      "Fransa İkametgah Belgesi (Attestation d'hébergement / Bail)",
      "Fransızca Hazırlanmış Konsolosluk Tasdikli Eşya Listesi"
    ];
  } else if (isCH) {
    customsAuthority = "BAZG (İsviçre Federal Gümrük ve Sınır Güvenliği Dairesi)";
    requiredDocs = [
      "Formular 18.44 (Muster 18.44 Übersiedlungsgut)",
      "İsviçre Çalışma / Oturum İzni (Ausländerausweis B/L)",
      "İsviçre Kira Kontratı ve İki Dilli Detaylı Envanter Listesi"
    ];
  }

  const processSteps: CustomProcessStep[] = [
    {
      step: "01",
      title: "Eşya Ekspertizi ve Hacim (m³) Hesaplama",
      desc: "Uzman ekibimizce eşyalarınızın m³ hacmi, hassas kırılacak ürünler ve demonte edilecek mobilyalar yerinde/dijital tespit edilir."
    },
    {
      step: "02",
      title: "5 Katmanlı Ambalajlama & Marangozlu Söküm",
      desc: "Mobilyalarınız sökülür, hava balonlu kraft kağıtlar, baloncuklu naylonlar ve köşe koruyucular ile uluslararası standartta paketlenir."
    },
    {
      step: "03",
      title: "Gümrük Evrak Hazırlığı & Beyanname Açılışı",
      desc: `${customsAuthority} mevzuatına uygun olarak eşya listeniz, muafiyet formlarınız ve CMR evraklarınız eksiksiz hazırlanır.`
    },
    {
      step: "04",
      title: "Güvenli Sevkiyat & Kapıda Kurulum Teslimatı",
      desc: "Eşyalarınız varış ülkesinde gümrükten çekilerek yeni adresinizde odalarına kadar taşınır, montajı yapılır ve ambalaj atıkları toplanır."
    }
  ];

  return {
    title: meta.title,
    category: meta.category,
    date: meta.date,
    readTime: meta.readTime,
    image: meta.image,
    summary: meta.excerpt,
    customsAuthority,
    requiredDocs,
    processSteps,
    paragraphs: [
      `${meta.title} kapsamında gerçekleştirilecek lojistik operasyonlar, uluslararası taşımacılık hukuku ve varış ülkesi gümrük mevzuatlarına tam uyum gerektirir. Gazi Transport, Türkiye'den başlayan kapıdan kapıya süreçte tüm prosedürleri profesyonel kadrosu ile yönetmektedir.`,
      `Taşıma sürecinde eşyalarınızın güvenliği için ISO 9001 standartlarında 5 katmanlı darbe emici ambalaj malzemeleri kullanılır. Beyaz eşyalar, kırılacak hassas cam ve porselenler özel kolilenirken, gardırop ve yatak odası takımları marangozlarımız tarafından sökülüp varış adresinde tekrar monte edilir.`,
      `Gümrükleme tarafında ise ${customsAuthority} kuralları uyarınca muafiyet haklarının doğru kullanılması hayati önem taşır. Yanlış veya eksik yapılan beyanlar gümrükte tırın beklemesine (demoraj) ve ek vergi cezalarına sebep olabilir. Gazi Transport gümrük müşavirliği departmanı tüm bu riski sıfıra indirir.`,
      `Sevkiyatlarımız uluslararası CMR (Carriage of Goods by Road) Taşıyıcı Sorumluluk Sigortası ve opsiyonel All-Risk Emtia Sigortası ile %100 güvence altındadır. Aracımız yola çıktığı andan itibaren GPS araç takip sistemi üzerinden anlık konum takibi sağlanır.`
    ],
    faqs: [
      {
        question: `${meta.title} operasyonu ortalama kaç gün sürmektedir?`,
        answer: "Güzergaha ve tercih edilen taşıma moduna bağlı olarak (Express Minivan ile 3-4 gün, Karayolu Tır ile 7-12 gün) teslimat tamamlanmaktadır."
      },
      {
        question: "Gümrük vergisi ödemeden ev eşyalarımı nasıl taşıtabilirim?",
        answer: `${customsAuthority} kurallarına göre son 12 aydır yurtdışında yaşadığınızı ve eşyalarınızın en az 6 aylık kullanılmış eşya olduğunu belgelediğiniz takdirde gümrük vergisinden (%0 VAT/KDV) muaf olursunuz.`
      },
      {
        question: "Eşyalarım nakliye sırasında sigortalı mıdır?",
        answer: "Evet, tüm taşıma operasyonlarımız uluslararası CMR Taşıyıcı Sorumluluk Sigortası kapsamındadır. Ayrıca talebiniz üzerine kasko değerinde All-Risk Geniş Kapsamlı Sigorta da düzenlenmektedir."
      }
    ]
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = generateDynamicExpertContent(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Gazi Transport Lojistik Rehberi`,
    description: post.summary,
    keywords: [
      post.category,
      'Gazi Transport',
      'uluslararası nakliyat',
      'gümrükleme',
      'ev taşıma',
      'lojistik çözümleri'
    ],
    openGraph: {
      title: `${post.title} | Gazi Transport`,
      description: post.summary,
      images: [{ url: post.image, alt: post.title }],
      type: 'article',
      siteName: 'Gazi Transport',
      locale: 'tr_TR',
      url: `https://gazitransport.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
    alternates: {
      canonical: `https://gazitransport.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = generateDynamicExpertContent(slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "image": [post.image],
    "datePublished": "2026-10-05",
    "dateModified": "2026-10-05",
    "inLanguage": "tr-TR",
    "author": {
      "@type": "Organization",
      "name": "Gazi Transport Lojistik Uzman Ekibi",
      "url": "https://gazitransport.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gazi Transport Lojistik A.Ş.",
      "url": "https://gazitransport.com",
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

      {/* BREADCRUMB NAVİGASYON */}
      <nav aria-label="Breadcrumb" className="bg-slate-950 text-slate-400 py-3.5 border-b border-slate-800 text-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <Link href="/blog" className="hover:text-white transition">Gümrük & Lojistik Kütüphanesi</Link>
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
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-600" /> Gazi Transport Gümrükleşme ve Mevzuat Ekibi</span>
        </div>

        {/* GEO & YAPAY ZEKA HIZLI ÖZETI */}
        <div className="bg-orange-50/90 border-l-4 border-orange-600 p-5 rounded-r-2xl mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-orange-900 font-bold text-xs uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <span>Yapay Zeka & Gümrük Hızlı Yanıt Özeti</span>
          </div>
          <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* ANA GÖRSEL */}
        <div className="rounded-2xl overflow-hidden mb-10 h-[260px] sm:h-[420px] shadow-lg border border-slate-200 bg-slate-100 relative">
          <img 
            src={post.image} 
            alt={`${post.title} - Gazi Transport Lojistik`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* GÜMRÜK MAKAMI & GEREKLİ EVRAKLAR (EKSTRA UZMANLIK BLOĞU) */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
              <Landmark className="w-5 h-5 text-orange-600" />
              <span>İlgili Gümrük Otoritesi</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-100">
              {post.customsAuthority}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
              <FileText className="w-5 h-5 text-orange-600" />
              <span>Gerekli Temel Evraklar</span>
            </div>
            <ul className="space-y-2">
              {post.requiredDocs.map((doc, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MAKALE İÇERİĞİ */}
        <div className="prose max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
          {post.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 4 ADIMDA LOJİSTİK VE GÜMRÜK SÜRECİ */}
        <section className="mt-12 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Truck className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg sm:text-xl font-bold">4 Adımda Kapıdan Kapıya Operasyon Planı</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {post.processSteps.map((step) => (
              <div key={step.step} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center gap-2 text-orange-400 font-black text-sm mb-1">
                  <span>{step.step}.</span>
                  <h4>{step.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SIKÇA SORULAN SORULAR */}
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

        {/* NAVLUN HESAPLAMA CTA */}
        <div className="mt-12 bg-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest block mb-1">GAZİ TRANSPORT LOJİSTİK</span>
            <h3 className="text-lg sm:text-xl font-bold mb-1">Navlun ve Gönderinizi Anında Hesaplayın</h3>
            <p className="text-xs text-slate-400 max-w-md">
              Avrupa, İngiltere ve küresel hatlarda zati eşya veya ticari yükleriniz için online hacim/fiyat hesaplayıcısını kullanın.
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

        {/* GERİ DÖNÜŞ LİNKİ */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-orange-600 transition">
            <span>← Tüm Gümrük ve Lojistik Rehberlerine Dön</span>
          </Link>
        </div>
      </article>
    </main>
  );
}