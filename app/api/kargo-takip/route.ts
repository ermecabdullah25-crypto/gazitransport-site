import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 1. URL'den 'takipNo' parametresini okuyoruz
  const { searchParams } = new URL(request.url);
  const takipNo = searchParams.get('takipNo');

  if (!takipNo) {
    return NextResponse.json({ error: 'Takip numarası girilmedi.' }, { status: 400 });
  }

  try {
    // 2. Gazi Portal adresine sunucu (Node.js) üzerinden gizlice istek atıyoruz
    const targetUrl = `https://gaziportal-b2f52.web.app/kargo-takip.html?takipNo=${encodeURIComponent(takipNo)}`;
    
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      cache: 'no-store', // Her zaman en güncel veriyi almak için önbelleği kapatıyoruz
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Gazi Portal sisteminden yanıt alınamadı.' }, { status: 502 });
    }

    // 3. Dönen HTML metnini alıp frontend'e gönderiyoruz
    const htmlText = await response.text();
    return NextResponse.json({ success: true, html: htmlText });

  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası meydana geldi.' }, { status: 500 });
  }
}