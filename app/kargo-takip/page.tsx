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
      // Doğrudan kendi Next.js API Route'umuza istek atıyoruz (CORS Hangi Kesinlikle Yaşanmaz)
      const res = await fetch(`/api/kargo-takip?takipNo=${encodeURIComponent(cleanCode)}`);
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Kargo bulunamadı');
      }

      // 1. Veri doğrudan JSON olarak geldiyse
      if (result.data) {
        setShipment(result.data);
        return;
      }

      // 2. HTML geldiyse Regex / DOM ayıklama
      if (result.html) {
        const html = result.html as string;

        const getValueByRegex = (patterns: RegExp[]): string => {
          for (const pattern of patterns) {
            const match = html.match(pattern);
            if (match && match[1]) {
              const val = match[1].replace(/<[^>]*>/g, '').trim();
              if (val && !val.includes('Gazi') && !val.includes('Takip')) {
                return val;
              }
            }
          }
          return '-';
        };

        const statusMatch = html.match(/(DEPODA|YOLDA|TESLİM EDİLDİ|İŞLEMDE|HAZIRLANIYOR)/i);

        setShipment({
          trackingNo: cleanCode,
          currentStatus: statusMatch ? statusMatch[0].toUpperCase() : 'DEPODA',
          location: getValueByRegex([
            /Bulunduğu Konum\s*[\/:]*\s*Ülke[\s:]*([^<]+)/i,
            /Konum[\s:]+([^<]+)/i
          ]) || 'Türkiye',
          sender: getValueByRegex([/Gönderici[\s:]+([^<]+)/i]),
          receiver: getValueByRegex([/Alıcı[\s:]+([^<]+)/i]),
          createdDate: getValueByRegex([/Kayıt Tarihi[\s:]+([^<]+)/i]),
          volumeWeight: getValueByRegex([
            /Toplam Hacim\s*[\/:]*\s*Ağırlık[\s:]*([^<]+)/i,
            /Ağırlık[\s:]+([^<]+)/i
          ]),
          content: getValueByRegex([/Taşınan İçerik[\s:]+([^<]+)/i, /İçerik[\s:]+([^<]+)/i])
        });
      }

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
        
        {/* ARAMA KUTUSU */}
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
                  placeholder="Takip Kodunuz (Örn: GZ-821570)"
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
              "<span className="font-extrabold">{trackingNo.toUpperCase()}</span>" numaralı takip koduna ait veri bulunamadı. Lütfen kargo kodunuzu kontrol ediniz.
            </p>
          </div>
        )}

        {/* MEVCUT ŞIK TASARIMINIZ */}
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