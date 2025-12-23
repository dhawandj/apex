
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-24 px-6 border-t border-slate-900 section-curve-top">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-500 flex items-center justify-center rounded-xl rotate-12">
                <Shield className="w-6 h-6 text-slate-950 -rotate-12" />
              </div>
              <span className="font-oswald text-3xl font-bold tracking-tighter">
                APEX <span className="text-amber-500">DYNAMICS</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-md text-lg leading-relaxed">
              Establishing new benchmarks in global infrastructure through precision, safety, and architectural brilliance.
            </p>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-amber-500 transition-all text-slate-600 hover:text-slate-950 group">
                  <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500 pl-4 border-l-2 border-amber-500">GOVERNANCE</h4>
            <ul className="space-y-5 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Safety Protocols</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">ESG Report 2024</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Career Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500 pl-4 border-l-2 border-amber-500">INSIGHTS</h4>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Join our executive bulletin for market analysis and project milestones.</p>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder="Corporate Email" className="bg-slate-900 border border-slate-800 px-6 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors rounded-full" />
              <button className="bg-amber-500 px-8 py-4 text-slate-950 font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors rounded-full shadow-lg shadow-amber-500/10">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-8 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2024 APEX DYNAMICS CONSTRUCTION GROUP. GLOBAL REPUTATION SECURED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-amber-500 transition-colors">Legal Framework</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Ethic Codes</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
