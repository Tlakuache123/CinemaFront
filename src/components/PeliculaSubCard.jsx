const PeliculaSubCard = ({ data }) => {
  return (
    <div className="m-2 p-4 rounded-md shadow-md">
      <div className="flex">
        <p className="text-lg font-semibold">{data.nombre}</p>
        <div className="grow"></div>
        <p className="text-sm font-mono">{data.duracion}</p>
      </div>
      <div>
        <div>
          <p className="text-sm font-mono">{data.anio}</p>
          <p>
            <span className="font-semibold">Financiamiento: </span> $
            {data.financiamiento}
          </p>
          <p>
            <span className="font-semibold">Clasificacion: </span>{" "}
            {data.clasificacion}
          </p>
          <p className="capitalize">
            <span className="font-semibold">Idioma: </span> {data.idioma}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p className="font-semibold">Sipnosis</p>
        <div className="m-2 p-2 rounded-md bg-slate-200/20">
          <p>{data.sipnosis}</p>
        </div>
      </div>
    </div>
  );
};

export default PeliculaSubCard;
