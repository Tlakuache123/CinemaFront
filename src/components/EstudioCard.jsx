import { useNavigate } from "react-router-dom";
import { usePelisStore } from "../store";

const EstudioCard = ({ data }) => {
  const setEstudioId = usePelisStore((state) => state.set_estudio_id);
  const { id_estudio, nombre_estudio } = data;
  const navigate = useNavigate();

  const handleClick = (id) => {
    setEstudioId(id);
    navigate("/estudioscreen");
  };

  return (
    <>
      <div className="p-4 m-1 border-solid border rounded-md shadow-lg bg-gradient-to-b from-pink-100 cursor-pointer" onClick={() => handleClick(id_estudio)}>
        <div className="flex">
          <h1 className="capitalize font-medium text-xl">{nombre_estudio}</h1>
        </div>
        <div className="mt-2"></div>
      </div>
    </>
  );
};

export default EstudioCard;
