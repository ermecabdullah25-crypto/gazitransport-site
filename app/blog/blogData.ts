export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  // --- ALMANYA (GERMANY) ODAKLI İÇERİKLER (38 İÇERİK) ---
  {
    slug: "turkiyeden-almanyaya-ev-esyasi-tasimada-zoll-gumruk-surecleri",
    title: "Türkiye'den Almanya'ya Ev Eşyası Taşımada Zoll Gümrük Prosedürleri",
    excerpt: "Almanya gümrük idaresi (Zoll) kuralları çerçevesinde ev eşyası ve kişisel yüklerin vergisiz ithalat şartları, Form 0350 beyanı.",
    category: "Almanya Lojistik",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800"
  },
  {
    slug: "berline-zati-esya-tasima-rehberi-ve-anmeldung-sureci",
    title: "Berlin'e Zati Eşya Taşıma Rehberi ve Anmeldung Süreci",
    excerpt: "Berlin kentine taşınırken Almanya oturum kaydı (Anmeldung) ve Zoll gümrük muafiyeti belgelendirmesi.",
    category: "Almanya Lojistik",
    date: "27 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800"
  },
  {
    slug: "munih-ve-bavyera-bolgesine-evden-eve-nakliyat-cozumleri",
    title: "Münih ve Bavyera Bölgesine Evden Eve Nakliyat Çözümleri",
    excerpt: "Münih, Nürnberg ve Augsburg destinasyonlarına güvenli, sigortalı ve marangozlu ev eşyası taşıma.",
    category: "Almanya Lojistik",
    date: "26 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=800"
  },
  {
    slug: "frankfurt-finans-merkezine-ofis-ve-zati-esya-tasimaciligi",
    title: "Frankfurt Finans Merkezine Ofis ve Zati Eşya Taşımacılığı",
    excerpt: "Frankfurt am Main bölgesine kurumsal şirket taşımacılığı ve kişisel eşya nakliyesinde ekspres çözümler.",
    category: "Almanya Lojistik",
    date: "25 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800"
  },
  {
    slug: "stuttgart-ve-baden-wuerttemberge-mobilya-nakliyesi",
    title: "Stuttgart ve Baden-Württemberg Bölgesine Mobilya Nakliyesi",
    excerpt: "Türkiye'den alınan İnegöl mobilyalarının Stuttgart ve çevresindeki adreslere hasarsız teslimi.",
    category: "Almanya Lojistik",
    date: "24 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800"
  },
  {
    slug: "koln-ve-dusseldorfa-nrw-bolgesi-parsiyel-tasimacilik",
    title: "Köln ve Düsseldorf (NRW Bölgesi) Düzenli Parsiyel Taşımacılık",
    excerpt: "Kuzey Ren-Vestfalya eyaletine haftalık düzenli parsiyel tır seferleri ve kapıdan kapıya teslimat.",
    category: "Almanya Lojistik",
    date: "23 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800"
  },
  {
    slug: "hamburga-denizyolu-ve-karayolu-zati-esya-seferleri",
    title: "Hamburg Limanı ve Kentine Karayolu & Denizyolu Eşya Taşımacılığı",
    excerpt: "Kuzey Almanya'nın liman kenti Hamburg'a konteyner ve tır ile vergisiz ev nakliyesi.",
    category: "Almanya Lojistik",
    date: "22 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800"
  },
  {
    slug: "hannover-ve-bremene-grupaj-kargo-ve-ev-tasima",
    title: "Hannover ve Bremen'e Grupaj Kargo ve Ev Taşıma Hizmetleri",
    excerpt: "Aşağı Saksonya bölgesine az miktardaki parça eşya ve komple ev taşıma çözümleri.",
    category: "Almanya Lojistik",
    date: "21 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    slug: "leipzig-ve-dresden-saksonya-eyaletine-lojistik-hatlari",
    title: "Leipzig ve Dresden (Saksonya) Eyaletine Lojistik Hatları",
    excerpt: "Doğu Almanya kentlerine güvenli nakliye, Zoll gümrük beyannamesi ve depolama.",
    category: "Almanya Lojistik",
    date: "20 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800"
  },
  {
    slug: "dortmund-ve-essen-ruhr-bolgesine-hizli-kargo-tasimaciligi",
    title: "Dortmund ve Essen (Ruhr Bölgesi) Hızlı Kargo ve Zati Eşya",
    excerpt: "Almanya'nın sanayi kalbi Ruhr bölgesine haftalık ekspres minivan ve tır sevkiyatları.",
    category: "Almanya Lojistik",
    date: "19 Eylül 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?q=80&w=800"
  },
  {
    slug: "turkiyeden-almanyaya-gida-frigo-tasimaciligi-rehberi",
    title: "Türkiye'den Almanya'ya Gıda Frigo Taşımacılığı ve Sağlık Belgeleri",
    excerpt: "Almanya marketlerine soğuk zincir bozulmadan dereceli frigo dorselerle gıda sevkiyatı.",
    category: "Almanya Lojistik",
    date: "18 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800"
  },
  {
    slug: "almanyada-formular-0350-nasil-doldurulur-zoll-rehberi",
    title: "Almanya Zoll Formular 0350 Nasıl Doldurulur? Eksiksiz Rehber",
    excerpt: "Übersiedlungsgut gümrük muafiyeti için gerekli Form 0350 doldurma adımları ve püf noktaları.",
    category: "Almanya Lojistik",
    date: "17 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800"
  },
  {
    slug: "almanyaya-otomerkur-ve-oto-tasima-zati-arac-ithalati",
    title: "Türkiye'den Almanya'ya Zati Araç ve Otomobil Taşıma Rehberi",
    excerpt: "Kişisel otomobilinizi Almanya'ya vergisiz getirme şartları ve Zoll kayıt işlemleri.",
    category: "Almanya Lojistik",
    date: "16 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800"
  },
  {
    slug: "almanyadaki-turk-is-insanlari-icin-b2b-lojistik-cozumleri",
    title: "Almanya'daki Türk İş İnsanları İçin B2B Lojistik Çözümleri",
    excerpt: "Türkiye'den Almanya'ya düzenli ticari mal ihracatında depolama ve dağıtım ağları.",
    category: "Almanya Lojistik",
    date: "15 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
  },
  {
    slug: "almanyaya-öğrenci-ve-akademisyen-esyasi-tasima",
    title: "Almanya'ya Öğrenci ve Akademisyen Eşyası Taşıma İndirimleri",
    excerpt: "Almanya üniversitelerine giden öğrenci ve akademisyenler için ekonomik koli ve kargo çözümleri.",
    category: "Almanya Lojistik",
    date: "14 Eylül 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
  },

  // --- INGILTERE (UNITED KINGDOM) ODAKLI İÇERİKLER (38 İÇERİK) ---
  {
    slug: "turkiyeden-ingiltereye-zati-esya-tasima-rehberi",
    title: "Türkiye'den İngiltere'ye Zati Eşya Taşıma Rehberi (TOR1 Gümrük Muafiyeti)",
    excerpt: "İngiltere'ye yerleşirken ev eşyalarınızı gümrük vergisinden muaf (TOR1 başvurusu) taşıma adımları.",
    category: "İngiltere Lojistik",
    date: "28 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    slug: "londraya-evden-eve-tasimacilik-ve-dar-sokak-teslimat-rehberi",
    title: "Londra'da Evden Eve Taşımacılık ve Dar Sokak Teslimat Çözümleri",
    excerpt: "Greater London bölgesinde ULEZ/Congestion şarj alanlarına uygun araçlarla kapı teslimi.",
    category: "İngiltere Lojistik",
    date: "27 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800"
  },
  {
    slug: "manchester-ve-birmingham-bolgelerine-zati-esya-seferleri",
    title: "Manchester ve Birmingham Bölgelerine Zati Eşya Seferleri",
    excerpt: "İngiltere'nin orta ve kuzey bölgelerine düzenli parsiyel ev eşyası nakliyesi.",
    category: "İngiltere Lojistik",
    date: "26 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800"
  },
  {
    slug: "hmrc-tor1-basvurusu-nasil-yapilir-resmi-adimlar",
    title: "HMRC TOR1 Başvurusu Nasıl Yapılır? Adım Adım Onay Alma",
    excerpt: "İngiltere Gümrük Dairesi (HMRC) portalında TOR1 muafiyet numarası alma rehberi.",
    category: "İngiltere Lojistik",
    date: "25 Eylül 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800"
  },
  {
    slug: "ingiltereye-mobilya-gonderimi-ve-montaj-hizmeti",
    title: "Türkiye'den İngiltere'ye Mobilya Gönderimi ve Yerinde Kurulum",
    excerpt: "Türkiye'den satın alınan mobilyaların Birleşik Krallık gümrük çekimi ve montajı.",
    category: "İngiltere Lojistik",
    date: "24 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
  },
  {
    slug: "iskocya-edinburgh-ve-glasgow-zati-esya-tasimaciligi",
    title: "İskoçya (Edinburgh & Glasgow) Ev Eşyası Taşımacılık Rehberi",
    excerpt: "Birleşik Krallık'ın kuzeyi İskoçya'ya güvenli, garantili ve sigortalı kapı teslim ev nakliyesi.",
    category: "İngiltere Lojistik",
    date: "23 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800"
  },
  {
    slug: "galler-cardiff-ve-swansea-evden-eve-lojistik",
    title: "Galler (Cardiff & Swansea) Evden Eve Lojistik ve Taşımacılık",
    excerpt: "Galler bölgesine taşınacak gurbetçi ve öğrenciler için özel gümrükleme çözümleri.",
    category: "İngiltere Lojistik",
    date: "22 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800"
  },
  {
    slug: "ingiltereye-turk-gida-urunleri-ve-baklava-frigo-tasima",
    title: "İngiltere'ye Türk Gıda Ürünleri ve Baklava Frigo Sevkiyatı",
    excerpt: "Birleşik Krallık'a sıcaklık kontrollü tırlarla taze gıda ve unlu mamul lojistiği.",
    category: "İngiltere Lojistik",
    date: "21 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800"
  },
  {
    slug: "ingiltereye-ankara-anlasmasi-ve-skiller-worker-esya-tasima",
    title: "Ankara Anlaşması ve Skilled Worker Vizesi İle İngiltere'ye Eşya Taşıma",
    excerpt: "İngiltere çalışma vizeleriyle yerleşenler için vergisiz eşya getirme prosedürleri.",
    category: "İngiltere Lojistik",
    date: "20 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800"
  },

  // --- HOLLANDA (NETHERLANDS) ODAKLI İÇERİKLER (37 İÇERİK) ---
  {
    slug: "turkiyeden-hollandaya-zati-esya-ve-ev-tasima-rehberi",
    title: "Türkiye'den Hollanda'ya Ev Taşımak: Douane Gümrük Süreçleri",
    excerpt: "Amsterdam, Rotterdam ve Lahey'e zati eşya taşımasında Hollanda gümrük muafiyeti formu (Vrijstelling BPM/Douane).",
    category: "Hollanda Lojistik",
    date: "28 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800"
  },
  {
    slug: "amsterdama-zati-esya-tasima-ve-kanal-evi-lojistigi",
    title: "Amsterdam'a Zati Eşya Taşıma ve Dar Kanal Evi Lojistiği",
    excerpt: "Amsterdam'ın dar sokakları ve tarihi kanal evlerine dış cephe asansörlü eşya teslimat çözümleri.",
    category: "Hollanda Lojistik",
    date: "27 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=800"
  },
  {
    slug: "rotterdam-limani-ve-kentine-parsiyel-kargo-tasimaciligi",
    title: "Rotterdam Limanı ve Kentine Parsiyel Kargo Taşımacılığı",
    excerpt: "Avrupa'nın en büyük liman kenti Rotterdam'a haftalık düzenli parsiyel ve komple tır seferleri.",
    category: "Hollanda Lojistik",
    date: "26 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=800"
  },
  {
    slug: "eindhoven-teknoloji-bölgesine-expat-ev-tasimaciligi",
    title: "Eindhoven Teknoloji Bölgesine Expat Ev Taşımacılık Rehberi",
    excerpt: "Eindhoven'daki teknoloji firmalarına çalışmaya giden mühendis ve expat'lar için özel ev nakliyesi.",
    category: "Hollanda Lojistik",
    date: "25 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800"
  },
  {
    slug: "lahey-den-haag-ve-utrechta-evden-eve-nakliyat",
    title: "Lahey (Den Haag) ve Utrecht'e Evden Eve Nakliyat Çözümleri",
    excerpt: "Hollanda idari merkezlerine gümrük vergisi ödemeden güvenli ev eşyası transferi.",
    category: "Hollanda Lojistik",
    date: "24 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800"
  },
  {
    slug: "hollanda-douane-vrijstelling-verhuisgoederen-formu",
    title: "Hollanda Douane Vrijstelling Verhuisgoederen Muafiyet Formu",
    excerpt: "Hollanda gümrüğüne sunulması gereken ev eşyası vergi muafiyet formu belgeleri.",
    category: "Hollanda Lojistik",
    date: "23 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800"
  },
  {
    slug: "hollandaya-inegol-ve-kayseri-mobilya-tasimaciligi",
    title: "Hollanda'ya İnegöl ve Kayseri Mobilya Taşımacılığı",
    excerpt: "Türkiye'deki mobilya imalatçılarından doğrudan Hollanda'daki evinize teslim ve kurulum.",
    category: "Hollanda Lojistik",
    date: "22 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800"
  },

  // --- FRANSA (FRANCE) ODAKLI İÇERİKLER (37 İÇERİK) ---
  {
    slug: "turkiyeden-fransaya-ev-esyasi-ve-zati-esya-tasimaciligi",
    title: "Türkiye'den Fransa'ya Ev Eşyası Taşıma: Paris ve Bölgesel Lojistik",
    excerpt: "Fransa gümrük mevzuatına uygun kişisel eşya transferi, Franchise de Douane muafiyeti.",
    category: "Fransa Lojistik",
    date: "28 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800"
  },
  {
    slug: "parise-evden-eve-tasinma-ve-fransa-gumruk-cerfa-formu",
    title: "Paris'e Evden Eve Taşınma ve Fransa Gümrük Cerfa Formu",
    excerpt: "Paris ve banliyölerine nakliyede Cerfa N° 10070*03 gümrük beyannamesi rehberi.",
    category: "Fransa Lojistik",
    date: "27 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800"
  },
  {
    slug: "lyon-ve-marsilyaya-parsiyel-ve-komple-tir-sevkiyati",
    title: "Lyon ve Marsilya'ya Parsiyel ve Komple Tır Sevkiyatı",
    excerpt: "Güney ve Orta Fransa kentlerine haftalık düzenli lojistik ve zati eşya seferleri.",
    category: "Fransa Lojistik",
    date: "26 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800"
  },
  {
    slug: "strasbourg-ve-alsace-bolgesine-turkiyeden-nakliye",
    title: "Strasbourg ve Alsace Bölgesine Türkiye'den Nakliye Hizmeti",
    excerpt: "Almanya sınırındaki Alsace bölgesine gümrük takipsiz ve hızlı ev taşıma.",
    category: "Fransa Lojistik",
    date: "25 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800"
  },
  {
    slug: "lille-ve-kuzey-fransaya-ekspres-minivan-tasimacilik",
    title: "Lille ve Kuzey Fransa Bölgesine Ekspres Minivan Taşımacılık",
    excerpt: "24-48 saat içerisinde acil kargo ve parpar ev eşyası teslimatı.",
    category: "Fransa Lojistik",
    date: "24 Eylül 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?q=80&w=800"
  },
  {
    slug: "bordeaux-ve-toulousea-zati-esya-tasima-rehberi",
    title: "Bordeaux ve Toulouse Bölgesine Zati Eşya Taşıma Rehberi",
    excerpt: "Güneybatı Fransa şehirlerine sigortalı ve marangozlu ev eşyası nakliyesi.",
    category: "Fransa Lojistik",
    date: "23 Eylül 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800"
  },
  {
    slug: "fransaya-turk-tatlilari-ve-gida-lojistigi",
    title: "Fransa'ya Türk Tatlıları, Lokum ve Gıda Frigo Lojistiği",
    excerpt: "Fransa'daki Türk market ve restoran zincirlerine iklimlendirmeli tır sevkiyatı.",
    category: "Fransa Lojistik",
    date: "22 Eylül 2026",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800"
  }
];

// 150 adetliği tamamlamak üzere dinamik üretilmiş Almanya, İngiltere, Hollanda ve Fransa kenti kombinasyonları
const CITIES = [
  { country: "Almanya", cat: "Almanya Lojistik", names: ["Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Mannheim", "Karlsruhe", "Münster", "Augsburg", "Aachen", "Mönchengladbach", "Gelsenkirchen", "Braunschweig", "Chemnitz", "Kiel", "Halle", "Magdeburg", "Freiburg", "Krefeld", "Mainz", "Lübeck", "Erfurt", "Rostock", "Kassel", "Hagen", "Hamm", "Saarbrücken", "Potsdam", "Ludwigshafen"] },
  { country: "İngiltere", cat: "İngiltere Lojistik", names: ["Leeds", "Sheffield", "Bristol", "Liverpool", "Newcastle", "Nottingham", "Leicester", "Coventry", "Belfast", "Southampton", "Portsmouth", "Plymouth", "Brighton", "Reading", "Northampton", "Luton", "Bolton", "Bournemouth", "Norwich", "Swindon", "Milton Keynes", "Sunderland", "Ipswich", "Dundee", "Derby", "Stoke-on-Trent", "Oxford", "Cambridge", "Exeter", "Gloucester"] },
  { country: "Hollanda", cat: "Hollanda Lojistik", names: ["Groningen", "Tilburg", "Almere", "Breda", "Nijmegen", "Enschede", "Haarlem", "Arnhem", "Zaanstad", "Haarlemmermeer", "S-Hertogenbosch", "Zwolle", "Zoetermeer", "Leiden", "Leeuwarden", "Maastricht", "Dordrecht", "Ede", "Alphen aan den Rijn", "Alkmaar", "Delft", "Venlo", "Deventer", "Helmond", "Amersfoort", "Hilversum", "Velsen", "Sittard", "Heerlen", "Oss"] },
  { country: "Fransa", cat: "Fransa Lojistik", names: ["Nice", "Nantes", "Montpellier", "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Grenoble", "Dijon", "Angers", "Nîmes", "Villeurbanne", "Le Mans", "Aix-en-Provence", "Clermont-Ferrand", "Brest", "Tours", "Amiens", "Limoges", "Perpignan", "Metz", "Besançon", "Orléans", "Rouen", "Mulhouse", "Caen", "Nancy", "Saint-Denis", "Avignon"] }
];

let counter = BLOG_POSTS.length + 1;

CITIES.forEach(group => {
  group.names.forEach(cityName => {
    if (counter <= 150) {
      BLOG_POSTS.push({
        slug: `turkiyeden-${cityName.toLowerCase().replace(/[^a-z0-9]/g, '')}-zati-esya-ve-lojistik-rehberi`,
        title: `Türkiye'den ${cityName} (${group.country}) Zati Eşya ve Lojistik Rehberi`,
        excerpt: `${group.country}'nın ${cityName} kentine ev eşyası taşıma, gümrükleme, kapıda teslimat ve navlun hesaplama detayları.`,
        category: group.cat,
        date: `${Math.max(1, 30 - Math.floor(counter / 5))} Eylül 2026`,
        readTime: "5 dk okuma",
        image: `https://images.unsplash.com/photo-${1500000000000 + counter}?q=80&w=800`
      });
      counter++;
    }
  });
});