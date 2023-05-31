import { useEffect, useState } from "react";
import { usePelisStore } from "../store";
import PeliculaSubCard from "./PeliculaSubCard";
import { PORT } from "../configs";

const EstudioScreen = () => {
  const estudioId = usePelisStore((state) => state.estudio_id);
  const [peliculas, setPeliculas] = useState([]);
  const [estudio, setEstudio] = useState({});

  useEffect(() => {
    if (estudioId === "") return;

    fetch(`http://localhost:${PORT}/estudio/${estudioId}`)
      .then((r) => r.json())
      .then((r) => {
        setEstudio(r[0]);
      })
      .catch((e) => console.warn(e));

    fetch(`http://localhost:${PORT}/peliculaestudio/${estudioId}/estudio`)
      .then((r) => r.json())
      .then((r) => {
        setPeliculas(r);
      })
      .catch((e) => console.warn(e));
  }, [estudioId]);

  if (Object.keys(estudio).length === 0 || !estudio) {
    return (
      <>
        <h1 className="text-xl">Director Screen</h1>
        <p>Cargando</p>
      </>
    );
  }

  return (
    <>
      <div className="m-4 flex justify-center flex-col">
        <h1 className="text-3xl text-center">Estudio</h1>
        <figure className="shadow-lg rounded-lg p-2 mx-24">
          <div className="flex">
            <div className="px-2 flex justify-center content-center">
              <p className="w-40 h-40 bg-slate-300 rounded-lg"></p>
            </div>
            <div className="grow p-2 rounded-lg flex justify-center content-center">
              <div className="m-auto">
                <p className="text-2xl capitalize h-content">
                  {estudio.nombre_estudio}
                </p>
              </div>
            </div>
          </div>
        </figure>
        <div className="shadow-lg rouned-lg p-4">
          <h1 className="mb-4 text-xl text-center">Peliculas</h1>
          {peliculas.map((pelicula) => (
            <PeliculaSubCard key={pelicula.id_pelicula} data={pelicula} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EstudioScreen;
