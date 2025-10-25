import React from "react";
import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import Cart from "../pages/Cart";

const RootLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isWhiteNav =
    location.pathname.startsWith("/checkout") ||
    location.pathname.startsWith("/cart");

  const hideAuthButtons = isWhiteNav;

  return (
    <div>
      <div className="min-h-screen ">
        <NavBar
          whiteBg={isWhiteNav}
          hideAuthButtons={hideAuthButtons}
          isHome={isHome}
        />
        {isHome && <Herosection />}

        {/* Page content */}
        <main>
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
