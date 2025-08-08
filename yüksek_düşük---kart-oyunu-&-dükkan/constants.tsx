
import type { ShopItem } from './types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'default',
    name: 'Mavi Gökyüzü',
    price: 0,
    className: 'bg-sky-800 border-2 border-sky-600',
    description: 'Standart başlangıç destesi. Özel bir yeteneği yok.',
  },
  {
    id: 'lava',
    name: 'Sıcak Lav',
    price: 500,
    className: 'bg-red-900 border-2 border-orange-500',
    description: 'Beraberlik (Push) durumunda bahsin iade edilmesi yerine kazanırsın.',
    feature: 'PUSH_IS_WIN',
  },
  {
    id: 'forest',
    name: 'Orman Yeşili',
    price: 750,
    className: 'bg-emerald-900 border-2 border-lime-500',
    description: 'Paran bittiğinde (Bust) 100 yerine 150 Para kurtarma yardımı alırsın.',
    feature: 'BAILOUT_BOOST',
  },
  {
    id: 'royal',
    name: 'Asil Mor',
    price: 1200,
    className: 'bg-purple-900 border-2 border-amber-400',
    description: 'Vale, Kız veya Papaz (J, Q, K) ile kazandığında %25 ekstra para kazanırsın.',
    feature: 'ROYAL_BONUS',
  },
  {
    id: 'obsidian',
    name: 'Obsidyen',
    price: 2000,
    className: 'bg-gray-900 border-2 border-gray-500',
    description: '3 veya daha fazla el kazandıktan sonraki tur kaybedersen, bahsini kaybetmezsin (iade edilir).',
    feature: 'STREAK_SHIELD',
  },
];