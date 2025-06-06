import GameCard from "./gameCard/GameCard";

function HomePage() {
  return (
    <div className="homepage">
      <h1>Tüm Oyunlar</h1>
      <p>Basit ama eğlenceli oyunları keşfet. İlk oyun şimdi yayında!</p>

      <div className="game-list">
        <GameCard
          title="Flappy Leylek"
          description="Zorlu engelleri aş ve en yüksek skoru elde et!"
          image={`${import.meta.env.BASE_URL}cardImageLeylek.png`}
          link="/oyun"
        />
        {/* Diğer kartlar buraya eklenecek */}
      </div>
    </div>
  );
}

export default HomePage;
