
import React from 'react';

interface HeaderProps {
    money: number;
    onOpenShop: () => void;
}

const Header: React.FC<HeaderProps> = ({ money, onOpenShop }) => {
  return (
    <header className="text-center py-4 px-4 flex items-center justify-center flex-shrink-0 border-b border-slate-700/50 shadow-lg relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8">
        <button onClick={onOpenShop} className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 p-3 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </button>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-sky-400 tracking-tight">
            Yüksek / Düşük
        </h1>
        <p className="text-slate-400 mt-1 text-lg">Kart Oyunu & Dükkan</p>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 bg-slate-700/50 border border-slate-600 px-4 py-2 rounded-lg shadow-md">
        <span className="text-slate-300 text-sm md:text-base">Para: </span>
        <span className="text-amber-400 font-bold text-lg md:text-xl tracking-wider">{money}</span>
      </div>
    </header>
  );
};

export default Header;