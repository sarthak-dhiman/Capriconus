import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Game ID: {id}</h2>
      <p className="text-gray-600">Detailed view coming soon...</p>
    </div>
  );
};

export default GameDetails;
