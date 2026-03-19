import React from 'react';
import { Diamond, Crown, Heart, Flame, Star, X } from 'lucide-react';

const GIFTS = [
  {
    id: 'hearts',
    name: 'Дождь из сердец',
    description: 'Наполните чат любовью и нежностью',
    price: 150,
    effect: 'hearts',
    icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
  },
  {
    id: 'fire',
    name: 'Пламя страсти',
    description: 'Горячий эффект для ярких эмоций',
    price: 300,
    effect: 'fire',
    icon: <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
  },
  {
    id: 'stars',
    name: 'Звездная пыль',
    description: 'Волшебное сияние ночного неба',
    price: 500,
    effect: 'stars',
    icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
  }
];

export default function GiftShop({ onSelect, onClose }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 w-full max-w-sm ml-auto">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Premium Store</h3>
        <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded-lg transition-colors">
          <X className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
      <div className="space-y-2">
        {GIFTS.map((gift) => (
          <button
            key={gift.id}
            onClick={() => onSelect(gift)}
            className="w-full flex items-center gap-4 p-3 bg-zinc-950/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all text-left group"
          >
            <div className="p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform">
              {gift.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-zinc-100">{gift.name}</div>
              <div className="text-[10px] text-zinc-500 leading-tight">{gift.description}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-amber-500 font-bold text-sm">{gift.price}</div>
              <div className="text-[8px] text-zinc-600 uppercase font-black">Credits</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
