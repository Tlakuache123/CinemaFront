import { useEffect, useState } from "react";
import { usePelisStore } from "../store";
import PeliculaSubCard from "./PeliculaSubCard";
import { PORT } from "../configs";

const CancionScreen = () => {
  const cancionId = usePelisStore((state) => state.cancion_id);
  const [cancion, setCancion] = useState({});
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    if (cancionId === "") return;

    fetch(`http://localhost:${PORT}/cancion/${cancionId}`)
      .then((r) => r.json())
      .then((r) => {
        setCancion(r[0]);
      })
      .catch((e) => console.warn(e));

    fetch(`http://localhost:${PORT}/soundtrack/${cancionId}/cancion`)
      .then((r) => r.json())
      .then((r) => {
        setPeliculas(r);
      })
      .catch((e) => console.warn(e));
  }, [cancionId]);

  if (Object.keys(cancion).length === 0 || !cancion) {
    return (
      <>
        <h1 className="text-xl">Cancion Screen</h1>
        <p>Cargando</p>
      </>
    );
  }

  return (
    <>
      <div className="m-4">
        <h1 className="text-3xl text-center">Cancion</h1>
        <figure className="shadow-lg rounded-lg p-2 mx-24">
          <div className="flex">
            <div className="px-2 flex justify-center content-center">
              <p className="w-40 h-40 bg-slate-300 rounded-lg"></p>
            </div>
            <div className="grow p-2 rounded-lg flex justify-center content-center">
              <div className="m-auto">
                <p className="text-2xl capitalize h-content">
                  {cancion.nombre}
                </p>
              </div>
            </div>
          </div>
        </figure>
        <div className="shadow-lg rouned-lg p-4">
          <h1 className="mb-4 text-xl text-center">Usada en</h1>
          {peliculas.map((pelicula) => (
            <PeliculaSubCard key={pelicula.id_pelicula} data={pelicula} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CancionScreen;
