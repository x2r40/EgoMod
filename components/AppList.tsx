
import React from 'react';
import { Game } from '../types';
import { FaStar, FaAndroid, FaApple } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

interface AppListProps {
  games: Game[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectGame: (game: Game) => void;
}

const AppCard: React.FC<{ game: Game; onSelect: () => void }> = ({ game, onSelect }) => (
  <div
    onClick={onSelect}
    className="bg-zinc-800 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-zinc-700/60 transition-all duration-200 shadow-lg"
  >
    <img src={game.icon} className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex-shrink-0 object-cover" alt={`${game.name} icon`} />
    <div className="flex-grow overflow-hidden">
      <div className="flex justify-between items-start">
        <p className="text-xs text-green-400">Author: <span className="font-semibold">{game.author}</span></p>
        <div className="flex text-zinc-400 text-lg gap-2">
          <FaAndroid />
          <FaApple />
        </div>
      </div>
      <div className="flex items-center gap-2 my-1">
        <h4 className="text-lg md:text-xl font-bold text-zinc-100 truncate">{game.name}</h4>
        <div className="flex items-center gap-1 pl-2 border-l border-zinc-600">
          <FaStar className="text-yellow-400" />
          <span className="font-bold text-zinc-200">{game.rating}</span>
        </div>
      </div>
      <p className="text-sm text-zinc-400 truncate hidden sm:block">{game.description}</p>
    </div>
  </div>
);

export const AppList: React.FC<AppListProps> = ({ games, searchQuery, setSearchQuery, onSelectGame }) => {
  return (
    <section className="py-8 md:py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center">
             <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
             <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-100">All Apps</h3>
          </div>
          <div className="relative w-full sm:w-auto sm:max-w-xs">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 text-xl" />
            <input
              type="text"
              placeholder="Search for apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-800 text-zinc-100 placeholder-zinc-400 rounded-full py-2.5 pl-11 pr-4 border-2 border-transparent focus:border-green-500 focus:ring-0 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {games.map(game => (
            <AppCard key={game.id} game={game} onSelect={() => onSelectGame(game)} />
          ))}
        </div>
      </div>
    </section>
  );
};