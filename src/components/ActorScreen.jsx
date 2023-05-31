import { useEffect, useState } from "react";
import { usePelisStore } from "../store";
import PersonajeSubCard from "./PersonajeSubCard";
import { PORT } from "../configs";

const ActorScreen = () => {
  const actorId = usePelisStore((state) => state.actor_id);
  const [actor, setActor] = useState({});
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    if (actorId === "") return;

    fetch(`http://localhost:${PORT}/actor/full/${actorId}`)
      .then((r) => r.json())
      .then((r) => {
        setActor(r[0]);
      })
      .catch((e) => console.warn(e));

    fetch(`http://localhost:${PORT}/personaje/${actorId}/persona`)
      .then((r) => r.json())
      .then((r) => {
        setPersonajes(r);
      })
      .catch((e) => console.warn(e));
  }, [actorId]);

  if (Object.keys(actor).length === 0 || !actor) {
    return (
      <>
        <p>Cargando</p>
      </>
    );
  }

  return (
    <>
      <div className="m-4">
        <h1 className="text-3xl text-center">Actor</h1>
        <figure className="shadow-lg rounded-lg p-2">
          <div className="flex">
            <div className="px-2 flex justify-center content-center">
              <p className="w-40 h-40 bg-slate-300 rounded-lg"></p>
            </div>
            <div className="grow p-2 rounded-lg">
              <p className="text-2xl capitalize">{actor.nombre}</p>
              <p className="text-lg capitalize">
                {actor.apellido_p} {actor.apellido_m}
              </p>
              <div className="mt-2">
                <ul className="list-disc pl-6">
                  <li>
                    <p>Nacionalidad: {actor.nacionalidad}</p>
                  </li>
                  <li>
                    <p>
                      Genero: {actor.genero === "m" ? "Masculino" : "Femenino"}
                    </p>
                  </li>
                  <li>
                    <p>Nro Peliculas: {actor.nro_pelicula}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>
        <div className="shadow-lg rouned-lg p-4">
          <h1 className="mb-4 text-xl text-center">Personajes</h1>
          {personajes.map((personaje) => (
            <PersonajeSubCard key={personaje.id_pelicula} data={personaje} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ActorScreen;
