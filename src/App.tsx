import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import AddGame from './pages/AddGame';
import GameDetails from './pages/GameDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddGame />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
