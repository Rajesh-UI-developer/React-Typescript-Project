import { FC } from "react";
import "../sidenav/sidenav.css";
import { NavLink } from "react-router-dom";

const Sidenav: FC = () => {
  return (
    <>
      <div className="side_navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              <i className="fa fa-laptop" aria-hidden="true"></i>Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to="Casmetics"  className={(navData) => (navData.isActive ? "active" : "")}>
              <i className="fa fa-female" aria-hidden="true"></i>Casmetics
            </NavLink>
          </li>
          <li>
            <NavLink to="applance">
              <i className="fa fa-bath" aria-hidden="true"></i>Home Applance
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidenav;
