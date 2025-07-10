import { useState } from 'react';
import { createGame } from '../api/api';

const AddGameForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    genre: '',
    platform: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createGame(form);
    alert('Game added!');
    setForm({ title: '', description: '', genre: '', platform: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="p-2" />
      <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" className="p-2" />
      <input name="platform" value={form.platform} onChange={handleChange} placeholder="Platform" className="p-2" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Game</button>
    </form>
  );
};

export default AddGameForm;
