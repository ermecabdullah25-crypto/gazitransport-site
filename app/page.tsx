'use client';

import React, { useState } from 'react';
import { 
  Truck, 
  Globe, 
  Home as HomeIcon, 
  Armchair, 
  Apple, 
  Building2, 
  Ship,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Calculator,
  BookOpen
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
  const [logoError, setLogoError] = useState(false);

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
    { num: "01", title: "Gazitransport Talep Analizi", desc: "Yükünüzün türü ve rotası Gazitransport uzmanlarınca incelenerek özel fiyatlandırma yapılır." },
    { num: "02", title: "Güvenli Ambalajlama", desc: "Gazitransport ekipleri eşyalarınızı uluslararası nakliyeye uygun koruyucu malzemelerle paketler." },
    { num: "03", title: "İhracat & Gümrük Çözümleri", desc: "Türkiye çıkışlı ve Avrupa/İngiltere girişli tüm gümrük prosedürleri Gazitransport tarafından yönetilir." },
    { num: "04", title: "Uluslararası Nakliye", desc: "Gazitransport filosu yükünüzü hedeflenen Avrupa veya İngiltere rotasına hızla ulaştırır." },
    { num: "05", title: "Adrese Kapıda Teslimat", desc: "Varış noktasında Gazitransport güvencesi ile sigortalı ve randevulu kapı teslimatı yapılır." }
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
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. TOP BAR & HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="bg-slate-900 text-slate-300 py-2 text-xs border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-orange-500" /> Türkiye ↔ Avrupa & İngiltere Lojistik Hattı</span>
              <span className="hidden md:flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-orange-500" /> Kesintisiz Müşteri Desteği</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:info@gazicargo.com" className="hover:text-orange-400 transition flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-500" /> info@gazicargo.com
              </a>
              <a href="https://wa.me/905368310636" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition flex items-center gap-1.5 font-semibold text-emerald-400">
                <Phone className="w-3.5 h-3.5" /> +90 536 831 06 36
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Gazitransport Uluslararası Lojistik" 
                  className="h-12 sm:h-14 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md">G</div>
                  <span className="text-xl font-black text-slate-900 tracking-tight">
                    GAZI<span className="text-orange-600">TRANSPORT</span>
                  </span>
                </div>
              )}
            </Link>

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

            <div className="flex items-center gap-3">
              <Link
                href="/gonderi-hesaplama"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-md shadow-orange-600/20 transition duration-200 text-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Gönderi Hesapla</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-semibold text-orange-600">Ana Sayfa</Link>
            <a href="#hizmetlerimiz" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-700">Hizmetlerimiz</a>
            <a href="#surec" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-700">Operasyon Süreci</a>
            <Link href="/gonderi-hesaplama" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-700">Gönderi Hesaplama</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-700">GaziTransport Blog</Link>
            <a href="#iletisim" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-700">İletişim</a>
            <Link
              href="/gonderi-hesaplama"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-orange-600 text-white font-bold py-3 rounded-xl mt-2"
            >
              Gönderi Hesapla
            </Link>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="anasayfa" className="relative bg-gradient-to-b from-slate-50 via-orange-50/30 to-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 text-xs sm:text-sm text-orange-800 font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                <span>Gazitransport Uluslararası Taşımacılık Ağı</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                Türkiye’den Avrupa & İngiltere’ye <br />
                <span className="text-orange-600">Gazitransport</span> Güvencesiyle Lojistik
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                <strong className="text-slate-900 font-semibold">Gazitransport</strong>; ticari yüklerinizden gıda kargolarınıza, özel mobilya taşımacılığından zati ev eşyalarınıza kadar tüm sevkiyat sürecini uçtan uca yönetir. 
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/gonderi-hesaplama"
                  className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-600/25 transition duration-200 text-base"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Anında m³ & Gönderi Hesapla</span>
                </Link>

                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold px-8 py-4 rounded-xl border border-slate-300 shadow-sm transition duration-200 text-base"
                >
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  <span>GaziTransport Blog</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Gazitransport Lojistik Filosu"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HİZMETLERİMİZ */}
      <section id="hizmetlerimiz" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold text-sm tracking-widest uppercase">GAZITRANSPORT HİZMET PORTFÖYÜ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Uluslararası Lojistik Çözümlerimiz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-500/50 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>

              <Link 
                href={`/hizmetler/${service.slug}`}
                className="inline-flex items-center justify-between w-full text-orange-600 font-bold hover:text-orange-700 text-sm pt-4 border-t border-slate-100 group-hover:border-orange-100 transition"
              >
                <span>Hizmet Detayı</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OPERASYON SÜRECİ */}
      <section id="surec" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-bold text-sm tracking-widest uppercase">GAZITRANSPORT İŞ MODELİ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">İşletmeler İçin Uçtan Uca Operasyon</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <span className="text-4xl font-black text-orange-600 mb-3 block">{step.num}</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer id="iletisim" className="bg-slate-900 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <span className="text-2xl font-black uppercase tracking-tight block text-white">
              GAZI<span className="text-orange-500">TRANSPORT</span>
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gazitransport, Türkiye’den Avrupa ülkeleri ve İngiltere’ye bireysel ve ticari yük taşımacılığı sunar.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">İletişim</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" /> 
                <a href="https://wa.me/905368310636" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  WhatsApp: +90 536 831 06 36
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" /> 
                <a href="mailto:info@gazicargo.com" className="hover:text-white transition">
                  E-posta: info@gazicargo.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/gonderi-hesaplama" className="hover:text-orange-400 transition flex items-center gap-1">
                  <Calculator className="w-3.5 h-3.5 text-orange-500" /> Gönderi Hesaplama
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-orange-500" /> GaziTransport Blog
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
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition">
                      <Icon />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold leading-none mb-1">{social.name}</span>
                      <span className="text-[10px] text-slate-400">{social.handle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} GaziTransport Uluslararası Lojistik. Tüm hakları saklıdır.
        </div>
      </footer>

    </main>
  );
}