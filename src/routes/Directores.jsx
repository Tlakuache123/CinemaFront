import { useEffect, useState } from "react";
import DirectorCard from "../components/DirectorCard";
import { PORT } from "../configs";

const Directores = () => {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${PORT}/director/full`)
      .then((r) => r.json())
      .then((r) => {
        setDirectores(r);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Directores</h1>
        <div className="px-16 mt-6">
          {directores.map((actor) => (
            <DirectorCard key={actor.id_persona} data={actor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Directores;
