
import React from 'react';
import { ArrowRight, MoveUpRight, Zap, ShieldCheck, Globe } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-[8rem] font-bold font-sync leading-[0.85] tracking-tighter mb-10">
              BUILDING <br />
              <span className="text-amber-500">SILICON</span> <br />
              LANDSCAPES
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mb-12">
              Architecting the future of Bengaluru. From tech-parks to luxury estates, we fuse durability with visionary design.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setPage('work')}
                className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all flex items-center gap-3"
              >
                Our Work <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setPage('company')}
                className="px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-full hover:border-amber-500 transition-all"
              >
                Inquiry
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 relative">
             <div className="aspect-[3/4] rounded-xlarge overflow-hidden border border-white/10 group">
                <img 
                  src="https://www.buildahome.in/images/landing-page/nikhil-kulkarni-dream-home.webp" 
                  alt="Bangalore Skyline" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 glass p-8 rounded-[2rem] border border-amber-500/20 max-w-[200px]">
                <span className="text-4xl font-bold font-sync text-amber-500">25+</span>
                <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-2">Active Projects in Whitefield</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-4xl font-bold font-sync">Core Capabilities</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass rounded-xlarge p-12 bento-card border border-white/5">
              <Zap className="text-amber-500 w-12 h-12 mb-8" />
              <h3 className="text-3xl font-bold mb-4 uppercase font-sync">Tech Infrastructure</h3>
              <p className="text-slate-400 max-w-md">Developing specialized data centers and high-performance campuses for global tech giants across Bangalore's SEZ zones.</p>
            </div>
            <div className="glass rounded-xlarge p-12 bento-card border border-white/5">
              <ShieldCheck className="text-amber-500 w-12 h-12 mb-8" />
              <h3 className="text-2xl font-bold mb-4 uppercase font-sync">Precision Build</h3>
              <p className="text-slate-400">Zero-compromise safety and structural integrity using international VDC workflows.</p>
            </div>
            <div className="glass rounded-xlarge p-12 bento-card border border-white/5">
              <Globe className="text-amber-500 w-12 h-12 mb-8" />
              <h3 className="text-2xl font-bold mb-4 uppercase font-sync">Urban Retail</h3>
              <p className="text-slate-400">Transforming commercial spaces in Indiranagar and Koramangala into retail landmarks.</p>
            </div>
            <div className="md:col-span-2 bg-amber-500 rounded-xlarge p-12 bento-card relative overflow-hidden group">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-4xl font-bold text-black uppercase font-sync mb-8">Ready to start?</h3>
                <button 
                  onClick={() => setPage('company')}
                  className="w-fit px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  Consultation <MoveUpRight className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border border-white/5">
          <div className="lg:w-1/2 p-16 flex flex-col justify-center">
            <span className="text-amber-500 font-bold text-xs tracking-widest mb-4">LATEST PROJECT</span>
            <h2 className="text-5xl font-bold font-sync mb-6">THE TITAN <br /> CENTER</h2>
            <p className="text-slate-400 mb-10 text-lg">A 2.5 million sq.ft tech ecosystem in Whitefield, redefining the standard for sustainable LEED-platinum commercial builds.</p>
            <div className="flex gap-12">
              <div>
                <span className="text-2xl font-bold text-white font-sync block">2024</span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase font-bold">Completion</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-sync block">LEED</span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase font-bold">Certification</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 aspect-video lg:aspect-auto">
            <img src="https://www.buildahome.in/images/landing-page/chidanand-dream-home.webp" alt="Titan Center" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
};
