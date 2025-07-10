// src/components/AddGameForm.tsx
import { useState } from 'react';

export type GameInput = {
  title: string;
  description: string;
  genre: string;
  platform: string;
};

type Props = {
  onSubmit: (data: GameInput) => void;
};

const AddGameForm = ({ onSubmit }: Props) => {
  const [form, setForm] = useState<GameInput>({
    title: '',
    description: '',
    genre: '',
    platform: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', description: '', genre: '', platform: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <input
        type="text"
        name="title"
        placeholder="Game Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={form.genre}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="platform"
        placeholder="Platform"
        value={form.platform}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Game
      </button>
    </form>
  );
};

export default AddGameForm;
