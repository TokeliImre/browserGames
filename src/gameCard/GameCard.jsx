import { Link } from "react-router-dom";
import "./GameCard.css"


function GameCard({ title, description, image, link }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} className="game-image" />
      <div className="game-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link}>
          <button className="play-button">Oyunu Oyna</button>
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
