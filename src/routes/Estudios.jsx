import { useEffect, useState } from "react";
import EstudioCard from "../components/EstudioCard";
import { PORT } from "../configs";

const Estudios = () => {
  const [estudios, setEstudios] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${PORT}/estudio`)
      .then((r) => r.json())
      .then((r) => {
        setEstudios(r);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Estudios</h1>
        <div className="px-16 mt-6">
          {estudios.map((estudio) => (
            <EstudioCard key={estudio.id_estudio} data={estudio} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Estudios;
