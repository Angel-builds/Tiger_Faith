'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PUBLICATIONS } from '@/lib/data/publications';
import { Publication } from '@/lib/data/publications';

export default function PublicationsContent() {
  const [filter, setFilter] = useState<'All' | Publication['type']>('All');

  const filteredPublications = filter === 'All' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.type === filter);

  const categories: ('All' | Publication['type'])[] = ['All', 'Book', 'Article', 'Devotional', 'Podcast'];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="bg-black py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 text-amber-500 font-black tracking-[0.2em] uppercase text-sm mb-6">
            <span className="w-12 h-[3px] bg-amber-500"></span>
            Faith & Wisdom
            <span className="w-12 h-[3px] bg-amber-500"></span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic mb-8">
            The <span className="text-amber-500">Tiger Faith</span> Library
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            Curated devotionals and spiritual literature designed to fuel your journey with Christ on campus.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20 scale-105' 
                    : 'bg-amber-50 text-gray-500 hover:text-black hover:bg-amber-100'
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPublications.map(pub => (
            <div key={pub.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={pub.imageUrl} 
                  alt={pub.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                    pub.type === 'Book' ? 'bg-amber-500 text-white' : 
                    pub.type === 'Article' ? 'bg-black text-amber-500' : 
                    'bg-white text-black'
                  }`}>
                    {pub.type}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-black uppercase tracking-tighter italic mb-2 group-hover:text-amber-500 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4">
                    By {pub.author}
                  </p>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3">
                    {pub.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {pub.externalLink ? (
                    <a 
                      href={pub.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-amber-500 transition-all shadow-lg"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {pub.type === 'Podcast' ? 'headphones' : 
                         pub.type === 'Book' ? 'shopping_cart' : 
                         'menu_book'}
                      </span>
                      {pub.type === 'Podcast' ? 'Listen' : 
                       pub.type === 'Book' ? 'Buy on Amazon' : 
                       'Read'}
                    </a>
                  ) : (
                    <button 
                      disabled 
                      className="w-full bg-gray-100 text-gray-400 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="py-32 text-center">
            <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">search_off</span>
            <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tighter">No publications found in this category</h3>
          </div>
        )}
      </section>

      {/* Suggested CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-amber-50 rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border-2 border-amber-500/10 shadow-2xl">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-amber-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter italic leading-tight">
              Have a Story <br/>to Share?
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              We are always looking for student contributors, writers, and authors to share their testimonies or walk with Christ through our publications.
            </p>
            <Link 
              href="/connect"
              className="inline-flex items-center gap-3 bg-amber-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:bg-amber-600 transition-all"
            >
              Become a Contributor 
              <span className="material-symbols-outlined">edit_note</span>
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://picsum.photos/seed/writing/600/400" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500" 
              alt="Person writing" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
