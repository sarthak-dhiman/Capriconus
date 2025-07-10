// src/pages/AddGame.tsx
import AddGameForm, { GameInput } from '../components/AddGameForm';

const AddGame = () => {
  const handleAddGame = (game: GameInput) => {
    console.log('Game added:', game);
    // TODO: Send to backend or store in local state
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Game</h2>
      <AddGameForm onSubmit={handleAddGame} />
    </div>
  );
};

export default AddGame;
