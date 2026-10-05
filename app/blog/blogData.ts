export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  countryCode?: string;
  serviceType?: 'Zati Eşya' | 'Ticari Kargo' | 'Frigo' | 'Express' | 'Deniz/Hava/Multimodal';
}

export const BLOG_POSTS: BlogPostMeta[] = [
  // ==========================================
  // 1. ALMANYA LOJİSTİK & GÜMRÜK (10 REHBER)
  // ==========================================
  {
    slug: "turkiyeden-almanyaya-ev-esyasi-tasimada-zoll-gumruk-surecleri",
    title: "Türkiye'den Almanya'ya Ev Eşyası Taşımada Zoll Gümrük Prosedürleri (Formular 0350)",
    category: "Almanya Lojistik",
    date: "05 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200",
    excerpt: "Almanya Federal Gümrük Dairesi (Zoll) ikamet nakli (Übersiedlungsgut) çerçevesinde Formular 0350 beyanı ile KDV ve gümrük vergisinden %100 muafiyet şartları.",
    countryCode: "DE",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-almanyaya-frigo-sogutmali-gida-tasimaciligi",
    title: "Türkiye'den Almanya'ya Frigo Soğutmalı Gıda ve İlaç Lojistiği",
    category: "Almanya Lojistik",
    date: "04 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    excerpt: "ATP ve HACCP sertifikalı iklim kontrollü (-25°C / +25°C) tır filosu ile Almanya'ya yaş meyve, sebze, donuk gıda ve medikal sevkiyat esasları.",
    countryCode: "DE",
    serviceType: "Frigo"
  },
  {
    slug: "almanyaya-parsiyel-ve-komple-tir-tasimaciliginda-t1-transit-belgesi",
    title: "Almanya Karayolu Taşımasında T1 Transit Beyannamesi ve NCTS Yönetimi",
    category: "Almanya Lojistik",
    date: "03 Ekim 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
    excerpt: "AB sınır kapılarından Almanya iç gümrüklerine kadar T1/T2 teminatlı transit belgelerinin düzenlenmesi ve NCTS sistem kayıt süreçleri.",
    countryCode: "DE",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "istanbul-berlin-munih-express-minivan-nakliye-cozumleri",
    title: "İstanbul'dan Berlin, Münih ve Frankfurt'a 48 Saatte Express Minivan Nakliye",
    category: "Almanya Lojistik",
    date: "02 Ekim 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
    excerpt: "Sınır kapılarında takograf takılmadan direkt kapıya teslimat yapan kapalı kasa express minivanlar ile hızlı kargo ve gümrükleme adımları.",
    countryCode: "DE",
    serviceType: "Express"
  },
  {
    slug: "almanyaya-otobil-ve-karavan-ithalatinda-zoll-muafiyeti",
    title: "Türkiye'den Almanya'ya Zati Araç ve Karavan Gönderiminde Zoll Vergi Muafiyeti",
    category: "Almanya Lojistik",
    date: "01 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200",
    excerpt: "Kişisel aracınızı Almanya'ya gümrük vergisiz götürmek için en az 6 ay mülkiyet şartı, TÜV kontrolü ve Zulassungsstelle tescil adımları.",
    countryCode: "DE",
    serviceType: "Zati Eşya"
  },
  {
    slug: "almanyada-anmeldung-ve-ikametgah-nakil-belgesi-ile-esyalarin-cekimi",
    title: "Anmeldung (Şehir Kaydı) ve Abmeldung Belgeleriyle Almanya Gümrük İşlemleri",
    category: "Almanya Lojistik",
    date: "30 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=1200",
    excerpt: "Almanya belediyelerinden alınan ikametgah kayıtlarının gümrük idaresine sunulması ve koli bazlı envanter listesi onay süreçleri.",
    countryCode: "DE",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-almanyaya-tekstil-ve-hazir-giyim-ihracat-lojistigi",
    title: "Türkiye'den Almanya'ya Tekstil İhracatı: ATR Belgesi ve Gümrükleşme",
    category: "Almanya Lojistik",
    date: "29 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200",
    excerpt: "Hazır giyim ve kumaş ihracatında A.TR Dolaşım Belgesi ile gümrük vergisiz AB girişi, askılı kargo ve depolama detayları.",
    countryCode: "DE",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "almanyada-eori-numarasi-ve-atlas-gumruk-sistemi-entegrasyonu",
    title: "Almanya'da EORI Numarası Alma ve ATLAS Elektronik Gümrük Beyanı",
    category: "Almanya Lojistik",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    excerpt: "Alman gümrük idaresi ATLAS yazılımı üzerinden ticari ve bireysel sevkiyatların beyanı ve EORI kayıt zorunlulukları.",
    countryCode: "DE",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "alman-limanlarindan-rotterdam-ve-hamburg-uzerinden-kombine-tasimacilik",
    title: "Hamburg ve Bremen Limanları Üzerinden Türkiye-Almanya Deniz & Kara Lojistiği",
    category: "Almanya Lojistik",
    date: "27 Eylül 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200",
    excerpt: "Konteyner ve Ro-Ro gemileriyle Hamburg Limanı varışlı yüklerin demiryolu ve karayolu ile Almanya geneline dağıtım planı.",
    countryCode: "DE",
    serviceType: "Deniz/Hava/Multimodal"
  },
  {
    slug: "almanyaya-ev-esyasi-tasimada-fiyat-hesaplama-ve-kubik-metre-m3-rehberi",
    title: "Almanya Ev Eşyası Nakliye Fiyatları Nasıl Hesaplanır? (m³ Hacim Rehberi)",
    category: "Almanya Lojistik",
    date: "26 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200",
    excerpt: "10 m³ ile 60 m³ arası ev eşyası taşımalarında navlun, ambalaj, marangoz ve gümrükleme maliyetlerinin detaylı analizi.",
    countryCode: "DE",
    serviceType: "Zati Eşya"
  },

  // ==========================================
  // 2. İNGİLTERE LOJİSTİK & GÜMRÜK (10 REHBER)
  // ==========================================
  {
    slug: "turkiyeden-ingiltereye-zati-esya-tasima-rehberi",
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (TOR1 Gümrük Muafiyeti)",
    category: "İngiltere Lojistik",
    date: "05 Ekim 2026",
    readTime: "9 dk okuma",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200",
    excerpt: "Birleşik Krallık HMRC gümrük idaresinden TOR1 (Transfer of Residence) onayı alarak %20 VAT ödemeden ev eşyası taşıma rehberi.",
    countryCode: "GB",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-ingiltereye-express-minivan-parsiyel-tasimaciligi",
    title: "Türkiye'den İngiltere'ye Express Minivan ve Hızlı Parsiyel Nakliye",
    category: "İngiltere Lojistik",
    date: "04 Ekim 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
    excerpt: "48-72 saat içerisinde İstanbul-Londra kapıdan kapıya express minivan lojistik çözümleri ve Manche kanalı geçiş prosedürleri.",
    countryCode: "GB",
    serviceType: "Express"
  },
  {
    slug: "brexit-sonrasi-ingiltere-turkiye-ticari-kargo-gumruk-sistemleri",
    title: "Brexit Sonrası İngiltere Ticari İhracat Gümrük Yönetimi (CDS ve GVMS)",
    category: "İngiltere Lojistik",
    date: "03 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    excerpt: "Birleşik Krallık CDS (Customs Declaration Service) ve GVMS liman geçiş sistemlerinde beyanname açılış esasları ve EORI zorunluluğu.",
    countryCode: "GB",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "ingiltereye-ev-esyasi-tasimada-dover-ve-felixstowe-liman-gecisleri",
    title: "Dover ve Felixstowe Limanlarında Zati Eşya ve Tır Gümrük Muahedeleri",
    category: "İngiltere Lojistik",
    date: "02 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1200",
    excerpt: "Manş Denizi feribot ve Eurotunnel tren geçişlerinde tırların gümrük kontrol adımları ve muayene prosedürleri.",
    countryCode: "GB",
    serviceType: "Zati Eşya"
  },
  {
    slug: "londra-machester-ve-birmingham-kapidan-kapiya-ev-nakliyesi",
    title: "Londra, Manchester ve Birmingham'a Ev Eşyası Ambalaj ve Montajlı Delivery",
    category: "İngiltere Lojistik",
    date: "01 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1200",
    excerpt: "İngiltere içi dar sokak ve LEZ (Low Emission Zone) araç kısıtlamalarına uygun küçük araçlarla adrese teslimat ve kurulum.",
    countryCode: "GB",
    serviceType: "Zati Eşya"
  },
  {
    slug: "ingiltereye-frigo-soogutmali-tir-tasimaciligi-ve-phsi-bitki-saglik-kontrollari",
    title: "İngiltere'ye Frigo Tır ile Yaş Sebze Meyve İhracatı ve IPAFFS Onayları",
    category: "İngiltere Lojistik",
    date: "30 Eylül 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1200",
    excerpt: "Gıda ve bitkisel ürünlerin Birleşik Krallık IPAFFS sistemine ön bildirimi ve sınır kontrol noktalarında (BCP) fiziki muayene.",
    countryCode: "GB",
    serviceType: "Frigo"
  },
  {
    slug: "turkiyeden-ingiltereye-mobilya-ihracati-ve-ukca-sertifikasyon-gumruklene",
    title: "İngiltere'ye Mobilya İhracatında UKCA Etiketi ve Yanmazlık Sertifikası",
    category: "İngiltere Lojistik",
    date: "29 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    excerpt: "İngiliz standartlarına (BS 5852) uygun mobilya nakliyesinde verilmesi gereken test raporları ve ticari gümrük prosedürleri.",
    countryCode: "GB",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "ingiltere-zati-esya-tasimada-hmrc-tor1-basvuru-hatalari-ve-cozumler",
    title: "İngiltere TOR1 Başvurusunda En Sık Yapılan 5 Hata ve Reddi Önleme",
    category: "İngiltere Lojistik",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200",
    excerpt: "Kira sözleşmesi, faturalar ve ikametgah kanıtlarının HMRC sistemine eksik yüklenmesi sonucu oluşan vergi cezalarından korunma.",
    countryCode: "GB",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiye-ingiltere-deniz-konteyner-tasimaciligi-fcl-ve-lcl",
    title: "Ambarlı/Mersin'den London Gateway Limanına Deniz Konteyner Nakliyesi",
    category: "İngiltere Lojistik",
    date: "27 Eylül 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    excerpt: "20'lik ve 40'lık HC FCL konteyner ile LCL parsiyel ev eşyası veya ticari kargo gemi seferleri ve gümrük ordino masrafları.",
    countryCode: "GB",
    serviceType: "Deniz/Hava/Multimodal"
  },
  {
    slug: "ingiltereye-ev-esyasi-tasima-fiyatlari-2026-güncel-navlun-rehbri",
    title: "Türkiye - İngiltere Ev Taşıma Fiyatları 2026 (Metreküp ve Sterlin Maliyeti)",
    category: "İngiltere Lojistik",
    date: "26 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200",
    excerpt: "İngiltere'ye ev nakliyesinde Sterlin (GBP) bazlı gümrük harçları, sigorta primleri ve mesafe bazlı tır nakliye fiyat endeksi.",
    countryCode: "GB",
    serviceType: "Zati Eşya"
  },

  // ==========================================
  // 3. BATI AVRUPA LOJİSTİK (HOLLANDA, FRANSA, BELÇİKA, İSVİÇRE) (10 REHBER)
  // ==========================================
  {
    slug: "turkiyeden-hollandaya-ev-esyasi-ve-douane-gumruklene-rehberi",
    title: "Türkiye'den Hollanda'ya Ev Eşyası ve Douane Gümrükleşme Rehberi",
    category: "Batı Avrupa Lojistik",
    date: "05 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200",
    excerpt: "Rotterdam ve Amsterdam varışlı gönderilerde Hollanda Gümrüğü (Douane) muafiyet şartları ve BRP ikametgah kayıt kontrolü.",
    countryCode: "NL",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-fransaya-zati-esya-ve-cerfa-10070-gumruk-beyani",
    title: "Türkiye'den Fransa'ya Ev Eşyası ve Cerfa 10070 Gümrük Muafiyeti",
    category: "Batı Avrupa Lojistik",
    date: "04 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
    excerpt: "Fransa gümrük idaresi (Douane Française) nezdinde Cerfa Formu ile kişisel eşyaların %20 TVA vergisinden muaf gümrüklenmesi.",
    countryCode: "FR",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-isvicreye-ev-esyasi-tasima-ve-formular-1844-rehberi",
    title: "Türkiye'den İsviçre'ye Ev Eşyası Taşıma ve Formular 18.44 Gümrükleme",
    category: "Batı Avrupa Lojistik",
    date: "03 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200",
    excerpt: "AB dışı İsviçre Federal Gümrük İdaresi (BAZG) standartlarında Formular 18.44 (Übersiedlungsgut) ile vergisiz eşya nakli.",
    countryCode: "CH",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-belcikaya-parsiyel-kargo-ve-antwerpen-liman-lojistigi",
    title: "Türkiye'den Belçika'ya Parsiyel Kargo ve Anvers Limanı Ticari Sevkiyatı",
    category: "Batı Avrupa Lojistik",
    date: "02 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=1200",
    excerpt: "Brüksel, Anvers ve Gent şehirlerine haftalık düzenli parsiyel tır çıkışları, T1 transit belgeleri ve gümrük işlemleri.",
    countryCode: "BE",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "hollandaya-frigo-sogutmali-cicek-ve-gida-lojistigi",
    title: "Türkiye'den Hollanda'ya Frigo Tır ile Çiçek, Sebze ve İlaç Taşımacılığı",
    category: "Batı Avrupa Lojistik",
    date: "01 Ekim 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1200",
    excerpt: "Hassas sıcaklık kontrollü frigo araçlar ile FloraHolland ve Amsterdam merkezli soğuk zincir lojistiği.",
    countryCode: "NL",
    serviceType: "Frigo"
  },
  {
    slug: "paris-lyon-marseille-express-minivan-teslimatlari",
    title: "İstanbul'dan Paris, Lyon ve Marsilya'ya 48 Saat Express Minivan Sevkiyat",
    category: "Batı Avrupa Lojistik",
    date: "30 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?q=80&w=1200",
    excerpt: "Fransa'ya acil yedek parça, tekstil ve hassas kişisel eşyaların kapalı kasa minivanlar ile express sevkiyatı.",
    countryCode: "FR",
    serviceType: "Express"
  },
  {
    slug: "isvicre-zati-esya-tasimada-bazg-transit-ve-kanton-muafiyetleri",
    title: "İsviçre Kanton Gümrük Düzenlemeleri ve Zati Eşya Tescil Prosedürleri",
    category: "Batı Avrupa Lojistik",
    date: "29 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200",
    excerpt: "Zürih, Cenevre ve Bern kantonlarına giriş yapan tırların AB transit belgesi T2CH kapatma ve muayene süreçleri.",
    countryCode: "CH",
    serviceType: "Zati Eşya"
  },
  {
    slug: "rotterdam-limani-uzerinden-bati-avrupaya-multimodal-konteyner-lojistigi",
    title: "Rotterdam Limanı Merkezli Batı Avrupa Multimodal Demiryolu ve Nehir Lojistiği",
    category: "Batı Avrupa Lojistik",
    date: "28 Eylül 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    excerpt: "Rotterdam'a deniz yoluyla ulaşan konteynerlerin Ren Nehri barge ve tren ağlarıyla Fransa, Almanya ve Belçika'ya iç nakli.",
    countryCode: "NL",
    serviceType: "Deniz/Hava/Multimodal"
  },
  {
    slug: "fransaya-ev-esyasi-tasimada-nakliye-fiyatlari-ve-ambalajlama",
    title: "Türkiye - Fransa Ev Taşıma Maliyetleri ve Profesyonel Ambalaj Standardı",
    category: "Batı Avrupa Lojistik",
    date: "27 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    excerpt: "Fransa nakliyesinde m³ hesaplama, asansörlü taşıma ve gümrük müşavirliği ücretlerini içeren kapsamlı fiyat analizi.",
    countryCode: "FR",
    serviceType: "Zati Eşya"
  },
  {
    slug: "belcika-ve-hollandada-e-ticaret-ihracat-lojistigi-ve-vat-vergi-depolari",
    title: "Hollanda ve Belçika E-Ticaret Depoları (Fulfillment) ve KDV İstisnası",
    category: "Batı Avrupa Lojistik",
    date: "26 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200",
    excerpt: "AB e-ticaret satışlarında Hollanda Artikel 23 KDV erteleme lisansı ile gümrükte nakit KDV ödemeden depolama yapma.",
    countryCode: "NL",
    serviceType: "Ticari Kargo"
  },

  // ==========================================
  // 4. KUZEY AVRUPA & İSKANDİNAVYA LOJİSTİK (10 REHBER)
  // ==========================================
  {
    slug: "turkiyeden-isvece-ev-esyasi-tasimaciligi-ve-tullverket-gumruklene",
    title: "Türkiye'den İsveç'e Ev Eşyası Taşıma ve İsveç Gümrüğü (Tullverket) Beyanı",
    category: "Kuzey Avrupa Lojistik",
    date: "05 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200",
    excerpt: "Stokholm ve Göteburg varışlı nakliyelerde Tullverket muafiyet formu (TV 740.22) ile gümrüksüz ev eşyası transferi.",
    countryCode: "SE",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-norvece-zati-esya-ve-tolletaten-gumruk-muafiyeti",
    title: "Türkiye'den Norveç'e Ev Eşyası Nakli ve Norveç Gümrüğü (Tolletat) İşlemleri",
    category: "Kuzey Avrupa Lojistik",
    date: "04 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200",
    excerpt: "AB üyesi olmayan Norveç'e eşya naklinde RD 0030 formu ile gümrüksüz geçiş şartları ve Oslo gümrükleşme prosedürleri.",
    countryCode: "NO",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-danimarkaya-ev-esyasi-ve-ticari-tir-tasimaciligi",
    title: "Türkiye'den Danimarka'ya Ev Eşyası Taşıma ve SKAT Gümrük Muahedeleri",
    category: "Kuzey Avrupa Lojistik",
    date: "03 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1200",
    excerpt: "Kopenhag ve Arhus teslimatlarında Danimarka gümrük muafiyeti formu (Declaration 184) ve CPR numarası doğrulaması.",
    countryCode: "DK",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-finlandiyaya-ro-ro-ve-karayolu-kombine-tasimacilik",
    title: "Türkiye'den Finlandiya'ya Ro-Ro ve Karayolu Kombine Lojistik Rehberi",
    category: "Kuzey Avrupa Lojistik",
    date: "02 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1508182314917-2f41770215b0?q=80&w=1200",
    excerpt: "Helsinki ve Turku limanlarına feribot aktarmalı tır seferleri, TULLI gümrük denetimleri ve kış şartlarında güvenli lojistik.",
    countryCode: "FI",
    serviceType: "Deniz/Hava/Multimodal"
  },
  {
    slug: "iskandinavyaya-frigo-sogutmali-tir-ile-gida-ve-somon-lojistigi",
    title: "İskandinav Ülkelerine Frigo Tır ile Isı Kontrollü Ticari Nakliye",
    category: "Kuzey Avrupa Lojistik",
    date: "01 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1200",
    excerpt: "İsveç, Norveç ve Danimarka'ya -25°C dondurulmuş gıda, medikal malzeme ve deniz ürünlerinin iklim kontrollü taşınması.",
    countryCode: "SE",
    serviceType: "Frigo"
  },
  {
    slug: "stokholm-oslo-kopenhag-express-minivan-kargo-tasimaciligi",
    title: "İstanbul'dan İskandinav Başkentlerine 72 Saatte Express Minivan Sevkiyat",
    category: "Kuzey Avrupa Lojistik",
    date: "30 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1200",
    excerpt: "Öresund Köprüsü ve feribot hatları kullanılarak Norveç, İsveç ve Danimarka'ya kesintisiz minivan nakliye ve gümrük beyanı.",
    countryCode: "NO",
    serviceType: "Express"
  },
  {
    slug: "norvec-ve-isvec-gumruklerinde-personal-number-ile-esya-cekimi",
    title: "Personnummer ve D-Number İle İskandinavya Gümrüklerinde Eşya Çekimi",
    category: "Kuzey Avrupa Lojistik",
    date: "29 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    excerpt: "Kuzey ülkelerinde bireysel kimlik numaralarının gümrük idaresi sistemine tanımlanması ve beyanname onay hızı.",
    countryCode: "SE",
    serviceType: "Zati Eşya"
  },
  {
    slug: "iskandinavya-zorlu-kis-sartlarinda-gumruklu-tir-lojistigi-ve-cmr-sigortasi",
    title: "Kuzey Avrupa Kış Lojistiği: Ağır Kış Şartlarında CMR ve Ekstra Emtia Sigortası",
    category: "Kuzey Avrupa Lojistik",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=1200",
    excerpt: "Kar ve buzlanma dönemlerinde İskandinav tır filolarının ekipman standartları, zorunlu zincir/lastik mevzuatı ve sigorta güvencesi.",
    countryCode: "NO",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "isveç-ve-norvece-ev-esyasi-tasima-fiyat-endeksi-2026",
    title: "İskandinavya Ev Taşıma Fiyatları 2026 (SEK/NOK Bazlı Navlun ve Harçlar)",
    category: "Kuzey Avrupa Lojistik",
    date: "27 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200",
    excerpt: "İsveç kronu ve Norveç kronu paritelerine göre navlun bedelleri, gümrük açılış masrafları ve ev içi kurulum maliyetleri.",
    countryCode: "SE",
    serviceType: "Zati Eşya"
  },
  {
    slug: "baltik-ulkelerine-estonya-letonya-litvanya-karayolu-ve-gumruk-rehberi",
    title: "Türkiye'den Baltık Ülkelerine (Litvanya, Letonya, Estonya) Karayolu Lojistiği",
    category: "Kuzey Avrupa Lojistik",
    date: "26 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1200",
    excerpt: "Vilnius, Riga ve Tallinn noktalarına direkt tır seferleri, AB T1 transit belgesi yönetimi ve ticari kargo teslimatı.",
    countryCode: "LT",
    serviceType: "Ticari Kargo"
  },

  // ==========================================
  // 5. GÜNEY AVRUPA & AKDENİZ LOJİSTİK (10 REHBER)
  // ==========================================
  {
    slug: "turkiyeden-italyaya-karayolu-ve-ro-ro-lojistik-rehberi",
    title: "Türkiye'den İtalya'ya Ro-Ro ve Karayolu Lojistik Rehberi (Agenzia delle Dogane)",
    category: "Güney Avrupa Lojistik",
    date: "05 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1200",
    excerpt: "Pendik/Yalova - Trieste Ro-Ro hattı üzerinden İtalya gümrük muafiyeti ve zati eşya/ticari kargo nakliye adımları.",
    countryCode: "IT",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-ispanyaya-zati-esya-ve-ticari-tasimacilik-rehberi",
    title: "Türkiye'den İspanya'ya Ev Eşyası ve Agencia Tributaria Gümrük Rehberi",
    category: "Güney Avrupa Lojistik",
    date: "04 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200",
    excerpt: "Barselona ve Madrid başta olmak üzere İspanya gümrük muafiyet belgesi (Solicitud de Exención) ile kapıdan kapıya teslimat.",
    countryCode: "ES",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-portekize-ev-esyasi-ve-kargo-tasimaciligi",
    title: "Türkiye'den Portekiz'e Ev Eşyası Taşıma ve Lizbon Gümrük Muafiyeti",
    category: "Güney Avrupa Lojistik",
    date: "03 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200",
    excerpt: "Lizbon ve Porto varışlı nakliyelerde Portekiz Gümrüğü (Autoridade Tributária e Aduaneira) muafiyet şartları ve evrak hazırlığı.",
    countryCode: "PT",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-yunanistana-ev-esyasi-ve-ticari-kargo-tasimaciligi",
    title: "Türkiye'den Yunanistan'a Karayolu Ev Taşıma ve İpsala Gümrük Prosedürleri",
    category: "Güney Avrupa Lojistik",
    date: "02 Ekim 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200",
    excerpt: "Atina ve Selanik adrese teslimatlı ev nakliyelerinde sınır kapısı gümrükleme adımları ve T1 transit beyannamesi.",
    countryCode: "GR",
    serviceType: "Zati Eşya"
  },
  {
    slug: "trieste-limani-aktarmali-italya-ve-orta-avrupa-intermodal-lojistigi",
    title: "Trieste Limanı Aktarmalı İtalya ve Orta Avrupa Intermodal Tren Hattı",
    category: "Güney Avrupa Lojistik",
    date: "01 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
    excerpt: "Türkiye'den Ro-Ro ile geçen tır ve semi-treylerlerin Trieste limanından blok trenlerle Milano, Almanya ve Avusturya'ya sevki.",
    countryCode: "IT",
    serviceType: "Deniz/Hava/Multimodal"
  },
  {
    slug: "ispanya-ve-portekize-express-minivan-ile-48-saat-hizli-teslimat",
    title: "Madrid, Barselona ve Lizbon'a Express Minivan Araçlar İle Hızlı Taşıma",
    category: "Güney Avrupa Lojistik",
    date: "30 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200",
    excerpt: "Uzun mesafe Güney Avrupa güzergahında çift şoförlü express minivanlar ile hızlı, güvenli ve gümrük takipli teslimat.",
    countryCode: "ES",
    serviceType: "Express"
  },
  {
    slug: "italyadan-turkiyeye-ve-turkiyeden-italyaya-ototiv-ve-tekstil-lojistigi",
    title: "Türkiye - İtalya Ticari Kargo: Tekstil, Otomotiv Yedek Parça ve ATR Belgesi",
    category: "Güney Avrupa Lojistik",
    date: "29 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200",
    excerpt: "Milano ve Torino sanayi bölgelerinden Türkiye'ye veya Türkiye'den İtalya'ya karşılıklı ticari parsiyel ve komple tır nakliyesi.",
    countryCode: "IT",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "ispanyada-nie-numarasi-ve-zati-esya-gumruk-muafiyet-onaylari",
    title: "İspanya Gümrüğünde NIE Numarası İle Vergisiz Ev Eşyası Çekimi",
    category: "Güney Avrupa Lojistik",
    date: "28 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200",
    excerpt: "İspanya yabancılar kimlik numarası (NIE) ile gümrük sistemine kayıt olunması ve 12 aylık muafiyet süresinin takibi.",
    countryCode: "ES",
    serviceType: "Zati Eşya"
  },
  {
    slug: "guney-avrupa-frigo-lojistigi-zeytinyagi-sut-urunleri-ve-meyve-tasimaciligi",
    title: "İtalya, İspanya ve Yunanistan Frigo Tır Lojistiği (Sıcaklık Kontrollü Nakliye)",
    category: "Güney Avrupa Lojistik",
    date: "27 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    excerpt: "Akdeniz kuşağında hassas gıda, zeytinyağı ve kimyevi ürünlerin çift rejimli frigo tırlar ile güvenli sevkiyatı.",
    countryCode: "IT",
    serviceType: "Frigo"
  },
  {
    slug: "guney-avrupa-ev-tasima-fiyatlari-italya-ispanya-portekiz-navlun-analizi",
    title: "İtalya, İspanya ve Portekiz Ev Taşıma Fiyatları 2026 (Metreküp Bazlı Hesaplama)",
    category: "Güney Avrupa Lojistik",
    date: "26 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200",
    excerpt: "Güney Avrupa ülkelerine zati eşya nakliyesinde Ro-Ro bileti, otoyol geçiş ücretleri ve gümrük müşavirliği kalemleri.",
    countryCode: "ES",
    serviceType: "Zati Eşya"
  },

  // ==========================================
  // 6. DOĞU & ORTA AVRUPA LOJİSTİK (10 REHBER)
  // ==========================================
  {
    slug: "turkiyeden-polonyaya-ev-esyasi-ve-ticari-tir-tasimaciligi",
    title: "Türkiye'den Polonya'ya Ev Eşyası Taşıma ve Varşova Gümrükleşme Rehberi",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "05 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1519197924294-4ac97f111503?q=80&w=1200",
    excerpt: "Varşova, Krayova ve Wroclaw varışlı tır nakliyelerinde Polonya Gümrüğü (KAS) zati eşya muafiyet belgesi ve T1 transit işlemleri.",
    countryCode: "PL",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-avusturyaya-ev-esyasi-ve-zoll-gumruklene-rehberi",
    title: "Türkiye'den Avusturya'ya Ev Eşyası Taşıma (Zollamt Österreich Beyanı)",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "04 Ekim 2026",
    readTime: "8 dk okuma",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200",
    excerpt: "Viyana, Graz ve Linz şehirlerine yapılan nakliyelerde Avusturya Gümrük Dairesi Form ZLA130 ile vergisiz zati eşya girişi.",
    countryCode: "AT",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-cekya-ve-slovakya-ev-esyasi-ve-parsiyel-lojistik",
    title: "Türkiye'den Çekya ve Slovakya'ya Karayolu Nakliye ve Gümrük İşlemleri",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "03 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200",
    excerpt: "Mora ve Prag gümrüklerinde eşya boşaltma, teminatlı T1 kapama ve kapıdan kapıya ev eşyası teslimatı.",
    countryCode: "CZ",
    serviceType: "Zati Eşya"
  },
  {
    slug: "turkiyeden-macaristana-transit-gecis-ve-tir-gumruklene-proseduru",
    title: "Macaristan Transit Geçiş Belgeleri (BiReg) ve Tır Koridoru Yönetimi",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "02 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8a?q=80&w=1200",
    excerpt: "AB dış sınır olan Macaristan (Nagylak/Röszke) kapılarında tırların gümrük işlemleri, BiReg kaydı ve transit evrakı onayları.",
    countryCode: "HU",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "romanya-ve-bulgaristan-uzerinden-avrupa-karayolu-lojistik-koridoru",
    title: "Bulgaristan (Kapitan Andreevo) ve Romanya Sınır Geçişli Tır Lojistiği",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "01 Ekim 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
    excerpt: "Kapıkule çıkışlı Bulgaristan ve Romanya karayolu transit koridorunda gümrük sırası yönetimi, transit belgesi ve EORI işlemleri.",
    countryCode: "BG",
    serviceType: "Ticari Kargo"
  },
  {
    slug: "polonya-ve-avusturyaya-express-minivan-nakliye-cozumleri",
    title: "İstanbul'dan Viyana ve Varşova'ya 36-48 Saat Express Minivan Sevkiyat",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "30 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
    excerpt: "Doğu ve Orta Avrupa merkezlerine sınır beklemesi yaşamadan acil parsiyel kargo ve ev eşyalarının express minivan ile taşınması.",
    countryCode: "PL",
    serviceType: "Express"
  },
  {
    slug: "orta-avrupada-e-ticaret-ve-depolama-polonya-ve-cekya-fulfillment-merkezleri",
    title: "Polonya ve Çekya E-Ticaret Depoları Üzerinden Tüm AB'ye Dağıtım Lojistiği",
    category: "Doğu & Orta Avrupa Lojistik",
    date: "29 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    excerpt: "Düşük depolama maliyetleri sunan Orta Avrupa ülkelerinde mikro-ihracat, gümrük depolama ve fulfillment operasyonlarının yönetimi.",
    countryCode: "PL",
    serviceType: "Ticari Kargo"
  }
];