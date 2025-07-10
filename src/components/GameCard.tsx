import { Link } from 'react-router-dom';

type Game = {
  id: string;
  title: string;
  description: string;
};

const GameCard = ({ game }: { game: Game }) => (
  <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">
    <h2 className="text-lg font-semibold mb-2">{game.title}</h2>
    <p className="text-sm text-gray-600 mb-3">{game.description}</p>
    <Link to={`/game/${game.id}`} className="text-blue-500 hover:underline">View Details</Link>
  </div>
);

export default GameCard;
