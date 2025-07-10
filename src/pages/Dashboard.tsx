import { useEffect, useState } from 'react';
import { getGames } from '../api/api';
import GameCard from '../components/GameCard';

const Dashboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames();
      setGames(data);
    };
    fetchGames();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Dashboard;
