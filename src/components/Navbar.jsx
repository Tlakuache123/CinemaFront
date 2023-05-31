import NavLink from "./Navlink";

const Navbar = () => {
  return (
    <>
      <div className="mx-6">
        <div className="flex align-center justify-center gap-2 py-4 px-6 rounded-full shadow-lg shadow-pink-200">
          <h1 className="text-md md:text-xl font-medium md:font-semibold">
            Peli-Plus
          </h1>
          <div className="flex gap-1 md:gap-4 content-center grow justify-center md:justify-start">
            <NavLink name={"Actores"} path={"/"} />
            <NavLink name={"Directores"} path={"/directores"} />
            <NavLink name={"Estudios"} path={"/estudios"} />
            <NavLink name={"Musica"} path={"/canciones"} />
          </div>
          <input className="border-solid border border-slate-300 rounded-md"></input>
          <button className="px-2 py-1 border-solid border rounded-md border-emerald-400 text-emerald-500">
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
