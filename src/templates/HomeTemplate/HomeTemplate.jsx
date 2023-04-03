import { Outlet } from "react-router-dom";
import Menu from "./layout/Menu/Menu";
export const HomeTemplate = (props) => {
  return (
    <>
      <div className="container-home">
        <div className="menu">
          <Menu />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};
