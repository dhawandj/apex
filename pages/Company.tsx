
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Company: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Company</span>
            <h1 className="text-5xl md:text-7xl font-bold font-sync leading-tight mb-8">
              CRAFTING THE <br /> <span className="text-amber-500">HORIZON</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Founded in Bangalore, Apex Dynamics has evolved from a boutique contractor into a strategic engineering firm. We focus on high-fidelity builds that respect the ecological and cultural heritage of our city while embracing global technological standards.
            </p>
            <div className="space-y-4">
               {['ISO 9001 Certified Quality Management', 'LEED-Platinum Design Standards', 'Zero-Incident Safety History'].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-sm font-bold tracking-wide uppercase text-slate-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-slate-900 rounded-xlarge p-10 flex flex-col justify-center border border-white/5">
                <span className="text-5xl font-bold font-sync text-amber-500 mb-2">15</span>
                <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Years Excellence</p>
             </div>
             <div className="aspect-square bg-slate-900 rounded-xlarge p-10 flex flex-col justify-center border border-white/5 mt-12">
                <span className="text-5xl font-bold font-sync text-white mb-2">200+</span>
                <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Specialists</p>
             </div>
          </div>
        </section>

        {/* Contact Form & Details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="bg-white text-black p-12 md:p-16 rounded-[4rem]">
            <h2 className="text-4xl font-bold font-sync mb-8 uppercase">Start a Project</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-4">Your Name</label>
                 <input type="text" className="w-full bg-slate-100 border-none px-8 py-5 rounded-full focus:ring-2 ring-amber-500 transition-all outline-none" placeholder="Enter name" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-4">Company Email</label>
                 <input type="email" className="w-full bg-slate-100 border-none px-8 py-5 rounded-full focus:ring-2 ring-amber-500 transition-all outline-none" placeholder="name@company.com" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-4">Briefly Describe Requirements</label>
                 <textarea className="w-full bg-slate-100 border-none px-8 py-6 rounded-[2rem] focus:ring-2 ring-amber-500 transition-all outline-none min-h-[150px]" placeholder="How can we help?"></textarea>
               </div>
               <button className="w-full bg-black text-white font-bold py-6 rounded-full uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all">
                 Send Inquiry
               </button>
            </form>
          </div>

          <div className="flex flex-col justify-between py-10">
            <div>
              <h2 className="text-3xl font-bold font-sync mb-12 uppercase">Global Headquarters</h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-500">
                     <MapPin />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 uppercase font-sync">Bangalore</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">
                       Suite 405, Prestige Towers, <br /> Residency Road, Bengaluru 560025
                     </p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-500">
                     <Phone />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 uppercase font-sync">Direct</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">
                       +91 (80) 4420 5000 <br /> Mon - Sat: 9AM - 6PM
                     </p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-500">
                     <Mail />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 uppercase font-sync">Email</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">
                       hello@apexdynamics.com <br /> careers@apexdynamics.com
                     </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 glass rounded-[2.5rem] flex items-center justify-between border border-white/5">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Response time: ~2hrs</span>
               </div>
               <ExternalLink className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
