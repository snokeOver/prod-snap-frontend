import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />

      <div className="min-h-[calc(100vh-64px-349px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
