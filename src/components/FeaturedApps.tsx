
import React from 'react';
import { Game } from '../types';
import { FaStar } from 'react-icons/fa';

interface FeaturedAppsProps {
  games: Game[];
  onSelectGame: (game: Game) => void;
}

const FeaturedAppCard: React.FC<{ game: Game; onSelect: () => void }> = ({ game, onSelect }) => (
    <div
      onClick={onSelect}
      className="flex-shrink-0 w-32 md:w-36 text-center p-3 bg-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-700/50 transition-colors duration-200 space-y-2"
    >
      <img src={game.icon} className="w-24 h-24 rounded-xl mx-auto object-cover" alt={`${game.name} icon`} />
      <h4 className="text-sm font-bold truncate text-zinc-100">{game.name}</h4>
      <div className="flex items-center justify-center text-xs text-zinc-400 gap-1">
        <FaStar className="text-yellow-400" />
        <span className="font-bold text-zinc-200">{game.rating}</span>
      </div>
    </div>
);

export const FeaturedApps: React.FC<FeaturedAppsProps> = ({ games, onSelectGame }) => {
  return (
    <section className="py-8 md:py-12 bg-zinc-800/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-6">
          <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
          <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-100">Trending Apps</h3>
        </div>
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 hide-scrollbar">
          {games.map(game => (
            <FeaturedAppCard key={game.id} game={game} onSelect={() => onSelectGame(game)} />
          ))}
        </div>
      </div>
    </section>
  );
};