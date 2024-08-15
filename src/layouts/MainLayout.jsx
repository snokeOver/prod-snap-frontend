import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />

      <div className="min-h-[calc(100vh-237px-16px)]">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
