import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Capriconus</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Library</Link>
      <Link to="/add" className="hover:underline">Add Game</Link>
    </div>
  </nav>
);

export default NavBar;
