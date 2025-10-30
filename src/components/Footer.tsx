
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} EgoMod. All Rights Reserved.</p>
      </div>
    </footer>
  );
};