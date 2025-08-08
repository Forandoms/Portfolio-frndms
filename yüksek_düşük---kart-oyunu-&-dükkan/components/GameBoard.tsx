
import React from 'react';
import type { Card as CardType } from '../types';
import Card from './Card';

interface GameBoardProps {
    dealerCard: CardType | null;
    playerCard: CardType | null;
    roundMessage: string | null;
    isPlayerCardFaceDown: boolean;
    cardBackClass: string;
}

const GameBoard: React.FC<GameBoardProps> = ({ dealerCard, playerCard, roundMessage, isPlayerCardFaceDown, cardBackClass }) => {
  
    const messageColor = roundMessage?.includes('Kazandın') ? 'text-emerald-400'
                       : roundMessage?.includes('Kaybettin') ? 'text-red-500'
                       : roundMessage?.includes('Berabere') ? 'text-amber-400'
                       : 'text-sky-400';

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-4">
            <div className="relative flex items-center justify-center space-x-4 md:space-x-8 w-full">
                <div>
                    <h3 className="text-center text-slate-400 font-bold mb-2 uppercase tracking-wider">Kurpiyer</h3>
                    <Card card={dealerCard} cardBackClass={cardBackClass} />
                </div>
                <div>
                    <h3 className="text-center text-slate-400 font-bold mb-2 uppercase tracking-wider">Sen</h3>
                    <Card card={playerCard} isFaceDown={isPlayerCardFaceDown} cardBackClass={cardBackClass} />
                </div>
            </div>
            <div className="mt-6 text-center h-10">
                {roundMessage && (
                    <p className={`text-2xl md:text-3xl font-bold animate-pulse ${messageColor}`}>
                        {roundMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default GameBoard;