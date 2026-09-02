'use client';

import React, { useState } from 'react';
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
  Lock
} from 'lucide-react';
import Link from 'next/link';

// Sosyal Medya İkon Komponentleri
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.592 0 9 1.838 9 5.068V8z"/>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      slug: "ticari-parsiyel-tasimacilik",
      icon: <Truck className="w-7 h-7 text-orange-600" />,
      title: "Gazitransport Ticari & Parsiyel Taşımacılık",
      description: "Gazitransport güvencesiyle Türkiye’den Avrupa ve İngiltere’ye parsiyel ve komple ticari yüklerinizi zamanında ulaştırıyoruz.",
      badge: "Ticari Yük"
    },
    {
      slug: "evden-eve-zati-esya",
      icon: <HomeIcon className="w-7 h-7 text-orange-600" />,
      title: "Gazitransport Evden Eve & Zati Eşya",
      description: "Ev eşyalarınız ve zati yükleriniz Gazitransport'un uzman ambalajlama ekibiyle Türkiye ve Avrupa arasında kapıdan kapıya taşınır.",
      badge: "Zati Eşya"
    },
    {
      slug: "mobilya-tasimaciligi",
      icon: <Armchair className="w-7 h-7 text-orange-600" />,
      title: "Gazitransport Mobilya Taşımacılığı",
      description: "Büyük hacimli ve hassas mobilyalarınız Gazitransport korumalı paketleme standartları ile adrese teslim edilir.",
      badge: "Hassas Taşıma"
    },
    {
      slug: "gida-kargosu-lojistigi",
      icon: <Apple className="w-7 h-7 text-orange-600" />,
      title: "Gazitransport Gıda Kargosu & Lojistiği",
      description: "Taze, paketli ve toptan gıda ürünleriniz Gazitransport iklimlendirmeli ve hijyenik lojistik ağımızla sevk edilir.",
      badge: "Gıda Lojistiği"
    },
    {
      slug: "dekorasyon-yapi-urunleri",
      icon: <Building2 className="w-7 h-7 text-orange-600" />,
      title: "Gazitransport Dekorasyon & Yapı Ürünleri",
      description: "Tabela, kırılabilir yapı malzemeleri ve dekorasyon ürünleri Gazitransport yüksek güvenlikli nakliye hattında.",
      badge: "Yapı & Tabela"
    },
    {
      slug: "multimodal-tasimacilik",
      icon: <Ship className="w-7 h-7 text-orange-600" />,
      title: "Gazitransport Multimodal Taşımacılık",
      description: "Gazitransport kara, hava ve deniz seçeneklerini birleştirerek bütçenize en uygun uçtan uca rotayı oluşturur.",
      badge: "Kara / Hava / Deniz"
    }
  ];

  const steps = [
    { num: "01", title: "Talep Analizi", desc: "Yükünüzün türü ve rotası incelenerek özel fiyatlandırılır." },
    { num: "02", title: "Güvenli Ambalajlama", desc: "Uluslararası nakliyeye uygun koruyucu ambalaj yapılır." },
    { num: "03", title: "Gümrük Çözümleri", desc: "Çıkış ve varış gümrük prosedürleri yönetilir." },
    { num: "04", title: "Uluslararası Nakliye", desc: "Filomuz yükü hedef ülkeye hızla ulaştırır." },
    { num: "05", title: "Kapıda Teslimat", desc: "Varış noktasında sigortalı teslimat tamamlanır." }
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
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-500 selection:text-white relative">
      
      {/* SAĞ ALT KÖŞE SABİT HIZLI ARAMA BUTONU */}
      <a
        href="tel:+905368310636"
        aria-label="Hemen Ara"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white"
      >
        <Phone className="w-7 h-7 animate-bounce" />
      </a>

      {/* 1. TOP BAR & HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="bg-slate-900 text-slate-300 py-2 text-xs border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-6">
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
              <a href="tel:+905368310636" className="hover:text-orange-400 transition flex items-center gap-1.5 font-semibold text-emerald-400">
                <Phone className="w-3.5 h-3.5 shrink-0" /> +90 536 831 06 36
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* METİN LOGO */}
            <Link href="/" className="flex flex-col group py-1">
              <div className="text-xl sm:text-3xl font-black tracking-tight leading-none text-slate-900 group-hover:opacity-90 transition">
                GAZI<span className="text-orange-600">TRANSPORT</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="h-[2px] w-3 sm:w-4 bg-orange-600 rounded-full"></span>
                <span className="text-[9px] sm:text-[11px] font-extrabold text-slate-500 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  Uluslararası Lojistik
                </span>
              </div>
            </Link>

            {/* MASAÜSTÜ MENÜ */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <Link href="/" className="text-orange-600 hover:text-orange-700 transition">Ana Sayfa</Link>
              <a href="#hizmetlerimiz" className="hover:text-orange-600 transition">Hizmetlerimiz</a>
              <a href="#surec" className="hover:text-orange-600 transition">Operasyon Süreci</a>
              <Link href="/gonderi-hesaplama" className="hover:text-orange-600 transition font-bold text-slate-900">Gönderi Hesaplama</Link>
              <Link href="/blog" className="flex items-center gap-1.5 text-slate-700 hover:text-orange-600 transition">
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span>Blog</span>
              </Link>
              <a href="#iletisim" className="hover:text-orange-600 transition">İletişim</a>
            </nav>

            {/* MASAÜSTÜ & MOBİL BUTONLAR */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/gonderi-hesaplama"
                className="hidden sm:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-md shadow-orange-600/20 transition duration-200 text-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Gönderi Hesaplama</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menüyü Aç/Kapat"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBİL AÇILIR MENÜ */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-base font-semibold text-orange-600 bg-orange-50"
            >
              <HomeIcon className="w-5 h-5" /> Ana Sayfa
            </Link>
            <a 
              href="#hizmetlerimiz" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Truck className="w-5 h-5 text-slate-400" /> Hizmetlerimiz
            </a>
            <a 
              href="#surec" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Clock className="w-5 h-5 text-slate-400" /> Operasyon Süreci
            </a>
            <Link 
              href="/gonderi-hesaplama" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-50"
            >
              <Calculator className="w-5 h-5 text-orange-600" /> Gönderi Hesaplama
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              <BookOpen className="w-5 h-5 text-orange-600" /> Blog
            </Link>
            <a 
              href="#iletisim" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Phone className="w-5 h-5 text-slate-400" /> İletişim
            </a>

            <div className="pt-2">
              <Link
                href="/gonderi-hesaplama"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white font-bold py-3 rounded-xl shadow-md text-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Hemen Fiyat Hesapla</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="anasayfa" className="relative bg-gradient-to-b from-slate-50 via-orange-50/30 to-white py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm text-orange-800 font-bold mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse shrink-0" />
                <span>Gazitransport Uluslararası Taşımacılık Ağı</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-6">
                Türkiye’den Avrupa & İngiltere’ye <br className="hidden sm:block" />
                <span className="text-orange-600">Gazitransport</span> Güvencesiyle Lojistik
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8">
                Gazitransport; ticari yüklerinizden gıda kargolarınıza, özel mobilya taşımacılığından zati ev eşyalarınıza kadar tüm sevkiyat sürecini uçtan uca yönetir.
              </p>

              {/* ARAMA BUTONLARI VE HESAPLAMA GRUBU */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* DOĞRUDAN ARAMA YAPAN YEŞİL BUTON */}
                <a
                  href="tel:+905368310636"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-green-600/25 transition duration-200 text-sm sm:text-base w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>Hemen Ara (+90 536 831 06 36)</span>
                </a>

                <Link
                  href="/gonderi-hesaplama"
                  className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-orange-600/25 transition duration-200 text-sm sm:text-base w-full sm:w-auto"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Anında m³ Hesapla</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Gazitransport Lojistik Filosu"
                  className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HİZMETLERİMİZ */}
      <section id="hizmetlerimiz" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-widest uppercase">GAZITRANSPORT HİZMET PORTFÖYÜ</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">Uluslararası Lojistik Çözümlerimiz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-orange-500/50 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition duration-300 shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition">{service.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{service.description}</p>
              </div>

              <Link 
                href={`/hizmetler/${service.slug}`}
                className="inline-flex items-center justify-between w-full text-orange-600 font-bold hover:text-orange-700 text-xs sm:text-sm pt-4 border-t border-slate-100 group-hover:border-orange-100 transition"
              >
                <span>Hizmet Detayı</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OPERASYON SÜRECİ */}
      <section id="surec" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-widest uppercase">GAZITRANSPORT İŞ MODELİ</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">İşletmeler İçin Uçtan Uca Operasyon</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-sm">
                <span className="text-3xl sm:text-4xl font-black text-orange-600 mb-2 sm:mb-3 block">{step.num}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer id="iletisim" className="bg-slate-900 text-white pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                GAZI<span className="text-orange-500">TRANSPORT</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">
                Uluslararası Lojistik
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Gazitransport, Türkiye’den Avrupa ülkeleri ve İngiltere’ye bireysel ve ticari yük taşımacılığı sunar.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">İletişim</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" /> 
                <a href="tel:+905368310636" className="hover:text-white transition truncate">
                  Telefon: +90 536 831 06 36
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" /> 
                <a href="mailto:info@gazicargo.com" className="hover:text-white transition truncate">
                  E-posta: info@gazicargo.com
                </a>
              </li>
            </ul>
          </div>

          {/* HIZLI BAĞLANTILAR VE YASAL SÖZLEŞMELER */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Hızlı Bağlantılar & Kurumsal</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/gonderi-hesaplama" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Gönderi Hesaplama
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-500 shrink-0" /> GaziTransport Blog
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
            <h4 className="text-white font-bold mb-4 text-sm">Sosyal Medya</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-orange-500 hover:bg-slate-800 text-slate-300 hover:text-white transition group shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition shrink-0">
                      <Icon />
                    </div>
                    <div className="truncate">
                      <span className="block text-xs font-semibold leading-none mb-1 truncate">{social.name}</span>
                      <span className="text-[10px] text-slate-400 truncate block">{social.handle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Gazitransport Uluslararası Lojistik. Tüm hakları saklıdır.
        </div>
      </footer>

    </main>
  );
}