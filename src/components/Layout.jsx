import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-mac-bg text-mac-text relative">
      <div className="noise-overlay"></div>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow min-h-screen relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
