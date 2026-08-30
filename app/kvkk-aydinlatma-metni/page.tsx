import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-orange-600" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            KVKK Aydınlatma Metni
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
          <p>
            <strong>Gazitransport Uluslararası Lojistik</strong> olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca kişisel verilerinizin güvenliğine ve gizliliğine büyük önem veriyoruz.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            1. İşlenen Kişisel Verileriniz
          </h2>
          <p>
            Sitemizdeki teklif, hesaplama ve iletişim formları aracılığıyla sizlerden aşağıdaki veriler toplanmaktadır:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>İletişim Bilgileri:</strong> Telefon numaranız ve E-posta adresiniz</li>
            <li><strong>Adres ve Lokasyon Bilgileri:</strong> Gönderi alım ve teslimat açık adresleriniz</li>
            <li><strong>Kimlik ve Talep Bilgileri:</strong> Adınız, soyadınız ve lojistik talebinizin detayları</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            2. Verilerin İşlenme Amacı ve Gizliliği
          </h2>
          <p>
            Toplanan <strong>telefon numarası, e-posta adresi ve açık adres</strong> bilgileriniz; yalnızca lojistik teklifi hazırlamak, taşıma operasyonunu gerçekleştirmek ve sizinle iletişim kurmak amacıyla işlenir. Bu bilgiler <u>üçüncü şahıslarla asla paylaşılmaz</u> ve ticari olarak satılmaz.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            3. Veri Sahibi Olarak Haklarınız
          </h2>
          <p>
            KVKK’nın 11. maddesi kapsamında, dilediğiniz zaman <strong>info@gazicargo.com</strong> e-posta adresi üzerinden bizlere ulaşarak sistemimizde kayıtlı telefon, e-posta ve adres bilgilerinizin silinmesini, güncellenmesini veya düzeltilmesini talep edebilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}