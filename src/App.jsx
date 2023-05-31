import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Actores from "./routes/Actores";
import Directores from "./routes/Directores";
import Estudios from "./routes/Estudios";
import Canciones from "./routes/Cancion";
import ActorScreen from "./components/ActorScreen";
import DirectorScreen from "./components/DirectorScreen";
import EstudioScreen from "./components/EstudioScreen";
import CancionScreen from "./components/CancionScreen";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="p-2 mt-4">
          <Routes>
            <Route path="/" element={<Actores />} />
            <Route path="/directores" element={<Directores />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/canciones" element={<Canciones />} />
            <Route path="/actorscreen" element={<ActorScreen />} />
            <Route path="/directorscreen" element={<DirectorScreen />} />
            <Route path="/estudioscreen" element={<EstudioScreen />} />
            <Route path="/cancionscreen" element={<CancionScreen />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
