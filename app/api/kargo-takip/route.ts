import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const takipNo = searchParams.get('takipNo');

  if (!takipNo) {
    return NextResponse.json({ error: 'Takip numarası gerekli' }, { status: 400 });
  }

  const cleanCode = takipNo.trim().toUpperCase();

  try {
    const targetUrl = `https://gaziportal-b2f52.web.app/kargo-takip.html?takipNo=${encodeURIComponent(cleanCode)}`;
    
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Gazi Portal yanıt vermedi' }, { status: 502 });
    }

    const htmlText = await response.text();
    return NextResponse.json({ success: true, html: htmlText, targetUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası oluştu' }, { status: 500 });
  }
}