import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ color: "white", fontWeight: "bold" }}>🎮 Selçuk Games</div>
      <div>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/oyun">Oyna</Link>
        <Link to="/hakkinda">Hakkında</Link>
      </div>
    </nav>
  );
}

export default Navbar;
