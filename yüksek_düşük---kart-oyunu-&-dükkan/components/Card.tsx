
import React from 'react';
import type { Card as CardType } from '../types';

interface CardProps {
  card: CardType | null;
  isFaceDown?: boolean;
  cardBackClass: string;
}

const Card: React.FC<CardProps> = ({ card, isFaceDown = false, cardBackClass }) => {
  const baseCardClass = "w-28 h-40 md:w-36 md:h-52 rounded-lg shadow-xl transition-all duration-300";

  if (isFaceDown) {
    return (
      <div className={`${baseCardClass} ${cardBackClass}`}>
          {/* Soru işareti kaldırıldı, sadece arkaplan gösteriliyor */}
      </div>
    );
  }

  if (!card) {
    return <div className={`${baseCardClass} bg-slate-800 border-2 border-dashed border-slate-600 shadow-inner`} />;
  }

  const isRed = card.suit === '♥' || card.suit === '♦';
  const colorClass = isRed ? 'text-red-500' : 'text-slate-800';

  return (
    <div className={`${baseCardClass} bg-slate-50 border-2 border-slate-300 flex flex-col justify-between p-2 animate-fade-in`}>
      <div className={`text-2xl font-bold ${colorClass}`}>
        <span className="font-sans">{card.rank}</span>
        <span>{card.suit}</span>
      </div>
      <div className={`text-5xl font-bold self-center ${colorClass}`}>{card.suit}</div>
      <div className={`text-2xl font-bold self-end rotate-180 ${colorClass}`}>
        <span className="font-sans">{card.rank}</span>
        <span>{card.suit}</span>
      </div>
    </div>
  );
};

export default Card;