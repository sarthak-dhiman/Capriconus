import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const getGames = async () => {
  const response = await axios.get(`${API_BASE_URL}/games`);
  return response.data;
};

export const getGameById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/games/${id}`);
  return response.data;
};

export const createGame = async (gameData: {
  title: string;
  description: string;
  genre: string;
  platform: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/games`, gameData);
  return response.data;
};

export const deleteGame = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/games/${id}`);
  return response.data;
};
