'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, Clock, Sparkles, Search, Filter } from 'lucide-react';

export const BLOG_POSTS = [
  // --- ZATİ EŞYA & EVDEN EVE TAŞIMACILIK (AVRUPA & İNGİLTERE) ---
  {
    slug: "turkiyeden-ingiltereye-zati-esya-tasima-rehberi",
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (TOR1 Gümrük Muafiyeti)",
    excerpt: "İngiltere'ye yerleşirken ev eşyalarınızı gümrük vergisinden muaf (TOR1 başvurusu) taşıma adımları ve gümrükleme evrak listesi.",
    category: "Zati Eşya",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    slug: "turkiyeden-almanyaya-ev-esyasi-tasimada-zoll-gumruk-sürecleri",
    title: "Türkiye'den Almanya'ya Ev Eşyası Taşımada Zoll Gümrük Prosedürleri",
    excerpt: "Almanya gümrük idaresi (Zoll) kuralları çerçevesinde ev eşyası ve kişisel yüklerin vergisiz ithalat şartları, Form 0350 beyanı.",
    category: "Gümrük & Zati Eşya",
    date: "25 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800"
  },
  {
    slug: "turkiyeden-hollandaya-zati-esya-ve-ev-tasima-rehberi",
    title: "Türkiye'den Hollanda'da Ev Taşımak: Douane Gümrük Süreçleri ve Muafiyet",
    excerpt: "Amsterdam, Rotterdam ve Lahey'e zati eşya taşımasında Hollanda gümrük muafiyeti formu (Vrijstelling BPM/Douane) ve teslimat detayları.",
    category: "Zati Eşya",
    date: "22 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800"
  },
  {
    slug: "turkiyeden-fransaya-ev-esyasi-ve-zati-esya-tasimaciligi",
    title: "Türkiye'den Fransa'ya Ev Eşyası Taşıma: Paris ve Bölgesel Lojistik",
    excerpt: "Fransa gümrük mevzuatına uygun kişisel eşya transferi, Franchise de Douane muafiyeti ve dar sokak nakliye çözümleri.",
    category: "Zati Eşya",
    date: "20 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800"
  },
  {
    slug: "turkiyeden-belcikaya-zati-esya-ve-evden-eve-nakliyat",
    title: "Türkiye'den Belçika'ya Ev Eşyası Nakliyesi (Brüksel & Antwerpen)",
    excerpt: "Belçika gümrük muafiyet belgeleri, gurbetçi eşya nakliyatı ve kapıdan kapıya sigortalı taşımacılık rehberi.",
    category: "Zati Eşya",
    date: "18 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=800"
  },
  {
    slug: "turkiyeden-isvicreye-ev-esyasi-tasimada-1844-gumruk-formu",
    title: "Türkiye'den İsviçre'ye Eşya Taşıma: Form 18.44 ile Vergisiz Gümrükleme",
    excerpt: "AB üyesi olmayan İsviçre kantonlarına zati eşya taşırken Form 18.44 (Übersiedlungsgut) hazırlığı ve gümrük işlemleri.",
    category: "Zati Eşya",
    date: "15 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800"
  },
  {
    slug: "turkiyeden-avusturyaya-zati-esya-tasima-rehberi",
    title: "Türkiye'den Avusturya'ya Ev Eşyası Taşıma: Viyana & Graz Lojistiği",
    excerpt: "Avusturya gümrük kuralları, Zollen beyannameleri ve Viyana metropolünde kapıdan kapıya asansörlü eşya taşıma.",
    category: "Zati Eşya",
    date: "12 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=800"
  },
  {
    slug: "turkiyeden-italyaya-ev-esyasi-ve-zati-nakliyat-sürecleri",
    title: "Türkiye'den İtalya'ya Zati Eşya Nakliyesi: Milano ve Roma Teslimatı",
    excerpt: "İtalya gümrük beyanı (Dichiarazione gümrüğü), Ro-Ro gemi hatları ile hızlı ve güvenli ev taşıma rehberi.",
    category: "Zati Eşya",
    date: "10 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800"
  },
  {
    slug: "turkiyeden-ispanyaya-zati-esya-ve-mobilya-tasimaciligi",
    title: "Türkiye'den İspanya'ya Ev Eşyası Taşıma: Madrid & Barselona Hatları",
    excerpt: "İspanya gümrük muafiyetleri (Mudanza uluslararası nakliyat) ve Akdeniz güzergahlı nakliye çözümleri.",
    category: "Zati Eşya",
    date: "08 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800"
  },
  {
    slug: "turkiyeden-isvece-norvece-danimarkaya-iskandinavya-zati-tasima",
    title: "Türkiye'den İskandinavya'ya (İsveç, Norveç, Danimarka) Ev Eşyası Taşıma",
    excerpt: "Kuzey Avrupa gümrük prosedürleri, soğuk iklim korumalı ambalajlama ve İskandinavya zati eşya lojistiği.",
    category: "Zati Eşya",
    date: "05 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800"
  },

  // --- MOBİLYA TAŞIMACILIĞI ---
  {
    slug: "inegol-mobilyalarinin-avrupaya-guvenli-nakliyesi",
    title: "İnegöl Mobilyalarının Avrupa'ya Hasarsız Nakliyesi ve Ambalajlama",
    excerpt: "Ahşap, döşeme ve hassas mobilyaların uluslararası sevkiyatında uyguladığımız 5 katmanlı koruyucu ambalajlama standartları.",
    category: "Mobilya Taşımacılığı",
    date: "02 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800"
  },
  {
    slug: "kayseri-ve-istanbuldan-avrupaya-mobilya-ihracat-lojistigi",
    title: "Kayseri ve İstanbul'dan Avrupa'ya Mobilya Sevkiyatı ve B2B Lojistik",
    excerpt: "Kayseri ve İstanbul üreticilerinden doğrudan fabrika çıkışlı mobilyaların Avrupa genelindeki mağaza ve evlere nakli.",
    category: "Mobilya Taşımacılığı",
    date: "30 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
  },
  {
    slug: "turkiyeden-ingiltereye-mobilya-gonderimi-ve-montaj-hizmeti",
    title: "Türkiye'den İngiltere'ye Mobilya Gönderimi ve Londra Yerinde Kurulum",
    excerpt: "Türkiye'den satın alınan mobilyaların Birleşik Krallık gümrük çekimi, nakliyesi ve uzman ekiple ev içi montajı.",
    category: "Mobilya Taşımacılığı",
    date: "28 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
  },
  {
    slug: "uluslararasi-mobilya-tasimada-ahsap-kasalama-ve-paletleme",
    title: "Uluslararası Mobilya Taşımacılığında Ahşap Kasalama ve Sandıklama",
    excerpt: "Lüks ve antika mobilyalar ile mermer tablalı masaların ISPM 15 standartlı ahşap kasalarla kırılmaz nakliyesi.",
    category: "Mobilya Taşımacılığı",
    date: "26 Ağustos 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
  },

  // --- GIDA LOJİSTİĞİ & FRİGO TAŞIMACILIK ---
  {
    slug: "turk-gida-urunlerinin-avrupaya-frigo-lojistigi",
    title: "Türk Gıda Ürünlerinin Avrupa'ya Frigo Lojistiği ve Sağlık Sertifikaları",
    excerpt: "Kuru gıda, ikramlık ve ısı kontrollü gıdaların AB standartlarında gümrük belgelendirmeleri ve iklimlendirmeli tır sevkiyatı.",
    category: "Gıda Lojistiği",
    date: "24 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800"
  },
  {
    slug: "turkiyeden-avrupaya-dondurulmus-gida-ve-soğuk-zincir-tasimaciligi",
    title: "Türkiye'den Avrupa'ya Soğuk Zincir (-18°C / +4°C) Frigo Taşımacılık",
    excerpt: "Et, süt, dondurulmuş gıda ve yaş meyve sebzelerin uluslararası soğuk zincir bozulmadan nakliyesi ve dereceli dorseler.",
    category: "Gıda Lojistiği",
    date: "22 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800"
  },
  {
    slug: "avrupaya-unlu-mamuller-ve-tatli-ihracatinda-lojistik-cozumler",
    title: "Avrupa'ya Baklava, Lokum ve Unlu Mamul Sevkiyatında Hızlı Lojistik",
    excerpt: "Türk tatlıları ve unlu mamullerinin tazeliğini koruyarak Express ve Frigo tır hatlarıyla Almanya, Fransa ve Hollanda'ya nakli.",
    category: "Gıda Lojistiği",
    date: "20 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800"
  },

  // --- TAŞIMA MODLARI (KARA, HAVA, DENİZ, MULTİMODAL) ---
  {
    slug: "avrupa-parsiyel-tasimacilikta-m3-hacim-hesaplama",
    title: "Avrupa Parsiyel Taşımacılıkta m³ ve Desi Hacim Hesaplama Rehberi",
    excerpt: "Uluslararası kara yolu nakliyesinde navlun maliyetini belirleyen m³ ve en/boy/yükseklik hesaplama metodolojisi.",
    category: "Karayolu Lojistiği",
    date: "18 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800"
  },
  {
    slug: "turkiyeden-avrupaya-express-minivan-panelvan-tasimacilik",
    title: "Türkiye'den Avrupa'ya Express Minivan Taşımacılık: 24-48 Saatte Teslimat",
    excerpt: "Gümrük ve takograf kısıtlamalarına takılmadan küçük hacimli acil kargo ve zati eşyalar için ekspres panelvan çözümü.",
    category: "Karayolu Lojistiği",
    date: "15 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?q=80&w=800"
  },
  {
    slug: "uluslararasi-havayolu-kargo-tasimaciligi-ve-aero-lojistik",
    title: "Uluslararası Havayolu Kargo Taşımacılığı: Dünya Geneline Hızlı Sevkiyat",
    excerpt: "Acil gıda, numune, kıymetli eşya ve hızlı kargoların havalimanından havalimanına veya kapı teslimi nakliye rehberi.",
    category: "Havayolu Lojistiği",
    date: "12 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800"
  },
  {
    slug: "denizyolu-konteyner-tasimaciligi-fcl-ve-lcl-navlun-rehberi",
    title: "Denizyolu Konteyner Taşımacılığı: FCL ve LCL Arasındaki Farklar",
    excerpt: "Komple (FCL) ve parsiyel (LCL) deniz taşımacılığı, liman gümrükleme süreçleri ve global konteyner navlunları.",
    category: "Denizyolu Lojistiği",
    date: "10 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=800"
  },
  {
    slug: "multimodal-tasimacilik-ile-karbon-salinimi-ve-maliyet-tasarrufu",
    title: "Multimodal Taşımacılık: Ro-Ro ve Karayolu İle %25 Maliyet Avantajı",
    excerpt: "Deniz yolu (Ro-Ro) ve kara yolu entegrasyonu ile hem karbon ayak izini azaltan hem de nakliye bütçesini düşüren lojistik rotaları.",
    category: "Multimodal Lojistik",
    date: "08 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800"
  },

  // --- MİKRO İHRACAT & KARGO ---
  {
    slug: "e-ticaret-ve-mikro-ihracat-lojistigi-avrupayi-hedefleyin",
    title: "Türkiye'den Avrupa'ya Mikro İhracat ve B2B ETGB Lojistiği",
    excerpt: "ETGB (Elektronik Ticaret Gümrük Beyannamesi) ile vergisiz ve hızlı e-ticaret kargo gönderim rehberi.",
    category: "E-Ticaret & Kargo",
    date: "05 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800"
  },
  {
    slug: "turkiyeden-ingiltereye-ve-avrupaya-kargo-gonderim-rehberi",
    title: "Türkiye'den Avrupa ve İngiltere'ye Kargo Gönderim Rehberi (Koli & Palet)",
    excerpt: "Uluslararası koli gönderimi, desi hesaplama, gümrük beyanı muafiyet sınırları ve kapıdan kapıya kurye teslimatı.",
    category: "E-Ticaret & Kargo",
    date: "03 Ağustos 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800"
  },
  {
    slug: "amazon-avrupa-ve-ingiltere-fba-depo-lojistigi",
    title: "Amazon Avrupa ve İngiltere FBA Depo Lojistiği ve Randevulu Teslimat",
    excerpt: "Amazon FBA depolarına uygun etiketleme, paletleme ve gümrük çekimi yapılmış randevulu mal teslimat rehberi.",
    category: "E-Ticaret & Kargo",
    date: "01 Ağustos 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800"
  },

  // --- YAPI, DEKORASYON VE ÖZEL YÜKLER ---
  {
    slug: "yapi-dekorasyon-malzemelerinde-kirilmaz-tasima",
    title: "Yapı, Seramik ve Dekorasyon Malzemelerinde Kırılmaz Nakliye Çözümleri",
    excerpt: "Tabela, aydınlatma, mermer ve hassas şantiye malzemelerinin paletli ve darbe emici kasalama ile sevkiyatı.",
    category: "Yapı Lojistiği",
    date: "29 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
  },
  {
    slug: "turkiyeden-avrupaya-mermer-ve-dogaltas-ihracat-nakliyesi",
    title: "Türkiye'den Avrupa'ya Mermer ve Doğaltaş Taşımacılığı: Lashing & Sabitleme",
    excerpt: "Ağır ve kırılgan mermer blok ile plaka taşımalarında konteyner ve tır içi lashing (bağlama) güvenlik standartları.",
    category: "Yapı Lojistiği",
    date: "27 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800"
  },

  // --- GÜVENLİK, SİGORTA VE MEVZUAT ---
  {
    slug: "cmr-sigortasi-nedir-uluslararasi-nakliyede-yuk-emniyeti",
    title: "CMR Sigortası Nedir? Uluslararası Taşımacılıkta Yük ve Eşya Güvencesi",
    excerpt: "Uluslararası Nakliyat Taşıyıcı Sorumluluk Sigortası (CMR Konvansiyonu) hakları, poliçe kapsamı ve hasar güvencesi.",
    category: "Mevzuat & Sigorta",
    date: "25 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
  },
  {
    slug: "uluslararasi-nakliyede-gerekli-evraklar-ve-fatura-duzenleme",
    title: "Uluslararası Nakliyede Gerekli Evraklar: CMR, T1, T2, ATR ve EUR.1",
    excerpt: "Gümrük geçişlerinde talep edilen gümrük transit belgeleri, menşe şahadetnameleri ve ticari fatura örnekleri.",
    category: "Mevzuat & Sigorta",
    date: "22 Temmuz 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800"
  },
  {
    slug: "uluslararasi-evden-eve-tasimada-ambalajlama-teknikleri",
    title: "Uluslararası Evden Eve Taşımada Kullanılan Profesyonel Ambalaj Teknikleri",
    excerpt: "Havalı naylon, ahşap sandıklama ve elbise dolaplı kutular ile yurt dışı nakliyede eşyaların korunması.",
    category: "Paketleme Rehberi",
    date: "20 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
  },

  // --- ÜLKE/BÖLGE BAZLI PARSİYEL HATLAR ---
  {
    slug: "gazitransport-ile-almanya-ve-hollandaya-parsiyel-seferler",
    title: "Almanya, Hollanda ve Belçika Düzenli Parsiyel Tır Hatları",
    excerpt: "Haftalık sabit çıkışlı tırlarımızla Rotterdam, Amsterdam, Frankfurt, Köln ve Brüksel teslimat hatlarımız.",
    category: "Avrupa Rotaları",
    date: "18 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800"
  },
  {
    slug: "turkiyeden-polonyaya-ve-cekyaya-lojistik-seferleri",
    title: "Türkiye'den Polonya ve Çekya'ya Nakliye: Varşova & Prag Hatları",
    excerpt: "Doğu ve Orta Avrupa sanayi bölgelerine düzenli parsiyel ve komple tır taşımacılığı rehberi.",
    category: "Avrupa Rotaları",
    date: "15 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800"
  },
  {
    slug: "turkiyeden-romanya-ve-bulgaristana-hizli-karayolu-nakliyesi",
    title: "Türkiye'den Bükreş ve Sofya'ya Express ve Parsiyel Taşımacılık",
    excerpt: "Balkan kapılarından rekor transit sürelerle Romanya ve Bulgaristan teslimat süreçleri.",
    category: "Avrupa Rotaları",
    date: "12 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=800"
  },
  {
    slug: "turkiyeden-yunanistana-ve-makidonyaya-lojistik-hatlari",
    title: "Türkiye'den Yunanistan ve Kuzey Makedonya'ya Düzenli Nakliye Hatları",
    excerpt: "Atina, Selanik ve Üsküp destinasyonlarına haftalık parsiyel kargo ve zati eşya seferleri.",
    category: "Avrupa Rotaları",
    date: "10 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800"
  },
  {
    slug: "turkiyeden-irlandaya-zati-esya-ve-kargo-tasimaciligi",
    title: "Türkiye'den İrlanda'ya (Dublin) Ev Eşyası ve Kargo Taşıma Rehberi",
    excerpt: "Birleşik Krallık aktarmalı veya direkt Ro-Ro hatlarıyla İrlanda'ya gümrük vergisiz ev taşıma.",
    category: "Avrupa Rotaları",
    date: "08 Temmuz 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6b9db8e?q=80&w=800"
  },
  {
    slug: "turkiyeden-macaristana-ve-slovakjaya-lojistik-cozumleri",
    title: "Türkiye'den Macaristan (Budapeşte) ve Slovakya'ya Tır Sevkiyatı",
    excerpt: "Orta Avrupa transit koridoru gümrükleme şartları ve depolama imkânları.",
    category: "Avrupa Rotaları",
    date: "05 Temmuz 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800"
  },
  {
    slug: "turkiyeden-finlandiyaya-ve-baltik-ulkelerine-nakliye",
    title: "Türkiye'den Finlandiya, Estonya, Letonya ve Litvanya'ya Taşımacılık",
    excerpt: "Baltık denizi Ro-Ro hatları ve Kuzey Avrupa bölgesine güvenli tır seferleri.",
    category: "Avrupa Rotaları",
    date: "03 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800"
  },
  {
    slug: "turkiyeden-portekize-ve-cebraillik-bolgesine-nakliye",
    title: "Türkiye'den Portekiz'e (Lizbon & Porto) Zati Eşya ve Ticari Nakliye",
    excerpt: "İber yarımadası en uç noktasına güvenli, sigortalı ve gümrük takipsiz teslimat rehberi.",
    category: "Avrupa Rotaları",
    date: "01 Temmuz 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
  },
  {
    slug: "yurtdisi-tasimacilikta-depolama-ve-aktarma-merkezi-hizmetleri",
    title: "Yurtdışı Taşımacılıkta Serbest Depolama ve İstanbul Aktarma Merkezleri",
    excerpt: "Eşyalarınızın yurtdışına çıkmadan önce İstanbul depolarımızda ambalajlanıp ücretsiz muhafaza edilmesi.",
    category: "Lojistik Hizmetler",
    date: "28 Haziran 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    slug: "yurtdisina-tasinirken-yapilmasi-gerekenler-checklist",
    title: "Yurtdışına Taşınırken Yapılması Gerekenler: 10 Adımlık Nakliye Kontrol Listesi",
    excerpt: "Eşya ayıklamadan gümrük evraklarına, ambalajlamadan teslimata kadar eksiksiz uluslararası ev taşıma rehberi.",
    category: "Paketleme Rehberi",
    date: "25 Haziran 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800"
  }
];

export default function BlogListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Yapay zeka motorları için Yapısal Veri (ItemList Schema)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GaziTransport Uluslararası Lojistik, Zati Eşya ve Gümrük Rehberi",
    "description": "Türkiye'den İngiltere ve tüm Avrupa ülkelerine zati eşya, gıda frigo, mobilya, kargo ve gümrük rehberleri.",
    "itemListElement": BLOG_POSTS.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://gazitransport.com/blog/${post.slug}`,
      "name": post.title
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* SCHEMA ENTEGRASYONU */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-orange-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 text-xs text-orange-400 font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>40+ Detaylı Uluslararası Lojistik & Gümrük Rehberi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">
            GaziTransport <span className="text-orange-500">Lojistik Kütüphanesi</span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Türkiye'den İngiltere ve tüm Avrupa ülkelerine zati eşya taşıma, frigo gıda lojistiği, mobilya nakliyesi, karayolu/havayolu/denizyolu/multimodal taşıma modları ve gümrük rehberleri.
          </p>

          {/* ARAMA VE FİLTRELEME ÇUBUĞU */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Konu, ülke veya rehber ara (örn: İngiltere TOR1, Frigo Gıda, m³ Hesaplama)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORİ FİLTRELERİ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md overflow-x-auto flex items-center gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG LIST GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs sm:text-sm font-semibold text-slate-500">
            Toplam <span className="text-orange-600 font-bold">{filteredPosts.length}</span> rehber listeleniyor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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