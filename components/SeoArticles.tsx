
import React from 'react';

const articles = [
  {
    title: 'Experience Unrivaled Realism with Assetto Corsa Mobile',
    content: 'Get behind the wheel with Assetto Corsa Mobile, the ultimate racing simulator now available for your device. Known for its realistic physics and meticulous attention to detail, this game brings the thrill of professional racing to the palm of your hand. Master iconic tracks and drive legendary cars, all rendered with stunning graphics. If you\'re a true fan of racing, Assetto Corsa Mobile is a must-have, offering an unparalleled driving experience on the go.',
  },
  {
    title: 'Explore the Sprawling City of Los Santos in GTA 5 Mobile',
    content: 'The legendary world of Grand Theft Auto V is now accessible anywhere with GTA 5 Mobile. Dive into the interconnected lives of Michael, Franklin, and Trevor as you explore the vast and detailed open world of Los Santos and Blaine County. From high-stakes heists to chaotic side missions, GTA 5 Mobile delivers the complete console experience, optimized for your phone. Enjoy the freedom to cause mayhem, build your criminal empire, or simply enjoy the view.',
  },
  {
    title: 'Discover the Vibrant World of Forza Horizon 5 Mobile',
    content: 'The Horizon Festival awaits in Forza Horizon 5 Mobile! Race through the breathtaking, ever-evolving landscapes of Mexico in hundreds of the world\'s greatest cars. This version brings the stunning graphics, limitless driving action, and dynamic seasons of the original to your mobile device. Whether you\'re drifting on a volcano or racing through lush jungles, Forza Horizon 5 Mobile offers an adrenaline-fueled adventure that never stops.',
  },
  {
    title: 'Master the Art of Movement in Rooftops & Alleys Mobile',
    content: 'Leap, slide, and flow through urban landscapes in Rooftops & Alleys Mobile. This game is dedicated to the art of parkour and freerunning, challenging you to navigate complex environments with precision, style, and speed. The fluid movement system allows for incredible creativity as you find your own path across the city. Experience the adrenaline rush of this physically expressive game, now optimized for mobile.',
  },
  {
    title: 'Build Your Dream Team in eFootball™ 2024',
    content: 'Step onto the pitch in eFootball™ 2024, the new era of digital soccer. This game offers an authentic and realistic football simulation where you can play with the biggest clubs and national teams. Build your unique Dream Team by signing legendary players and top talents. Compete against players from around the world in real-time matches and prove your squad is the best. Experience the beautiful game like never before.',
  },
];

const Article: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <article className="mb-8 p-6 bg-zinc-800/50 rounded-lg">
    <h2 className="text-2xl font-bold mb-2 text-green-400 tracking-wide">{title}</h2>
    <p className="text-zinc-400 leading-relaxed text-base">{content}</p>
  </article>
);


export const SeoArticles: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-4xl">
         <div className="flex items-center mb-8">
             <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
             <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-100">About Our Games</h3>
          </div>
        {articles.map(article => (
          <Article key={article.title} title={article.title} content={article.content} />
        ))}
      </div>
    </section>
  );
};
