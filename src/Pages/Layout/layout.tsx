import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Header from "../../Components/header";
import Sidenav from "../../Components/sidenav";

const Layout: FC = () => {
  return (
    <>
      <div>
        <Header />
        <Sidenav />
        <div className="contents_">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
