
export enum GameState {
  ReadyToBet,
  ReadyToGuess,
  RoundOver,
  Busted,
}

export const SUITS = ['♥', '♦', '♣', '♠'] as const;
export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] as const;

export type Suit = typeof SUITS[number];
export type Rank = typeof RANKS[number];

export interface Card {
  suit: Suit;
  rank: Rank;
  value: number;
}

export type CardFeature = 'PUSH_IS_WIN' | 'BAILOUT_BOOST' | 'ROYAL_BONUS' | 'STREAK_SHIELD';

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  className: string;
  description: string;
  feature?: CardFeature;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user' | 'system';
  text: string;
}