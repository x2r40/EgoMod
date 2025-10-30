
import React from 'react';
import { Game } from '../types';
import { FaAndroid, FaApple, FaStar } from 'react-icons/fa';
import { IoCloudDownload, IoClose } from 'react-icons/io5';

interface DownloadModalProps {
  game: Game | null;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ game, onClose }) => {
  if (!game) return null;

  const handleDownloadClick = () => {
    if (typeof (window as any).og_load === 'function') {
      (window as any).og_load();
    } else {
      console.error('og_load function not found.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-zinc-800 rounded-xl shadow-2xl w-full max-w-md mx-auto text-center p-6 md:p-8 animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors">
          <IoClose size={28} />
        </button>

        <img src={game.icon} className="w-28 h-28 rounded-2xl mx-auto mb-4 border-4 border-zinc-700 object-cover" alt={`${game.name} icon`} />
        
        <div className="flex justify-center items-center gap-4 text-zinc-400 mb-2">
            <div className="flex items-center gap-2 text-lg"><FaAndroid /><FaApple /></div>
            <div className="w-px h-4 bg-zinc-600"></div>
            <div className="flex items-center gap-1"><FaStar className="text-yellow-400" /><span className="font-bold text-zinc-200">{game.rating}</span></div>
            <div className="w-px h-4 bg-zinc-600"></div>
            <div className="flex items-center gap-1"><IoCloudDownload className="text-green-400" /><span className="font-bold text-zinc-200">{game.downloads}</span></div>
        </div>

        <p className="text-xs text-green-400 mb-1">Author: {game.author}</p>
        <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
        <p className="text-zinc-300 text-sm mb-6">{game.description}</p>

        <div className="border-t border-zinc-700 pt-6">
          <h4 className="text-lg font-bold text-green-400">Download ready</h4>
          <p className="text-zinc-400 text-sm mb-4">Click the button below in order to start with your app download.</p>
          <button 
            onClick={handleDownloadClick}
            className="w-full max-w-xs mx-auto bg-green-600 text-white font-bold uppercase py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 animate-pulse"
          >
            Download Now
          </button>
        </div>
        
        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};