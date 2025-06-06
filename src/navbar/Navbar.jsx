import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">🎮 Elbaş Games</Link>
        <ul className="navbar-links">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/hakkinda">Hakkında</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
