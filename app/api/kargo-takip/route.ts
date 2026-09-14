import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const takipNo = searchParams.get('takipNo');

  if (!takipNo) {
    return NextResponse.json({ error: 'Takip numarası gerekli' }, { status: 400 });
  }

  const cleanCode = takipNo.trim().toUpperCase();

  try {
    const possibleCollections = ['yukler', 'cargos', 'kargolar'];
    let docData: any = null;

    // 1. Firestore REST API: Doğrudan ID üzerinden kontrol
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

    // 2. ID ile bulunamadıysa "takipNo" alanına göre StructuredQuery ile ara
    if (!docData) {
      const queryUrl = `https://firestore.googleapis.com/v1/projects/gaziportal-b2f52/databases/(default)/documents:runQuery`;
      
      for (const coll of possibleCollections) {
        const queryBody = {
          structuredQuery: {
            from: [{ collectionId: coll }],
            where: {
              fieldFilter: {
                field: { fieldPath: 'takipNo' },
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

    // Firestore BSON/Typed JSON formatını düz nesnelere dönüştüren yardımcı fonksiyon
    const parseFirestoreValue = (valObj: any): any => {
      if (!valObj) return '';
      if (valObj.stringValue !== undefined) return valObj.stringValue;
      if (valObj.integerValue !== undefined) return Number(valObj.integerValue);
      if (valObj.doubleValue !== undefined) return Number(valObj.doubleValue);
      if (valObj.booleanValue !== undefined) return valObj.booleanValue;
      if (valObj.timestampValue !== undefined) return valObj.timestampValue;
      
      // Array / Dizi
      if (valObj.arrayValue?.values) {
        return valObj.arrayValue.values.map((v: any) => parseFirestoreValue(v));
      }
      
      // Map / Obje
      if (valObj.mapValue?.fields) {
        const obj: any = {};
        for (const k in valObj.mapValue.fields) {
          obj[k] = parseFirestoreValue(valObj.mapValue.fields[k]);
        }
        return obj;
      }
      return '';
    };

    // Veri bulunduysa yanıtı düzenle ve gönder
    if (docData && docData.fields) {
      const fields = docData.fields;
      const parsed: any = {};
      for (const key in fields) {
        parsed[key] = parseFirestoreValue(fields[key]);
      }

      // Hacim ve Ağırlık Metni
      const volumeWeightText = (parsed.toplamM3 !== undefined || parsed.toplamKg !== undefined)
        ? `${parsed.toplamM3 || 0} m³ / ${parsed.toplamKg || 0} KG`
        : (parsed.hacimAgirlik || '-');

      return NextResponse.json({
        success: true,
        data: {
          trackingNo: parsed.takipNo || cleanCode,
          currentStatus: parsed.durum || parsed.yukDurumu || 'Hazırlanıyor',
          location: parsed.bulunduguUlke || parsed.konum || parsed.mevcutKonum || parsed.ulke || 'Türkiye',
          sender: parsed.gondericiCari || parsed.gonderici || '-',
          receiver: parsed.aliciCari || parsed.alici || '-',
          createdDate: parsed.tarih || parsed.kayitTarihi || '-',
          volumeWeight: volumeWeightText,
          items: parsed.kalemler || parsed.yukIcerik || []
        }
      });
    }

    // Veri bulunamadığında 404 dön
    return NextResponse.json({ 
      success: false, 
      error: 'Belirtilen takip numarasına ait yük bulunamadı.' 
    }, { status: 404 });

  } catch (error) {
    console.error("API Hatası:", error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu' }, { status: 500 });
  }
}