import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTopButton/>
    </>
  );
};

export default MainLayout;