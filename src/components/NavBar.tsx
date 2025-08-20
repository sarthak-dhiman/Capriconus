import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src='/icon.ico' alt="logo" className="logo" />
        <h1 className="title">Capriconus</h1>
      </div>
      <div className="nav-links">
        <Link to="/library">Library</Link>
        <Link to="/add">Add Game</Link>
      </div>
    </nav>
  );
};

export default NavBar;
