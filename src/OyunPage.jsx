function OyunPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      padding: "40px 20px"
    }}>
      <h2>İyi Oyunlar</h2>
      



      <iframe
        id="unity-iframe"
        src="/browserGames/unitygame/index.html"
        width="1368"
        height="768"
        style={{ border: "none", borderRadius: "10px" }}
        title="Unity WebGL Oyunu"
        scrolling="no"
      />

    </div>
  );
}
export default OyunPage;