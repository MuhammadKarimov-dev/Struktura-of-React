// src/Layout/Layout.tsx
import Navbar from "../view/Navbar/Navbar";
import Footer from "../view/Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Login va Register sahifalarini aniqlash
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!isAuthPage && <Navbar />} {/* Login va Register sahifalarida Navbar ni yashirish */}
      {children}
      {!isAuthPage && <Footer />} {/* Login va Register sahifalarida Footer ni yashirish */}
    </div>
  );
};

export default Layout;