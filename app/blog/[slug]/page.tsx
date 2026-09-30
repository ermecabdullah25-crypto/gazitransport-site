'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, User, Calculator, Phone, CheckCircle2, HelpCircle, ArrowRight, Boxes } from 'lucide-react';

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
    date: "24 Ağustos 2026",
    readTime: "6 dk okuma",
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
    date: "22 Ağustos 2026",
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
  "avrupa-parsiyel-tasimacilikta-m3-hacim-hesaplama": {
    title: "Avrupa Parsiyel Taşımacılıkta m³ ve Desi Hacim Hesaplama Rehberi",
    category: "Ticari Lojistik",
    date: "20 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    summary: "Parsiyel (LTL) nakliyede maliyet, eşyalarınızın tır kasasında kapladığı hacme (m³) göre hesaplanır. Doğru hacim ölçümü %30'a varan navlun tasarrufu sağlar.",
    paragraphs: [
      "Uluslararası karayolu taşımacılığında tırın toplam alanını birden fazla yük sahibi paylaşır. Bu sisteme parsiyel (LTL) taşımacılık denir.",
      "Hacim hesaplanırken formül: [En (cm) x Boy (cm) x Yükseklik (cm)] / 1.000.000 = Metreküp (m³). Yükün üst üste istiflenip istiflenemediği (stackable) navlun fiyatını doğrudan etkiler.",
      "GaziTransport online Gönderi Hesaplama aracı sayesinde kutu, palet veya mobilyalarınızın ölçülerini girerek anında m³ ve tahmini navlun ücretini öğrenebilirsiniz."
    ],
    faqs: [
      {
        question: "Hacim ağırlığı (Desi) ile m³ arasındaki fark nedir?",
        answer: "m³ eşyanın uzayda kapladığı hacimdir. Desi ise havayolu ve karayolu kurye taşımacılığında kullanılan oranlama birimidir. Karayolu tır nakliyesinde ana birim metreküptür (m³)."
      }
    ]
  },
  "inegol-mobilyalarinin-avrupaya-guvenli-nakliyesi": {
    title: "İnegöl Mobilyalarının Avrupa'ya Hasarsız Nakliyesi ve Ambalajlama",
    category: "Mobilya Taşımacılığı",
    date: "15 Ağustos 2026",
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
  },
  "turk-gida-urunlerinin-avrupaya-frigo-lojistigi": {
    title: "Türk Gıda Ürünlerinin Avrupa'ya Frigo Lojistiği ve Sağlık Sertifikaları",
    category: "Gıda Lojistiği",
    date: "11 Ağustos 2026",
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
  "yapi-dekorasyon-malzemelerinde-kirilmaz-tasima": {
    title: "Yapı, Seramik ve Dekorasyon Malzemelerinde Kırılmaz Nakliye Çözümleri",
    category: "Yapı Lojistiği",
    date: "08 Ağustos 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    summary: "Cam, seramik, aydınlatma, tabela ve mermer gibi hassas inşaat/dekorasyon ürünlerinin ahşap kasalama (crating) ve sigortalı sevkiyat detayları.",
    paragraphs: [
      "Şantiye ve mimari projelere gönderilen kırılabilir ürünlerin hasarsız ulaşması proje takvimleri açısından hayati önem taşır.",
      "Özel ahşap kasa içi sabitleme (lashing) ve havalı yastıklama sistemleri ile yüksek değerli dekorasyon ürünlerini güvenceye alıyoruz.",
      "GaziTransport, Avrupa genelindeki şantiye ve mağaza adreslerine kadar asansörlü ve vinçli indirme opsiyonlarıyla teslimat gerçekleştirmektedir."
    ],
    faqs: [
      {
        question: "Kırılabilir ürünlerde sigorta hasarı karşılar mı?",
        answer: "Evet. GaziTransport standart CMR taşıyıcı sigortasına ek olarak kırılabilir özel yükler için Geniş Kapsamlı Emtia Sigortası sunmaktadır."
      }
    ]
  },
  "multimodal-tasimacilik-ile-karbon-salinimi-ve-maliyet-tasarrufu": {
    title: "Multimodal Taşımacılık: Ro-Ro ve Karayolu İle %25 Maliyet Avantajı",
    category: "Multimodal",
    date: "03 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    summary: "Karayolu, Ro-Ro deniz hattı ve demiryolunun entegre kullanıldığı multimodal lojistik modeli ile yeşil lojistik ve ekonomik navlunlar.",
    paragraphs: [
      "Sadece karayolu kullanmak yerine İstanbul/Yalova limanlarından İtalya veya Fransa limanlarına Ro-Ro gemisiyle transit geçiş yapmak yakıt ve otoban maliyetlerini önemli ölçüde düşürür.",
      "Bu yöntem hem karbondioksit salınımını azaltır hem de sürücü takograf kısıtlamalarına takılmadan tırın transit süresini optimize eder.",
      "GaziTransport çevreci filosuyla müşterilerine en ekonomik ve hızlı multimodal rotaları çizmektedir."
    ],
    faqs: [
      {
        question: "Multimodal taşımacılık teslimat süresini uzatır mı?",
        answer: "Hayır. Hava muhalefeti olmaması durumunda Ro-Ro hatları otoban sınır kapılarındaki tır kuyruklarını baypas ettiği için süre kalitesi oldukça yüksektir."
      }
    ]
  },
  "cmr-sigortasi-nedir-uluslararasi-nakliyede-yuk-emniyeti": {
    title: "CMR Sigortası Nedir? Uluslararası Taşımacılıkta Yük ve Eşya Güvencesi",
    category: "Lojistik Güvenlik",
    date: "28 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    summary: "Uluslararası Karayolu Taşıma Sözleşmesi (CMR Konvansiyonu) kapsamında taşınan yüklerin hukuki ve finansal teminat altına alınması.",
    paragraphs: [
      "Uluslararası karayolu taşımacılığında taşınan her ticari mal veya ev eşyası CMR anlaşması kurallarına tabidir.",
      "CMR sigortası, taşıyıcının kusurundan doğabilecek kaza, devrilme, yangın veya çalınma gibi durumlarda yük sahibinin zararını uluslararası standartlarda tazmin eder.",
      "GaziTransport öz mal filosu ve sözleşmeli araçlarının tamamında güncel ve yüksek teminatlı CMR poliçeleri bulundurur."
    ],
    faqs: [
      {
        question: "Zati ev eşyaları da CMR sigortası kapsama alanına girer mi?",
        answer: "Evet. Taşınan zati eşyalarınız araç üstündeyken CMR sözleşmesi hükümleriyle uluslararası güvence altındadır."
      }
    ]
  },
  "gazitransport-ile-almanya-ve-hollandaya-parsiyel-seferler": {
    title: "Almanya, Hollanda ve Belçika Düzenli Parsiyel Tır Hatları",
    category: "Hat Bilgisi",
    date: "22 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
    summary: "Haftalık sabit günlerde İstanbul depomuzdan kalkan tırlarla Benelüks ve Almanya genelinde hızlı kapı teslimatı.",
    paragraphs: [
      "Almanya, Hollanda ve Belçika (Benelux) Türkiye'nin Avrupa'daki en büyük ticaret ortaklarıdır.",
      "GaziTransport, her hafta Cuma ve Cumartesi günleri İstanbul aktarma merkezinden araçlarını sevk ederek Salı-Çarşamba günleri Almanya ve Hollanda adres teslimatlarına başlar.",
      "Gümrükleme işlemlerini kendi bünyesindeki acentelerle hızlandırarak zaman kayıplarını sıfıra indirir."
    ],
    faqs: [
      {
        question: "Hollanda ve Belçika'ya ortalama teslimat süresi kaç gündür?",
        answer: "Çıkış gümrük işlemlerinin tamamlanmasının ardından ortalama 5-7 iş günü içerisinde adrese teslimat sağlanmaktadır."
      }
    ]
  },
  "turkiyeden-fransaya-ve-isvicreye-nakliye-rehberi": {
    title: "Türkiye'den Fransa ve İsviçre'ye Nakliye: Gümrük ve Teslimat Süreçleri",
    category: "Avrupa Rotaları",
    date: "18 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
    summary: "AB üyesi olmayan İsviçre kanton gümrükleri ile Fransa metropol bölgelerine sorunsuz ev ve ticari eşya sevk rehberi.",
    paragraphs: [
      "İsviçre AB üyesi olmadığı için özel gümrük mevzuatına sahiptir. Cenevre, Zürih, Basel gibi şehirlere nakliyede İsviçre gümrük beyanı açılması zorunludur.",
      "Fransa tarafında ise Paris, Lyon, Marsilya gibi metropol alanlarda şehir içi dar sokak araç kısıtlamalarına uygun küçük van araçlarla aktarmalı kapı teslimatları organize edilir.",
      "GaziTransport uzman kadrosu hem Fransa hem de İsviçre rotasında yılların tecrübesiyle eksiksiz hizmet verir."
    ],
    faqs: [
      {
        question: "İsviçre gümrüğünde vergisiz eşya geçirmek mümkün mü?",
        answer: "Evet. İsviçre'ye taşınma belgesi (Form 18.44) ibraz edildiğinde kullanılmış zati eşyalar vergisiz kabul edilir."
      }
    ]
  },
  "uluslararasi-evden-eve-tasimada-ambalajlama-teknikleri": {
    title: "Uluslararası Evden Eve Taşımada Kullanılan Profesyonel Ambalaj Teknikleri",
    category: "Paketleme Rehberi",
    date: "10 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    summary: "Binlerce kilometrelik uluslararası yollarda eşyaların zarar görmemesi için kullanılan ambalaj materyalleri ve paketleme standartları.",
    paragraphs: [
      "Şehirlerarası nakliye ile uluslararası nakliye arasındaki en büyük fark yoldaki sarsıntı süresi ve gümrük muayeneleridir.",
      "GaziTransport paketleme ekipleri: 1) Havalı balonlu naylon, 2) Köşe koruyucu straforlar, 3) Elbise askılı karton koliler, 4) Özel ahşap kasalar kullanır.",
      "Her bir koli numaralandırılır ve üzerine içerik bilgisi yazılır. Bu sayede gümrük muayenesinde kolilerinizi açmadan kontrol imkânı doğar."
    ],
    faqs: [
      {
        question: "Eşyaları kendimiz paketlersek fiyatta indirim olur mu?",
        answer: "Paketleme uzman personelimizce yapıldığında kırılma ve sigorta kapsamı garanti edilir. Ancak müşteri paketlemeli gönderiler için de özel fiyatlandırma sunulur."
      }
    ]
  },
  "e-ticaret-ve-mikro-ihracat-lojistigi-avrupayi-hedefleyin": {
    title: "Türkiye'den Avrupa'ya Mikro İhracat ve B2B ETGB Lojistiği",
    category: "E-Ticaret & İhracat",
    date: "02 Temmuz 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200",
    summary: "ETGB (Elektronik Ticaret Gümrük Beyannamesi) ile 300 kg ve 15.000 Euro limitine kadar olan mikro ihracat gönderilerinizi gümrükçü ücreti ödemeden Avrupa'ya yollayın.",
    paragraphs: [
      "Türk e-ticaret satıcıları ve KOBİ'ler için Avrupa pazarı büyük bir fırsattır. Mikro ihracat sayesinde gümrük müşavirliği ve ambar ücreti ödemeden yurt dışına satış yapabilirsiniz.",
      "GaziTransport ETGB yetkisiyle e-ihracat kargolarınızı hızlıca gümrükler ve KDV iadesi almanızı sağlayan dijital beyannameyi üretir.",
      "Almanya, Fransa ve İngiltere'deki Amazon / ETSY depolarına veya doğrudan son tüketiciye mikro ihracat gönderimlerinizi ulaştırıyoruz."
    ],
    faqs: [
      {
        question: "Mikro ihracat ile KDV iadesi alınabilir mi?",
        answer: "Evet. ETGB beyannamesi ile yapılan tüm yurt dışı mikro ihracat satışlarında KDV iadesi alma hakkınız doğar."
      }
    ]
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_CONTENTS[slug] || BLOG_CONTENTS["turkiyeden-ingiltereye-zati-esya-tasima-rehberi"];

  // YAPAY ZEKA VE ARAMA MOTORLARI İÇİN YAPISAL VERİ (SCHEMA.ORG)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "image": post.image,
    "datePublished": "2026-08-24",
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
      {/* SCHEMA.ORG ENTEGRASYONU */}
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
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-600" /> GaziTransport Lojistik Editörleri</span>
        </div>

        {/* HIZLI YANIT / ÖZET (GEO ODAKLI YAPAY ZEKA BLOĞU) */}
        <div className="bg-orange-50/80 border-l-4 border-orange-600 p-5 rounded-r-2xl mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-orange-900 font-bold text-xs uppercase tracking-wider mb-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <span>Yapay Zeka & Hızlı Yanıt Özeti</span>
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
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Bu Konu Hakkında Sıkça Sorulan Sorular</h2>
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
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest block mb-1">GAZITRANSPORT HESAPLAMA ARAÇLARI</span>
            <h3 className="text-lg sm:text-xl font-bold mb-1">Gönderinizin Hacmini ve Maliyetini Hesaplayın</h3>
            <p className="text-xs text-slate-400 max-w-md">
              Zati ev eşyanız veya ticari paletli yükleriniz için anında m³ ve navlun teklifi oluşturun.
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