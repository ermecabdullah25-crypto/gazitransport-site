import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export default function GizlilikPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-8 h-8 text-orange-600" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Gizlilik Sözleşmesi ve Politikası
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <p>
            Bu Gizlilik Politikası, <strong>Gazitransport</strong> web sitesini kullanırken paylaştığınız kişisel bilgilerin nasıl korunduğunu ve kullanıldığını açıklar.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            1. İletişim ve Adres Bilgilerinin Korunması
          </h2>
          <p>
            Tarafımıza ilettiğiniz <strong>telefon numarası, e-posta adresi ve adres bilgileri</strong> strictly (kesinlikle) gizli tutulur. Bu veriler yalnızca taşımacılık hizmetinin planlanması ve teslimat süreçlerinin tamamlanması için kullanılır.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            2. Bilgi Güvenliği
          </h2>
          <p>
            Verileriniz yetkisiz erişimlere, kaybolmaya veya kopyalanmaya karşı güvenli sunucu altyapılarında muhafaza edilmektedir. Hizmet sürecimiz haricinde hiçbir kurum veya şahısla paylaşılmamaktadır.
          </p>
        </div>
      </div>
    </main>
  );
}