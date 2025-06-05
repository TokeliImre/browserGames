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
      <h2>Oyunu Yükle</h2>
      <p>Oyun birazdan aşağıda yüklenecek...</p>



      <iframe
        id="unity-iframe"
        src="/unitygame/index.html"
        width="1368"
        height="768"
        style={{
          border: "none",
          display: "block",
          margin: "0 auto",
        }}
        title="Unity WebGL Oyunu"
        scrolling="no"
      />
    </div>
  );
}
export default OyunPage;