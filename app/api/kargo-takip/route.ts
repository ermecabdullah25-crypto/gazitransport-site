import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const takipNo = searchParams.get('takipNo');

  if (!takipNo) {
    return NextResponse.json({ error: 'Takip numarası gerekli' }, { status: 400 });
  }

  const cleanCode = takipNo.trim().toUpperCase();

  try {
    // Gazi Portal'ın Firestore veritabanı REST API sorguları
    // Koleksiyon adları: cargos, cargo, kargolar veya takip
    const possibleCollections = ['cargos', 'cargo', 'kargolar', 'takip'];
    
    let docData: any = null;

    for (const coll of possibleCollections) {
      const firestoreUrl = `https://firestore.googleapis.com/v1/projects/gaziportal-b2f52/databases/(default)/documents/${coll}/${encodeURIComponent(cleanCode)}`;
      
      const res = await fetch(firestoreUrl, {
        headers: { 'Accept': 'application/json' },
        cache: 'no-store',
      });

      if (res.ok) {
        docData = await res.json();
        break;
      }
    }

    // Eğer doğrudan ID ile bulunamadıysa Firestore StructuredQuery ile arama yap
    if (!docData) {
      const queryUrl = `https://firestore.googleapis.com/v1/projects/gaziportal-b2f52/databases/(default)/documents:runQuery`;
      
      for (const coll of possibleCollections) {
        const queryBody = {
          structuredQuery: {
            from: [{ collectionId: coll }],
            where: {
              fieldFilter: {
                field: { fieldPath: 'trackingNo' },
                op: 'EQUAL',
                value: { stringValue: cleanCode }
              }
            }
          }
        };

        const qRes = await fetch(queryUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(queryBody),
          cache: 'no-store',
        });

        if (qRes.ok) {
          const qData = await qRes.json();
          if (Array.isArray(qData) && qData[0]?.document) {
            docData = qData[0].document;
            break;
          }
        }
      }
    }

    // Firestore verisini çözme fonksiyonu
    const parseFirestoreValue = (valObj: any): any => {
      if (!valObj) return '';
      if (valObj.stringValue !== undefined) return valObj.stringValue;
      if (valObj.integerValue !== undefined) return valObj.integerValue;
      if (valObj.doubleValue !== undefined) return valObj.doubleValue;
      if (valObj.booleanValue !== undefined) return valObj.booleanValue;
      if (valObj.timestampValue !== undefined) return valObj.timestampValue;
      if (valObj.mapValue?.fields) {
        const obj: any = {};
        for (const k in valObj.mapValue.fields) {
          obj[k] = parseFirestoreValue(valObj.mapValue.fields[k]);
        }
        return obj;
      }
      return '';
    };

    if (docData && docData.fields) {
      const fields = docData.fields;
      const parsed: any = {};
      for (const key in fields) {
        parsed[key] = parseFirestoreValue(fields[key]);
      }

      return NextResponse.json({
        success: true,
        data: {
          trackingNo: cleanCode,
          currentStatus: parsed.status || parsed.durum || parsed.currentStatus || 'DEPODA',
          location: parsed.konum || parsed.location || parsed.ulke || parsed.bulunduguKonum || 'Türkiye',
          sender: parsed.gonderici || parsed.sender || parsed.gonderen || '-',
          receiver: parsed.alici || parsed.receiver || parsed.alan || '-',
          createdDate: parsed.kayitTarihi || parsed.tarih || parsed.createdAt || parsed.createdDate || '-',
          volumeWeight: parsed.hacimAgirlik || parsed.agirlik || parsed.volumeWeight || parsed.toplamHacim || '-',
          content: parsed.icerik || parsed.tasinanIcerik || parsed.content || '-'
        }
      });
    }

    // Eğer veritabanında bulunamadıysa web scraping fallback'i
    const targetUrl = `https://gaziportal-b2f52.web.app/kargo-takip.html?takipNo=${encodeURIComponent(cleanCode)}`;
    const htmlRes = await fetch(targetUrl, { cache: 'no-store' });
    const htmlText = await htmlRes.text();

    return NextResponse.json({ success: true, html: htmlText, trackingNo: cleanCode });

  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası oluştu' }, { status: 500 });
  }
}