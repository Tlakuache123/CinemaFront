import { useEffect, useState } from "react";
import CancionCard from "../components/CancionCard";
import { PORT } from "../configs";

const Canciones = () => {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${PORT}/cancion`)
      .then((r) => r.json())
      .then((r) => {
        setCanciones(r);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Musica</h1>
        <div className="px-16 mt-6">
          {canciones.map((cancion) => (
            <CancionCard key={cancion.nombre} data={cancion} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Canciones;
