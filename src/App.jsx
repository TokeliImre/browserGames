import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import OyunPage from "./OyunPage";
import HakkindaPage from "./HakkindaPage";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oyun" element={<OyunPage />} />
        <Route path="/hakkinda" element={<HakkindaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;