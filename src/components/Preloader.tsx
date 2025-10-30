
import React from 'react';

interface PreloaderProps {
  isVisible: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const Ball = ({ delay }: { delay: string }) => (
    <div
      className="absolute top-0 left-0 w-full h-full rounded-full bg-green-500 animate-scale-out"
      style={{ animationDelay: delay }}
    ></div>
  );
  
  // Define animation in a style tag as tailwind.config.js is not available
  const keyframes = `
    @keyframes scale-out {
      0% { transform: scale(0); opacity: 0; }
      5% { opacity: 1; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-scale-out {
      animation: scale-out 1s linear infinite;
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Ball delay="0s" />
          <Ball delay="-0.4s" />
          <Ball delay="-0.2s" />
        </div>
      </div>
    </>
  );
};