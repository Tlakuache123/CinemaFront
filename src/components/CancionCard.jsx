import { useNavigate } from "react-router-dom";
import { usePelisStore } from "../store";

const CancionCard = ({ data }) => {
  const setCancionId = usePelisStore((set) => set.set_cancion_id);
  const { nombre, genero, duracion } = data;
  const navigate = useNavigate();

  const handleClick = (id) => {
    setCancionId(id);
    navigate("/cancionscreen");
  };

  return (
    <>
      <div
        className="p-4 m-1 border-solid border rounded-md shadow-lg bg-gradient-to-b from-pink-100 cursor-pointer"
        onClick={() => handleClick(nombre)}
      >
        <div className="flex">
          <h1 className="capitalize font-medium text-xl">{nombre}</h1>
          <div className="grow"></div>
          <p className="text-sm font-mono">{duracion}</p>
        </div>
        <div className="mt-2">
          <p>Genero: {genero}</p>
        </div>
      </div>
    </>
  );
};

export default CancionCard;
