import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import OyunPage from "./OyunPage";
import HakkindaPage from "./HakkindaPage";
import Navbar from "./Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oyun" element={<OyunPage />} />
        <Route path="/hakkinda" element={<HakkindaPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;