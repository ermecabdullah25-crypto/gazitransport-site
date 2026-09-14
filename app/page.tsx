'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Home as HomeIcon, 
  Armchair, 
  Apple, 
  Building2, 
  Ship,
  Truck,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Calculator,
  BookOpen,
  ShieldCheck,
  Lock,
  Boxes
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.592 0 9 1.838 9 5.068V8z"/>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const services = [
    {
      slug: "ticari-parsiyel-tasimacilik",
      icon: <Truck className="w-6 h-6 text-orange-600" aria-hidden="true" />,
      title: "Gazitransport Ticari & Parsiyel Taşımacılık",
      description: "Türkiye’den Avrupa ve İngiltere’ye parsiyel ve komple ticari yüklerinizi zamanında ulaştırıyoruz.",
      badge: "Ticari Yük"
    },
    {
      slug: "evden-eve-zati-esya",
      icon: <HomeIcon className="w-6 h-6 text-orange-600" aria-hidden="true" />,
      title: "Gazitransport Evden Eve & Zati Eşya",
      description: "Ev eşyalarınız uzman ambalajlama ekibiyle Türkiye ve Avrupa arasında kapıdan kapıya taşınır.",
      badge: "Zati Eşya"
    },
    {
      slug: "mobilya-tasimaciligi",
      icon: <Armchair className="w-6 h-6 text-orange-600" aria-hidden="true" />,
      title: "Gazitransport Mobilya Taşımacılığı",
      description: "Büyük hacimli ve hassas mobilyalarınız korumalı paketleme standartları ile adrese teslim edilir.",
      badge: "Hassas Taşıma"
    },
    {
      slug: "gida-kargosu-lojistigi",
      icon: <Apple className="w-6 h-6 text-orange-600" aria-hidden="true" />,
      title: "Gazitransport Gıda Kargosu & Lojistiği",
      description: "Taze ve paketli gıda ürünleriniz iklimlendirmeli lojistik ağımızla güvenle sevk edilir.",
      badge: "Gıda Lojistiği"
    },
    {
      slug: "dekorasyon-yapi-urunleri",
      icon: <Building2 className="w-6 h-6 text-orange-600" aria-hidden="true" />,
      title: "Gazitransport Dekorasyon & Yapı Ürünleri",
      description: "Tabela ve kırılabilir yapı malzemeleri yüksek güvenlikli nakliye hattımızla taşınır.",
      badge: "Yapı & Tabela"
    },
    {
      slug: "multimodal-tasimacilik",
      icon: <Ship className="w-6 h-6 text-orange-600" aria-hidden="true" />,
      title: "Gazitransport Multimodal Taşımacılık",
      description: "Kara, hava ve deniz seçeneklerini birleştirerek bütçenize en uygun rotayı oluşturuyoruz.",
      badge: "Kara / Hava / Deniz"
    }
  ];

  const steps = [
    { num: "01", title: "Talep Analizi", desc: "Yük türü ve rota incelenerek özel fiyatlandırılır." },
    { num: "02", title: "Güvenli Ambalaj", desc: "Uluslararası standartta koruyucu ambalajlama yapılır." },
    { num: "03", title: "Gümrük Çözümleri", desc: "Çıkış ve varış gümrük prosedürleri tam yönetilir." },
    { num: "04", title: "Uluslararası Nakliye", desc: "Tır filomuz hedef ülkeye hızla sevkiyatı başlatır." },
    { num: "05", title: "Kapıda Teslimat", desc: "Adrese sigortalı teslimat tamamlanır." }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      handle: "@gazitransport_", 
      href: "https://www.instagram.com/gazitransport_/", 
      icon: InstagramIcon 
    },
    { 
      name: "Facebook", 
      handle: "Gazi Taşımacılık", 
      href: "https://www.facebook.com/people/Gazi-Ta%C5%9F%C4%B1mac%C4%B1l%C4%B1k/100077418739271/#", 
      icon: FacebookIcon 
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white relative">
      
      {/* SAĞ ALT KÖŞE HIZLI ARAMA */}
      <a
        href="tel:+905368310636"
        aria-label="Müşteri Hizmetlerini Arayın"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white"
      >
        <Phone className="w-6 h-6 animate-bounce" aria-hidden="true" />
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="bg-slate-900 text-slate-300 py-1.5 text-xs border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 truncate">
                <Globe className="w-3.5 h-3.5 text-orange-500 shrink-0" /> 
                <span className="truncate">TR ↔ Avrupa & İngiltere</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-500" /> 7/24 Destek
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="mailto:info@gazicargo.com" className="hidden md:flex hover:text-orange-400 transition items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-500" /> info@gazicargo.com
              </a>
              <a href="tel:+905368310636" className="hover:text-orange-400 transition flex items-center gap-1.5 font-bold text-emerald-400">
                <Phone className="w-3.5 h-3.5 shrink-0" /> +90 536 831 06 36
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex flex-col group py-1 shrink-0">
              <div className="text-xl sm:text-2xl xl:text-3xl font-black tracking-tight leading-none text-slate-900">
                GAZI<span className="text-orange-600">TRANSPORT</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-[2px] w-3 bg-orange-600 rounded-full"></span>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 tracking-[0.18em] uppercase">
                  Uluslararası Lojistik
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
              <Link href="/" className="text-orange-600 font-bold">Ana Sayfa</Link>
              <a href="#hizmetlerimiz" className="hover:text-orange-600 transition">Hizmetlerimiz</a>
              <a href="#surec" className="hover:text-orange-600 transition">Operasyon Süreci</a>
              <Link href="/blog" className="hover:text-orange-600 transition">Blog</Link>
              <a href="#iletisim" className="hover:text-orange-600 transition">İletişim</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/gonderi-hesaplama"
                className="hidden md:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-3 py-2 rounded-xl text-xs"
              >
                <HomeIcon className="w-3.5 h-3.5 text-orange-400" />
                <span>Ev Eşyası</span>
              </Link>

              <Link
                href="/ticari-hesaplama"
                className="hidden sm:inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-3 py-2 rounded-xl text-xs shadow-md shadow-orange-600/20"
              >
                <Boxes className="w-3.5 h-3.5" />
                <span>Ticari Yük</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menü"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-2xl">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-semibold text-orange-600 bg-orange-50">
              <HomeIcon className="w-4 h-4" /> Ana Sayfa
            </Link>
            <a href="#hizmetlerimiz" onClick={closeMenu} className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Truck className="w-4 h-4 text-slate-400" /> Hizmetlerimiz
            </a>
            <a href="#surec" onClick={closeMenu} className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Clock className="w-4 h-4 text-slate-400" /> Operasyon Süreci
            </a>
            <Link href="/blog" onClick={closeMenu} className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <BookOpen className="w-4 h-4 text-orange-600" /> Blog
            </Link>
            <a href="#iletisim" onClick={closeMenu} className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Phone className="w-4 h-4 text-slate-400" /> İletişim
            </a>
            <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
              <Link href="/gonderi-hesaplama" onClick={closeMenu} className="flex items-center justify-center gap-1 bg-slate-900 text-white font-bold py-2 px-2 rounded-lg text-xs">
                <HomeIcon className="w-3 h-3 text-orange-400" /> Ev Eşyası
              </Link>
              <Link href="/ticari-hesaplama" onClick={closeMenu} className="flex items-center justify-center gap-1 bg-orange-600 text-white font-bold py-2 px-2 rounded-lg text-xs">
                <Boxes className="w-3 h-3" /> Ticari Yük
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* 2. TIR GAZITRANSPORT ARKA PLANLI & TAM EKRANA SIĞAN HERO SECTION */}
      <section id="anasayfa" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-950 overflow-hidden py-10">
        
        {/* LOJİSTİK TIR ARKA PLAN GÖRSELİ */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
            alt="Gazitransport Uluslararası Taşımacılık Tırı"
            className="w-full h-full object-cover object-center scale-100 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 backdrop-blur-md rounded-full px-3 py-1 text-xs text-orange-300 font-bold mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping shrink-0" />
              <span>Türkiye ↔ Avrupa & İngiltere Kesintisiz Taşımacılık Hatları</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Gazitransport Filosuyla <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Güvenli & Hızlı
              </span> Uluslararası Taşımacılık
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Ticari yüklerinizden gıda lojistiğine, özel mobilya nakliyesinden ev eşyalarınıza tüm sevkiyat operasyonunu gümrükleme dahil kapıdan kapıya yönetiyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <Link
                href="/gonderi-hesaplama"
                className="group flex flex-col justify-between p-4 sm:p-5 bg-slate-900/85 hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 hover:border-orange-500 rounded-xl transition duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    Ev & Zati Eşya
                  </span>
                </div>
                <div>
                  <h2 className="font-bold text-white text-base mb-1 group-hover:text-orange-400 transition flex items-center justify-between">
                    Ev Eşyası Hesapla
                    <ArrowRight className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition" />
                  </h2>
                  <p className="text-xs text-slate-400">
                    Parça ve ev eşyalarınız için hacim ve fiyat hesaplayın.
                  </p>
                </div>
              </Link>

              <Link
                href="/ticari-hesaplama"
                className="group flex flex-col justify-between p-4 sm:p-5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl transition duration-300 shadow-xl border border-orange-400/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-black/20 text-white rounded">
                    Kurumsal Yük
                  </span>
                </div>
                <div>
                  <h2 className="font-bold text-white text-base mb-1 flex items-center justify-between">
                    Ticari Yük Hesapla
                    <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition" />
                  </h2>
                  <p className="text-xs text-orange-100">
                    Palet, tonaj ve ölçülere göre nakliye maliyeti oluşturun.
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-emerald-400" /> Anında Hesaplama
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Kapsamlı Sigorta
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" /> Gümrük Desteği
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HİZMETLERİMİZ */}
      <section id="hizmetlerimiz" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-orange-600 font-bold text-xs tracking-widest uppercase">GAZITRANSPORT HİZMET PORTFÖYÜ</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">Uluslararası Lojistik Çözümlerimiz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.slug} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-500/50 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100 shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition">{service.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{service.description}</p>
              </div>

              <Link 
                href={`/hizmetler/${service.slug}`}
                className="inline-flex items-center justify-between w-full text-orange-600 font-bold hover:text-orange-700 text-xs sm:text-sm pt-4 border-t border-slate-100 group-hover:border-orange-100 transition"
              >
                <span>Hizmet Detayı</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4. OPERASYON SÜRECİ */}
      <section id="surec" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-orange-600 font-bold text-xs tracking-widest uppercase">GAZITRANSPORT İŞ MODELİ</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">Uçtan Uca Operasyon Sürecimiz</h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <li key={idx} className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <span className="text-2xl sm:text-3xl font-black text-orange-600 mb-2 block">{step.num}</span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer id="iletisim" className="bg-slate-900 text-white pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-xl font-black uppercase tracking-tight text-white">
                GAZI<span className="text-orange-500">TRANSPORT</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
                Uluslararası Lojistik
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gazitransport, Türkiye’den Avrupa ülkeleri ve İngiltere’ye bireysel ve ticari yük taşımacılığı sunar.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 text-sm">İletişim</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" /> 
                <a href="tel:+905368310636" className="hover:text-white transition truncate">
                  +90 536 831 06 36
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" /> 
                <a href="mailto:info@gazicargo.com" className="hover:text-white transition truncate">
                  info@gazicargo.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/gonderi-hesaplama" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <HomeIcon className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Ev Eşyası Hesaplama
                </Link>
              </li>
              <li>
                <Link href="/ticari-hesaplama" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Ticari Yük Hesaplama
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Blog
                </Link>
              </li>
              <li>
                <Link href="/kvkk-aydinlatma-metni" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-500 shrink-0" /> KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-sozlesmesi" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Gizlilik Sözleşmesi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Sosyal Medya</h3>
            <div className="space-y-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:border-orange-500 text-slate-300 hover:text-white transition"
                  >
                    <div className="w-7 h-7 rounded bg-slate-900 flex items-center justify-center text-orange-500 shrink-0">
                      <Icon />
                    </div>
                    <div className="truncate">
                      <span className="block text-xs font-semibold leading-none mb-1">{social.name}</span>
                      <span className="text-[10px] text-slate-400 block">{social.handle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Gazitransport Uluslararası Lojistik. Tüm hakları saklıdır.
        </div>
      </footer>

    </main>
  );
}