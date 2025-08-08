
import React from 'react';
import type { ShopItem } from '../types';

interface ShopProps {
  isOpen: boolean;
  onClose: () => void;
  money: number;
  items: ShopItem[];
  ownedItemIds: string[];
  selectedItemId: string;
  onBuy: (item: ShopItem) => void;
  onSelect: (itemId: string) => void;
}

const Shop: React.FC<ShopProps> = ({ isOpen, onClose, money, items, ownedItemIds, selectedItemId, onBuy, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 border border-slate-700 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
            <h2 className="text-2xl font-bold text-amber-400">Dükkan</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </header>

        <div className="p-6 overflow-y-auto">
            <p className="text-slate-400 mb-6">Kazandığın paralarla özel güçlere sahip yeni kart arkası tasarımları satın al.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map(item => {
                const isOwned = ownedItemIds.includes(item.id);
                const isSelected = selectedItemId === item.id;
                const canAfford = money >= item.price;

                return (
                  <div key={item.id} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 flex flex-col text-center justify-between">
                    <div>
                      <p className="font-bold text-lg text-white mb-2 h-12 flex items-center justify-center">{item.name}</p>
                      <div className={`w-24 h-36 rounded-md shadow-lg mb-4 mx-auto ${item.className}`}>
                      </div>
                      <p className="text-xs text-slate-400 mb-4 h-16 flex items-center justify-center">{item.description}</p>
                    </div>
                    <div>
                      {isOwned ? (
                          <button 
                              onClick={() => onSelect(item.id)}
                              disabled={isSelected}
                              className="w-full px-4 py-2 rounded-md font-semibold text-sm transition-colors disabled:cursor-not-allowed disabled:bg-emerald-500 disabled:text-white bg-sky-600 hover:bg-sky-700 text-white"
                          >
                            {isSelected ? 'Seçili' : 'Seç'}
                          </button>
                      ) : (
                        <button 
                          onClick={() => onBuy(item)}
                          disabled={!canAfford}
                          className="w-full px-4 py-2 rounded-md font-semibold text-sm transition-colors disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400 bg-amber-500 hover:bg-amber-600 text-slate-900"
                        >
                          {item.price} Para
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;