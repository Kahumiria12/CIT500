import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const MainLayout = () => {
  return (
    <div className=" bg-stone-950 text-stone-100">
      {/* Setup Layout */}
      <div className="flex flex-col">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
