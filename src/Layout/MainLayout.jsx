import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="max-w-screen-xl min-h-screen mx-auto p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
