'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Package, Search, Truck, CheckCircle2, Clock, AlertTriangle, MapPin, Calendar, User } from 'lucide-react';

// Kargo veri tipleri
interface TrackingStep {
  date: string;
  status: string;
  location: string;
  completed: boolean;
}

interface ShipmentData {
  trackingNo: string;
  sender?: string;
  receiver?: string;
  origin?: string;
  destination?: string;
  currentStatus: string;
  estimatedDelivery?: string;
  history: TrackingStep[];
}

function KargoTakipContent() {
  const searchParams = useSearchParams();
  const [trackingNo, setTrackingNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [shipment, setShipment] = useState<ShipmentData | null>(null);

  // Eğer kullanıcı siteye doğrudan linkle geldiyse (?takipNo=GZ-1234) otomatike sorgula
  useEffect(() => {
    const codeFromUrl = searchParams.get('takipNo') || searchParams.get('no') || searchParams.get('code');
    if (codeFromUrl) {
      setTrackingNo(codeFromUrl);
      fetchTrackingData(codeFromUrl);
    }
  }, [searchParams]);

  // CANLI SORGULAMA FONKSİYONU
  const fetchTrackingData = async (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) return;

    setLoading(true);
    setHasSearched(true);
    setShipment(null);

    try {
      // Oluşturduğumuz kendi Next.js API endpoint'imize istek atıyoruz
      const res = await fetch(`/api/kargo-takip?takipNo=${encodeURIComponent(cleanCode)}`);
      const data = await res.json();

      if (!res.ok || !data.html) {
        throw new Error('Kargo verisi bulunamadı');
      }

      // Gelen HTML metnini taranabilir bir DOM yapısına çeviriyoruz
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.html, 'text/html');

      // Sayfadaki status, konum ve bilgileri çekiyoruz
      const statusElement = doc.querySelector('.status, .kargo-durumu, #status, [data-status]');
      const currentStatus = statusElement?.textContent?.trim() || 'İşlemde';

      const historyElements = doc.querySelectorAll('.timeline-item, .kargo-adim, .step, tr.hareket');
      const historySteps: TrackingStep[] = [];

      historyElements.forEach((el) => {
        const status = el.querySelector('.step-title, .durum, td:nth-child(2)')?.textContent?.trim() || 'Kargo İşlemi';
        const location = el.querySelector('.step-location, .konum, td:nth-child(3)')?.textContent?.trim() || 'Lojistik Merkezi';
        const date = el.querySelector('.step-date, .tarih, td:nth-child(1)')?.textContent?.trim() || '';
        const isCompleted = !el.classList.contains('pending') && !el.classList.contains('active');

        historySteps.push({
          status,
          location,
          date,
          completed: isCompleted
        });
      });

      // Çekilen veriyi kendi bileşenimize aktarıyoruz
      setShipment({
        trackingNo: cleanCode,
        currentStatus: currentStatus,
        origin: doc.querySelector('.cikis-noktasi, #origin')?.textContent?.trim() || 'Türkiye',
        destination: doc.querySelector('.varis-noktasi, #destination')?.textContent?.trim() || 'Yurt Dışı',
        receiver: doc.querySelector('.alici, #receiver')?.textContent?.trim() || 'Alıcı Firma',
        estimatedDelivery: doc.querySelector('.teslim-tarihi, #deliveryDate')?.textContent?.trim() || 'Gazi Portal Üzerinde',
        history: historySteps.length > 0 ? historySteps : [
          {
            date: new Date().toLocaleDateString('tr-TR'),
            status: currentStatus,
            location: 'Gazi Transport Lojistik Ağı',
            completed: true
          }
        ]
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
        
        {/* SİTEDEKİ TEK ARAMA KUTUSU */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            <Package className="w-4 h-4" />
            <span>Gazi Transport Canlı Kargo Takibi</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Kargo & Gönderi Takibi
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Takip numaranızı girerek gönderinizin anlık durumunu ve geçmiş hareketlerini sorgulayabilirsiniz.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-slate-100 rounded-2xl border border-slate-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition">
              <div className="flex items-center gap-3 px-3 py-2 w-full">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={trackingNo}
                  onChange={(e) => setTrackingNo(e.target.value)}
                  placeholder="Takip Kodunuz (Örn: GZ-175427)"
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

        {/* KARGO BULUNAMADI / HATA UYARISI */}
        {hasSearched && !loading && !shipment && (
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center text-red-800 shadow-md">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold">Kargo Kaydı Bulunamadı</h3>
            <p className="text-xs sm:text-sm text-red-600 mt-1">
              "<span className="font-extrabold">{trackingNo.toUpperCase()}</span>" numaralı takip koduna ait veri sistemde bulunamadı. Lütfen numaranızı kontrol edip tekrar deneyiniz.
            </p>
          </div>
        )}

        {/* SONUÇLARIN KENDİ TASARIMINIZLA EKRANA BASILMASI */}
        {hasSearched && !loading && shipment && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
            
            {/* ÜST ÖZET KARTI */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 flex-wrap gap-4">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Sorgulanan Takip Kodu</span>
                <span className="text-2xl font-black text-slate-900">{shipment.trackingNo}</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-200 text-xs font-bold">
                <Truck className="w-4 h-4" />
                <span>{shipment.currentStatus}</span>
              </div>
            </div>

            {/* BİLGİ KARTLARI */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" /> Rota
                </span>
                <span className="text-xs font-bold text-slate-800 block">{shipment.origin}</span>
                <span className="text-xs font-bold text-orange-600 block mt-0.5">➔ {shipment.destination}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1 mb-1">
                  <User className="w-3.5 h-3.5 text-orange-500" /> Alıcı
                </span>
                <span className="text-xs font-bold text-slate-800 block">{shipment.receiver}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-medium block flex items-center gap-1 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-orange-500" /> Tahmini Teslimat
                </span>
                <span className="text-xs font-bold text-emerald-600 block">{shipment.estimatedDelivery}</span>
              </div>
            </div>

            {/* HAREKET GEÇMİŞİ (TIMELINE) */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Kargo Hareket Geçmişi</h4>
              
              <div className="space-y-3">
                {shipment.history.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-start gap-3 transition ${
                      step.completed 
                        ? 'bg-slate-50 border-slate-200' 
                        : 'bg-orange-50 border-orange-200'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5 animate-pulse" />
                    )}
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">{step.status}</h5>
                        <p className="text-xs text-slate-500">{step.location}</p>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 shrink-0">{step.date}</span>
                    </div>
                  </div>
                ))}
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