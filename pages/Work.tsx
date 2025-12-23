
import React, { useState } from 'react';

const projects = [
  { id: 1, title: "Zenith Campus", location: "Sarjapur", tag: "Tech", img: "https://www.buildahome.in/images/landing-page/roopa-dream-home.webp" },
  { id: 2, title: "Indiranagar Lofts", location: "Indiranagar", tag: "Living", img: "https://www.buildahome.in/images/landing-page/sumalatha-dream-home.webp" },
  { id: 3, title: "Orion Square", location: "Malleshwaram", tag: "Retail", img: "https://www.buildahome.in/images/landing-page/sudhir-dream-home.webp" },
  { id: 4, title: "Brigade Vista", location: "Hebbal", tag: "Living", img: "https://www.buildahome.in/images/landing-page/vishak-dream-home.webp" },
  { id: 5, title: "Whitefield Hub", location: "Whitefield", tag: "Tech", img: "https://www.buildahome.in/images/landing-page/chethan-dream-home.webp" },
  { id: 6, title: "Koramangala Plaza", location: "Koramangala", tag: "Retail", img: "https://www.buildahome.in/images/landing-page/chandan-dream-home.webp" },
];

export const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tag === filter);

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center">
          <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold font-sync mb-10">SELECTED ARTIFACTS</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Tech', 'Living', 'Retail'].map(t => (
              <button 
                key={t}
                onClick={() => setFilter(t)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                  filter === t ? 'bg-amber-500 text-black' : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(p => (
            <div key={p.id} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-xlarge overflow-hidden mb-6 border border-white/5 relative">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                   <span className="text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-1">{p.tag}</span>
                   <h3 className="text-3xl font-bold font-sync uppercase">{p.title}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                 <div>
                   <h3 className="text-xl font-bold font-sync group-hover:text-amber-500 transition-colors uppercase">{p.title}</h3>
                   <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{p.location}</span>
                 </div>
                 <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-colors">
                   <span className="text-xl">→</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
