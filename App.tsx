
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Company } from './pages/Company';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'work': return <Work />;
      case 'company': return <Company />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <div className="page-transition">
        {renderPage()}
      </div>
      
      {/* Universal Footer Minimal */}
      <footer className="py-20 px-8 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-sync text-xs text-slate-600 tracking-widest uppercase">
            © 2024 Apex Dynamics Bengaluru
          </span>
          <div className="flex gap-10 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
