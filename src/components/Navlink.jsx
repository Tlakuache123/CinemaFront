import { NavLink as NLink } from "react-router-dom";

const NavLink = ({ path, name }) => {
  return (
    <div className="text-sm md:text-lg align-middle">
      <NLink to={path}>
        <p>{name}</p>
      </NLink>
    </div>
  );
};

export default NavLink;
