
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/d1/ec/7d/d1ec7d8f291c0c3547706db1b5d82511.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide">EgoMod</h1>
          <p className="mt-2 text-base md:text-lg font-light text-zinc-200">
            Your #1 Free Alternative Store - All Games in One Place!
          </p>
        </div>
      </div>
    </header>
  );
};