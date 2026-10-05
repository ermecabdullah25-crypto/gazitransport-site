'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Sparkles, Search, Calendar, Clock, ArrowRight, Globe, Truck, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS } from './blogData';

export default function BlogListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = useMemo(() => {
    return ['Tümü', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const query = searchTerm.toLowerCase();
      const matchesSearch = 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        (post.serviceType && post.serviceType.toLowerCase().includes(query));
      const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GaziTransport Avrupa ve Küresel Lojistik & Gümrük Kütüphanesi",
    "description": "Almanya (Zoll), İngiltere (TOR1), Hollanda (Douane), Fransa (Cerfa), İsviçre, İtalya, İspanya ve tüm kıtalara yönelik lojistik ve gümrük rehberi.",
    "itemListElement": filteredPosts.slice(0, 50).map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://gazitransport.com/blog/${post.slug}`,
      "name": post.title
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-orange-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 text-xs text-orange-400 font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Avrupa & Küresel Lojistik, Gümrükleşme ve Incoterms Rehberi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">
            GaziTransport <span className="text-orange-500">Gümrük & Lojistik Kütüphanesi</span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Almanya (Formular 0350), İngiltere (TOR1), Hollanda (Douane), Fransa (Cerfa 10070), İsviçre (Form 18.44) ve tüm kıtalara yönelik Zati Eşya, Frigo, Express ve Multimodal nakliye rehberleri.
          </p>

          {/* ARAMA ÇUBUĞU */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Şehir, ülke veya mevzuat ara (Örn: TOR1, Zoll 0350, Berlin, Londra, Paris, Frigo, Multimodal)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl pl-12 pr-4 py-3.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition placeholder:text-slate-500 shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORİ FİLTRELERİ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md overflow-x-auto flex items-center gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID VE REHBER CARDI */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs sm:text-sm font-semibold text-slate-500">
            Toplam <span className="text-orange-600 font-bold">{filteredPosts.length}</span> uzmanlık rehberi listeleniyor
          </p>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-orange-500" /> Tüm Avrupa & Dünya</span>
            <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-orange-500" /> Öz Mal Filo</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-orange-500" /> CMR Sigortalı</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-500/50 hover:shadow-xl transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                    <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {post.category}
                    </span>
                    {post.serviceType && (
                      <span className="bg-slate-900/90 backdrop-blur-md text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-orange-500/30">
                        {post.serviceType}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1 font-medium"><Calendar className="w-3.5 h-3.5 text-orange-500" /> {post.date}</span>
                    <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5 text-orange-500" /> {post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-900 text-base sm:text-lg mb-3 group-hover:text-orange-600 transition leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs sm:text-sm hover:text-orange-700 transition"
                >
                  <span>Rehberi Incele</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}