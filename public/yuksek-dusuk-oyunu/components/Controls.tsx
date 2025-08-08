
import React, { useState, useEffect } from 'react';
import { GameState } from '../types';

interface ControlsProps {
  gameState: GameState;
  money: number;
  onPlaceBet: (amount: number) => void;
  onGuess: (guess: 'higher' | 'lower') => void;
  onNextRound: () => void;
  onBailout: () => void;
}

const Controls: React.FC<ControlsProps> = ({ gameState, money, onPlaceBet, onGuess, onNextRound, onBailout }) => {
  const [betAmount, setBetAmount] = useState<number>(10);
  const baseButtonClass = 'flex items-center justify-center px-5 py-3 text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100';
  const betOptions = [10, 25, 50, 100];

  useEffect(() => {
    if (money > 0 && betAmount > money) {
      setBetAmount(money);
    } else if (betAmount === 0 && money > 0) {
      setBetAmount(Math.min(10, money));
    }
  }, [money, betAmount]);


  const handleBetChange = (amount: number) => {
      const newAmount = Math.max(1, Math.min(money, amount));
      setBetAmount(newAmount);
  }

  const renderContent = () => {
    switch (gameState) {
      case GameState.Busted:
        return (
             <div className="text-center animate-fade-in">
                 <p className="text-red-500 text-lg mb-4">Battın! Ama üzülme, sana bir şans daha veriyoruz.</p>
                 <button onClick={onBailout} className={`${baseButtonClass} bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 w-full md:w-auto`}>
                    100 Para Al
                 </button>
             </div>
        );

      case GameState.ReadyToBet:
        return (
            <div className="w-full max-w-lg mx-auto animate-fade-in">
                <div className="flex justify-center items-center mb-4 space-x-2">
                    <span className="text-slate-300 font-semibold text-lg">Bahis:</span>
                    <input 
                        type="number"
                        value={betAmount}
                        onChange={(e) => handleBetChange(parseInt(e.target.value) || 1)}
                        className="w-28 bg-slate-800 text-white text-center font-bold text-xl rounded-md border-2 border-slate-600 p-2 focus:border-sky-500 focus:ring-sky-500"
                        min="1"
                        max={money}
                    />
                    <button onClick={() => handleBetChange(money)} className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-bold hover:bg-amber-600 h-full">HEPSİ</button>
                </div>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {betOptions.map(opt => (
                        <button key={opt} onClick={() => handleBetChange(betAmount + opt)} disabled={betAmount+opt > money} className={`${baseButtonClass} bg-slate-600 text-white hover:bg-slate-700 text-sm py-2`}>+{opt}</button>
                    ))}
                </div>
                <button onClick={() => onPlaceBet(betAmount)} disabled={betAmount <= 0 || betAmount > money} className={`${baseButtonClass} bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 w-full text-lg`}>
                    Bahis Yap
                </button>
            </div>
        );
      
      case GameState.ReadyToGuess:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto animate-fade-in">
            <button onClick={() => onGuess('higher')} className={`${baseButtonClass} bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 text-xl`}>
              ▲ Yüksek
            </button>
            <button onClick={() => onGuess('lower')} className={`${baseButtonClass} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 text-xl`}>
              ▼ Düşük
            </button>
          </div>
        );

      case GameState.RoundOver:
        return (
          <button onClick={onNextRound} className={`${baseButtonClass} bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 w-full md:w-auto animate-fade-in text-lg`}>
            Sonraki Tur
          </button>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex-shrink-0 pt-4 border-t border-slate-700/50">
        <div className="flex flex-col items-center justify-center min-h-[150px]">
            {renderContent()}
        </div>
    </div>
  );
};

export default Controls;