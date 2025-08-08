
import React, { useState, useEffect, useCallback } from 'react';
import { GameState } from './types';
import type { Card, ShopItem } from './types';
import { createDeck, shuffleDeck } from './utils/deck';
import { SHOP_ITEMS } from './constants';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Controls from './components/Controls';
import Shop from './components/Shop';

const STARTING_MONEY = 100;
const BAILOUT_MONEY = 100;
const BAILOUT_BOOST_AMOUNT = 150;

export default function App() {
  const [money, setMoney] = useState<number>(STARTING_MONEY);
  const [deck, setDeck] = useState<Card[]>([]);
  const [dealerCard, setDealerCard] = useState<Card | null>(null);
  const [playerCard, setPlayerCard] = useState<Card | null>(null);
  const [currentBet, setCurrentBet] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>(GameState.ReadyToBet);
  const [roundMessage, setRoundMessage] = useState<string | null>('Oynamak için bahis yapın!');
  const [winStreak, setWinStreak] = useState(0);

  // Shop State
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [ownedItems, setOwnedItems] = useState<string[]>(['default']);
  const [selectedCardBackId, setSelectedCardBackId] = useState<string>('default');

  const selectedCardData = SHOP_ITEMS.find(item => item.id === selectedCardBackId);

  useEffect(() => {
    setDeck(shuffleDeck(createDeck()));
  }, []);

  const drawCard = useCallback((): Card | null => {
    let currentDeck = [...deck];
    if (currentDeck.length < 10) { // Keep a buffer
      console.log("Deste azalıyor, desteler birleştirilip yeniden karıştırılıyor.");
      currentDeck = shuffleDeck([...currentDeck, ...createDeck()]);
    }
    const card = currentDeck.pop();
    setDeck(currentDeck);
    return card || null;
  },[deck]);

  const handlePlaceBet = useCallback((amount: number) => {
    if (amount > 0 && amount <= money) {
      setMoney(prev => prev - amount);
      setCurrentBet(amount);
      setDealerCard(drawCard());
      setPlayerCard(null);
      setGameState(GameState.ReadyToGuess);
      setRoundMessage('Tahminin ne? Yüksek mi, düşük mü?');
    }
  }, [money, drawCard]);

  const handleGuess = useCallback((guess: 'higher' | 'lower') => {
    const newPlayerCard = drawCard();
    setPlayerCard(newPlayerCard);

    if (!dealerCard || !newPlayerCard) return;

    let message = '';
    let moneyChange = 0;
    let isWin = false;

    const playerValue = newPlayerCard.value;
    const dealerValue = dealerCard.value;
    
    if (playerValue > dealerValue) {
        isWin = guess === 'higher';
    } else if (playerValue < dealerValue) {
        isWin = guess === 'lower';
    } else { // Push condition
        if (selectedCardData?.feature === 'PUSH_IS_WIN') {
            isWin = true;
        } else {
            message = 'Berabere! Bahis iade edildi.';
            moneyChange = currentBet;
            setWinStreak(0);
        }
    }

    if(isWin) {
        let winAmount = currentBet * 2;
        message = `Kazandın!`;

        // Royal Bonus Check
        if (selectedCardData?.feature === 'ROYAL_BONUS' && [11, 12, 13].includes(playerValue)) {
            const bonus = Math.floor(currentBet * 0.25);
            winAmount += bonus;
            message += ` Asil Bonus: +${bonus}!`;
        }
        
        message += ` (+${winAmount} Para)`;
        moneyChange = winAmount;
        setWinStreak(prev => prev + 1);

    } else if (message === '') { // Loss condition
        message = `Kaybettin!`;
        // Streak Shield Check
        if (selectedCardData?.feature === 'STREAK_SHIELD' && winStreak >= 3) {
            message += ' Ama Obsidyen Kalkanı bahsini korudu!';
            moneyChange = currentBet;
        }
        setWinStreak(0);
    }
    
    setRoundMessage(message);
    const newMoney = money + moneyChange;
    setMoney(newMoney);
    
    if(newMoney === 0) {
        setGameState(GameState.Busted);
        setRoundMessage('Tüm paranı kaybettin!');
    } else {
        setGameState(GameState.RoundOver);
    }
  }, [dealerCard, currentBet, money, drawCard, selectedCardData, winStreak]);

  const handleNextRound = useCallback(() => {
    setDealerCard(null);
    setPlayerCard(null);
    setCurrentBet(0);
    setGameState(GameState.ReadyToBet);
    setRoundMessage('Yeni tur! Bahis yap.');
  }, []);

  const handleBailout = useCallback(() => {
      const bailoutAmount = selectedCardData?.feature === 'BAILOUT_BOOST' ? BAILOUT_BOOST_AMOUNT : BAILOUT_MONEY;
      setMoney(bailoutAmount);
      setGameState(GameState.ReadyToBet);
      setWinStreak(0);
      setRoundMessage(`Tekrar hoş geldin! ${bailoutAmount} Para ile devam et.`);
  }, [selectedCardData]);

  const handleBuyItem = useCallback((item: ShopItem) => {
    if (money >= item.price && !ownedItems.includes(item.id)) {
      setMoney(prev => prev - item.price);
      setOwnedItems(prev => [...prev, item.id]);
    }
  }, [money, ownedItems]);
  
  const cardBackClass = selectedCardData?.className || 'bg-sky-800 border-2 border-sky-600';

  return (
    <div className="flex flex-col h-screen bg-slate-900 font-sans">
        <Header money={money} onOpenShop={() => setIsShopOpen(true)} />
        <main className="flex-grow container mx-auto max-w-4xl w-full flex flex-col p-4 min-h-0">
            <GameBoard
              dealerCard={dealerCard}
              playerCard={playerCard}
              roundMessage={roundMessage}
              isPlayerCardFaceDown={gameState === GameState.ReadyToGuess}
              cardBackClass={cardBackClass}
            />
            <Controls
                gameState={gameState}
                money={money}
                onPlaceBet={handlePlaceBet}
                onGuess={handleGuess}
                onNextRound={handleNextRound}
                onBailout={handleBailout}
            />
        </main>
        <Shop
            isOpen={isShopOpen}
            onClose={() => setIsShopOpen(false)}
            money={money}
            items={SHOP_ITEMS}
            ownedItemIds={ownedItems}
            selectedItemId={selectedCardBackId}
            onBuy={handleBuyItem}
            onSelect={setSelectedCardBackId}
        />
    </div>
  );
}