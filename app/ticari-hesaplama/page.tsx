'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Boxes, 
  ArrowLeft, 
  Calculator, 
  Send, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';

export default function TicariHesaplama() {
  // Form Durumları
  const [calcType, setCalcType] = useState<'pallet' | 'custom'>('pallet');
  const [palletType, setPalletType] = useState('euro');
  const [palletCount, setPalletCount] = useState<number>(1);
  const [palletHeight, setPalletHeight] = useState<number>(150);
  const [palletWeight, setPalletWeight] = useState<number>(400);

  // Serbest Ölçü Girişi
  const [length, setLength] = useState<number>(120);
  const [width, setWidth] = useState<number>(80);
  const [height, setHeight] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalWeight, setTotalWeight] = useState<number>(300);

  // Ülke Seçimleri
  const [origin, setOrigin] = useState('TR');
  const [destination, setDestination] = useState('DE');

  // Teklif Formu İletişim & Yük İçeriği Bilgileri
  const [cargoContent, setCargoContent] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Ülke Listesi
  const countries: Record<string, { name: string }> = {
    TR: { name: 'Türkiye' },
    DE: { name: 'Almanya' },
    HU: { name: 'Macaristan' },
    NL: { name: 'Hollanda / Belçika' },
    GB: { name: 'İngiltere (UK)' },
    FR: { name: 'Fransa' },
    IT: { name: 'İtalya' },
    AT: { name: 'Avusturya' },
    PL: { name: 'Polonya' },
  };

  // Hesaplamalar
  let totalVolumeM3 = 0;
  let chargeablesWeightKg = 0;

  if (calcType === 'pallet') {
    const palletArea = palletType === 'euro' ? (1.2 * 0.8) : (1.2 * 1.0);
    totalVolumeM3 = palletArea * (palletHeight / 100) * palletCount;
    const actualWeight = palletWeight * palletCount;
    const volumetricWeight = totalVolumeM3 * 333;
    chargeablesWeightKg = Math.max(actualWeight, volumetricWeight);
  } else {
    totalVolumeM3 = ((length / 100) * (width / 100) * (height / 100)) * quantity;
    const volumetricWeight = totalVolumeM3 * 333;
    chargeablesWeightKg = Math.max(totalWeight, volumetricWeight);
  }

  // WhatsApp Yönlendirme Fonksiyonu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const originName = countries[origin]?.name || origin;
    const destName = countries[destination]?.name || destination;
    const cargoDetails = calcType === 'pallet' 
      ? `• Yük Tipi: Palet (${palletType === 'euro' ? 'Euro 120x80' : 'Sanayi 120x100'})\n• Adet: ${palletCount} Palet\n• Yükseklik: ${palletHeight} cm\n• Palet Başı Ağırlık: ${palletWeight} kg`
      : `• Yük Tipi: Serbest Ölçü\n• Ebatlar: ${length}x${width}x${height} cm\n• Parça Adedi: ${quantity}\n• Toplam Net Ağırlık: ${totalWeight} kg`;

    const message = `🚚 *TİCARİ NAVLUN TEKLİF TALEBİ*

🏢 *Firma Bilgileri*
• Firma Adı: ${companyName}
• Yetkili: ${contactName}
• Telefon: ${phone}
• E-Posta: ${email}

📍 *Güzergah Bilgileri*
• Çıkış (Alım) Ülkesi: ${originName}
• Varış (Teslim) Ülkesi: ${destName}

📦 *Yük & İçerik Bilgileri*
• Yük İçeriği / Cinsi: ${cargoContent}
${cargoDetails}

📊 *Hesaplama Özeti*
• Toplam Hacim: ${totalVolumeM3.toFixed(2)} m³
• Navlun Ağırlığı: ${Math.round(chargeablesWeightKg)} kg`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/905368310636?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">
      
      {/* HEADER BANNER */}
      <header className="bg-slate-950 border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-500 transition text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full">
            <Boxes className="w-4 h-4" /> Ticari Yük & Palet Modülü
          </div>
        </div>
      </header>

      {/* SAYFA BAŞLIĞI */}
      <section className="py-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Ticari Yük & Hacim <span className="text-orange-500">Hesaplama</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Paletli veya serbest ölçülü ticari gönderilerinizin hacmini (m³) ve navlun ağırlığını hesaplayarak anında özel teklif isteyin.
        </p>
      </section>

      {/* HESAPLAMA PANELİ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SOL HESAPLAMA FORMU */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. YÜK TİPİ SEÇİMİ */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              1. Yük Tipi Seçimi
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setCalcType('pallet')}
                className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 font-bold text-sm transition ${
                  calcType === 'pallet' 
                    ? 'border-orange-500 bg-orange-500/10 text-orange-400' 
                    : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Boxes className="w-5 h-5" /> Standart Paletli Yük
              </button>
              <button
                type="button"
                onClick={() => setCalcType('custom')}
                className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 font-bold text-sm transition ${
                  calcType === 'custom' 
                    ? 'border-orange-500 bg-orange-500/10 text-orange-400' 
                    : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Maximize2 className="w-5 h-5" /> Serbest Ölçü / Koli / Kasa
              </button>
            </div>
          </div>

          {/* 2. ÖLÇÜ VE AĞIRLIK BİLGİLERİ */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-sm space-y-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              2. Ölçü ve Ağırlık Bilgileri
            </label>

            {calcType === 'pallet' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Palet Tipi</label>
                    <select
                      value={palletType}
                      onChange={(e) => setPalletType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="euro">Euro Palet (120x80 cm)</option>
                      <option value="industrial">Sanayi Paleti (120x100 cm)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Palet Adedi</label>
                    <input
                      type="number"
                      min="1"
                      max="33"
                      value={palletCount}
                      onChange={(e) => setPalletCount(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Palet Yüksekliği (cm)</label>
                    <input
                      type="number"
                      step="5"
                      value={palletHeight}
                      onChange={(e) => setPalletHeight(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Palet Başı Ağırlık (kg)</label>
                    <input
                      type="number"
                      step="10"
                      value={palletWeight}
                      onChange={(e) => setPalletWeight(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Uzunluk (cm)</label>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Genişlik (cm)</label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Yükseklik (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Parça Adedi</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Toplam Net Ağırlık (kg)</label>
                    <input
                      type="number"
                      value={totalWeight}
                      onChange={(e) => setTotalWeight(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. GÜZERGAH SEÇİMİ */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              3. Güzergah Bilgileri
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Çıkış (Alım) Ülkesi</label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-semibold text-sm focus:outline-none focus:border-orange-500"
                >
                  {Object.entries(countries).map(([code, info]) => (
                    <option key={code} value={code}>{info.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Varış (Teslim) Ülkesi</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-semibold text-sm focus:outline-none focus:border-orange-500"
                >
                  {Object.entries(countries).filter(([code]) => code !== 'TR').map(([code, info]) => (
                    <option key={code} value={code}>{info.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* SAĞ ÖZET VE TEKLİF ALMA ALANI */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-orange-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700/80 pb-3">
              <Calculator className="w-5 h-5 text-orange-500" /> Sevkiyat Özeti
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Toplam Hacim</span>
                <span className="text-2xl font-black text-orange-400">{totalVolumeM3.toFixed(2)} <span className="text-sm font-normal text-slate-400">m³</span></span>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Navlun Ağırlığı</span>
                <span className="text-2xl font-black text-white">{Math.round(chargeablesWeightKg)} <span className="text-sm font-normal text-slate-400">kg</span></span>
              </div>
            </div>

            {/* İLETIŞIM VE YÜK İÇERİĞİ FORMU */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Yük İçeriği / Ürün Cinsi (Örn: Makine Parçası, Tekstil)"
                  value={cargoContent}
                  onChange={(e) => setCargoContent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 placeholder:text-slate-500"
                />
              </div>
              <input
                type="text"
                required
                placeholder="Firma Adı"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                required
                placeholder="Yetkili Adı Soyadı"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  required
                  placeholder="Telefon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  required
                  placeholder="E-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm mt-4"
              >
                <Send className="w-4 h-4" /> WhatsApp ile Teklif Al
              </button>
            </form>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-orange-400" /> Gazitransport Ticari Güvencesi
            </div>
            <p>
              Tüm ticari yükler CMR Sigortası kapsamında taşınmakta olup, gümrükleme süreçleriniz uzman ekibimiz tarafından yürütülmektedir.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}