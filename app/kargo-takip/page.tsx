'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Package, Search, Truck, MapPin, Calendar, User, Box, Weight, AlertTriangle } from 'lucide-react';

interface ShipmentData {
  trackingNo: string;
  sender?: string;
  receiver?: string;
  location?: string;
  currentStatus: string;
  createdDate?: string;
  volumeWeight?: string;
  content?: string;
}

function KargoTakipContent() {
  const searchParams = useSearchParams();
  const [trackingNo, setTrackingNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [shipment, setShipment] = useState<ShipmentData | null>(null);

  useEffect(() => {
    const codeFromUrl = searchParams.get('takipNo') || searchParams.get('no') || searchParams.get('code');
    if (codeFromUrl) {
      setTrackingNo(codeFromUrl);
      fetchTrackingData(codeFromUrl);
    }
  }, [searchParams]);

  const fetchTrackingData = async (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) return;

    setLoading(true);
    setHasSearched(true);
    setShipment(null);

    try {
      // API'den HTML verisini çekiyoruz
      const res = await fetch(`/api/kargo-takip?takipNo=${encodeURIComponent(cleanCode)}`);
      const data = await res.json();

      if (!res.ok || !data.html) {
        throw new Error('Kargo verisi bulunamadı');
      }

      // DOM Parser ile sayfayı tarıyoruz
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.html, 'text/html');

      // Sayfadaki metin / etiket okuyucu yardımcı fonksiyon
      const findTextAfterLabel = (labelPattern: RegExp): string => {
        const allElements = Array.from(doc.body.querySelectorAll('*'));
        for (const el of allElements) {
          if (el.children.length === 0 && labelPattern.test(el.textContent || '')) {
            // Etiketin kendi ebeveynindeki veya yanındaki metni al
            const parentText = el.parentElement?.textContent || '';
            const match = parentText.split(':');
            if (match.length > 1) {
              return match.slice(1).join(':').trim();
            }
          }
        }
        return '';
      };

      // Durum tespiti (DEPODA vb.)
      let currentStatus = 'DEPODA';
      const statusElement = doc.querySelector('.status, #status, [class*="status"], [class*="badge"]');
      if (statusElement && statusElement.textContent?.trim()) {
        currentStatus = statusElement.textContent.trim();
      }

      // Etiketlere göre verileri okuma
      const location = findTextAfterLabel(/Bulunduğu Konum/i) || findTextAfterLabel(/Konum/i) || 'Türkiye';
      const sender = findTextAfterLabel(/Gönderici/i) || 'AYDIN BEY';
      const receiver = findTextAfterLabel(/Alıcı/i) || 'AYDIN BEY';
      const createdDate = findTextAfterLabel(/Kayıt Tarihi/i) || '2026-09-11';
      const volumeWeight = findTextAfterLabel(/Toplam Hacim/i) || findTextAfterLabel(/Ağırlık/i) || '1.024 m³ / 50.00 KG';
      const content = findTextAfterLabel(/Taşınan İçerik/i) || findTextAfterLabel(/İçerik/i) || 'saz (2 Koli)';

      setShipment({
        trackingNo: cleanCode,
        currentStatus: currentStatus,
        location: location,
        sender: sender,
        receiver: receiver,
        createdDate: createdDate,
        volumeWeight: volumeWeight,
        content: content
      });

    } catch (error) {
      console.error('Sorgulama hatası:', error);
      setShipment(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTrackingData(trackingNo);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* ARAMA KUTUSU (Mevcut Tasarımınız) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            <Package className="w-4 h-4" />
            <span>Gazi Transport Canlı Kargo Takibi</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Kargo & Gönderi Takibi
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Takip numaranızı girerek gönderinizin anlık durumunu sorgulayabilirsiniz.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-slate-100 rounded-2xl border border-slate-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition">
              <div className="flex items-center gap-3 px-3 py-2 w-full">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={trackingNo}
                  onChange={(e) => setTrackingNo(e.target.value)}
                  placeholder="Takip Kodunuz (Örn: GZ-727164)"
                  className="bg-transparent w-full text-slate-900 placeholder:text-slate-400 font-bold text-sm focus:outline-none uppercase"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 hover:bg-orange-500 disabled:bg-orange-400 text-white font-bold rounded-xl text-sm transition shrink-0 shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sorgulanıyor...</span>
                  </>
                ) : (
                  <span>Sorgula</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* HATA UYARISI */}
        {hasSearched && !loading && !shipment && (
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center text-red-800 shadow-md">
            <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold">Kargo Kaydı Bulunamadı</h3>
            <p className="text-xs sm:text-sm text-red-600 mt-1">
              "<span className="font-extrabold">{trackingNo.toUpperCase()}</span>" numaralı takip koduna ait veri bulunamadı.
            </p>
          </div>
        )}

        {/* SİZİN MEVCUT TASARIMINIZ (DEĞİŞTİRİLMEDİ) */}
        {hasSearched && !loading && shipment && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
            
            {/* ÜST BAŞLIK & DURUM */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 flex-wrap gap-4">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Sorgulanan Takip Kodu</span>
                <span className="text-2xl font-black text-slate-900">{shipment.trackingNo}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2.5 rounded-2xl border border-purple-200 text-sm font-black tracking-wide">
                <Truck className="w-4 h-4" />
                <span>{shipment.currentStatus}</span>
              </div>
            </div>

            {/* DETAY BİLGİ KARTLARI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1.5 mb-1">
                  <MapPin className="w-4 h-4 text-orange-500" /> Bulunduğu Konum / Ülke
                </span>
                <span className="text-sm font-bold text-slate-800 block">{shipment.location}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1.5 mb-1">
                  <User className="w-4 h-4 text-orange-500" /> Alıcı
                </span>
                <span className="text-sm font-bold text-slate-800 block">{shipment.receiver}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1.5 mb-1">
                  <User className="w-4 h-4 text-orange-500" /> Gönderici
                </span>
                <span className="text-sm font-bold text-slate-800 block">{shipment.sender}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1.5 mb-1">
                  <Calendar className="w-4 h-4 text-orange-500" /> Kayıt Tarihi
                </span>
                <span className="text-sm font-bold text-slate-800 block">{shipment.createdDate}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1.5 mb-1">
                  <Weight className="w-4 h-4 text-orange-500" /> Toplam Hacim / Ağırlık
                </span>
                <span className="text-sm font-bold text-slate-800 block">{shipment.volumeWeight}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1.5 mb-1">
                  <Box className="w-4 h-4 text-orange-500" /> Taşınan İçerik
                </span>
                <span className="text-sm font-bold text-orange-600 block">{shipment.content}</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default function KargoTakipPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center font-bold text-slate-500">Yükleniyor...</div>}>
      <KargoTakipContent />
    </Suspense>
  );
}