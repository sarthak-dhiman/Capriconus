import GameCard from '../components/GameCard';

const dummyGames = [
  { id: '1', title: 'Cyberpunk 2077', description: 'Futuristic RPG shooter' },
  { id: '2', title: 'Witcher 3', description: 'Open world RPG with Geralt' }
];

const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Your Library</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dummyGames.map(game => <GameCard key={game.id} game={game} />)}
    </div>
  </div>
);

export default Dashboard;
