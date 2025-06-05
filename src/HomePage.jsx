import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h1>Selçuk’un Oyunları</h1>
      <p>Basit ama eğlenceli oyunları keşfet. İlk oyun şimdi yayında!</p>
      <Link to="/oyun">
        <button>Oyunu Oyna</button>
      </Link>
    </div>
  );
}

export default HomePage;
