import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className=" bg-stone-950 text-stone-100">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br " />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Setup Layout */}
      <div className="flex flex-col">
        <NavBar />
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayout;
