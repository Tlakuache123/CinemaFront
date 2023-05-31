import { SlSymbolMale, SlSymbleFemale } from "react-icons/sl";
import { usePelisStore } from "../store";
import { useNavigate } from "react-router-dom";

const ActorCard = ({ data }) => {
  const setActorId = usePelisStore((set) => set.set_actor_id);
  const { id_persona, nombre, genero, nro_pelicula, nacionalidad } = data;
  const navigate = useNavigate();

  const handleClick = (id) => {
    setActorId(id);
    navigate("/actorscreen");
  };

  return (
    <>
      <div
        className="p-4 m-1 border-solid border rounded-md shadow-lg bg-gradient-to-b from-pink-100 cursor-pointer"
        onClick={() => handleClick(id_persona)}
      >
        <div className="flex">
          <h1 className="capitalize font-medium text-xl">{nombre}</h1>
          <div className="grow"></div>
          <p>{genero === "m" ? <SlSymbolMale /> : <SlSymbleFemale />}</p>
        </div>
        <div className="mt-2">
          <p>Peliculas: {nro_pelicula}</p>
          <p>Nacionalidad: {nacionalidad}</p>
        </div>
      </div>
    </>
  );
};

export default ActorCard;
