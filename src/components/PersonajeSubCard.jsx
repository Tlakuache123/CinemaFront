const PersonajeSubCard = ({ data }) => {
  return (
    <>
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">{data.personaje}</h1>
          <h2 className="text-md font-mono">{data.nombre}</h2>
        </div>
        <div>
          <p>
            <span className="font-bold">Tipo: </span>
            {data.tipo_personaje}
          </p>
          <p>
            <span className="font-bold">Anio: </span>
            {data.anio}
          </p>
          <p>
            <span className="font-bold">Fecha: </span>
            {data.fecha_estreno.slice(0, 10)}
          </p>
        </div>
        <div className="mt-2">
          <p className="font-semibold">Descripcion</p>
          <div className="m-2 p-2 rounded-md bg-slate-200/20">
            <p>{data.descripcion}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-semibold">Sipnosis de pelicula</p>
          <div className="m-2 p-2 rounded-md bg-slate-200/20">
            <p>{data.sipnosis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonajeSubCard;
