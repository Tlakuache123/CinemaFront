import { useEffect, useState } from "react";
import { usePelisStore } from "../store";
import PeliculaSubCard from "./PeliculaSubCard";
import { PORT } from "../configs";

const DirectorScreen = () => {
  const directorId = usePelisStore((state) => state.director_id);
  const [director, setDirector] = useState({});
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    if (directorId === "") return;

    fetch(`http://localhost:${PORT}/director/full/${directorId}`)
      .then((r) => r.json())
      .then((r) => {
        setDirector(r[0]);
      })
      .catch((e) => console.warn(e));

    fetch(`http://localhost:${PORT}/peliculadirector/${directorId}/director`)
      .then((r) => r.json())
      .then((r) => {
        setPeliculas(r);
      })
      .catch((e) => console.warn(e));
  }, [directorId]);

  if (Object.keys(director).length === 0 || !director) {
    return (
      <>
        <h1 className="text-xl">Director Screen</h1>
        <p>Cargando</p>
      </>
    );
  }

  return (
    <>
      <div className="m-4">
        <h1 className="text-3xl text-center">Director</h1>
        <figure className="shadow-lg rounded-lg p-2">
          <div className="flex">
            <div className="px-2 flex justify-center content-center">
              <p className="w-40 h-40 bg-slate-300 rounded-lg"></p>
            </div>
            <div className="grow p-2 rounded-lg">
              <p className="text-2xl capitalize">{director.nombre}</p>
              <p className="text-lg capitalize">
                {director.apellido_p} {director.apellido_m}
              </p>
              <div className="mt-2">
                <ul className="list-disc pl-6">
                  <li>
                    <p>Nacionalidad: {director.nacionalidad}</p>
                  </li>
                  <li>
                    <p>
                      Genero:{" "}
                      {director.genero === "m" ? "Masculino" : "Femenino"}
                    </p>
                  </li>
                  <li>
                    <p>Peliculas dirigidas: {director.nro_peliculas}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>
        <div className="shadow-lg rouned-lg p-4">
          <h1 className="mb-4 text-xl text-center">Peliculas dirigidas</h1>
          {peliculas.map((pelicula) => (
            <PeliculaSubCard key={pelicula.id_pelicula} data={pelicula} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DirectorScreen;
