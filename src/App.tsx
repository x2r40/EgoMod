
import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { FeaturedApps } from './components/FeaturedApps';
import { AppList } from './components/AppList';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { SeoArticles } from './components/SeoArticles';
import { Game } from './types';
import { GAMES, TRENDING_GAME_IDS } from './constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  const trendingGames = GAMES.filter(game => TRENDING_GAME_IDS.includes(game.id));
  const filteredGames = GAMES.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Preloader isVisible={isLoading} />
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <FeaturedApps games={trendingGames} onSelectGame={handleSelectGame} />
          <AppList
            games={filteredGames}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectGame={handleSelectGame}
          />
          <SeoArticles />
        </main>
        <Footer />
        <DownloadModal game={selectedGame} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default App;