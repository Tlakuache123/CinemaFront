import { useEffect, useState } from "react";
import ActorCard from "../components/ActorCard";
import { PORT } from "../configs";

const Actores = () => {
  const [actores, setActores] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${PORT}/actor/full`)
      .then((r) => r.json())
      .then((r) => {
        setActores(r);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Actores</h1>
        <div className="px-16 mt-6">
          {actores.map((actor) => (
            <ActorCard key={actor.id_persona} data={actor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Actores;
