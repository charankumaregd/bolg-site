import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ searchPost }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Navbar searchPost={searchPost} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
