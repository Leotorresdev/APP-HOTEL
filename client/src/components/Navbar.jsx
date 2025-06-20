import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import logo from "../assets/icono.jpg"; // Cambia el nombre si tu archivo es diferente

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Sobre Nosotros" },
    { path: "/reservation", label: "Reservación" },
  ];

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const linkStyle =
    "text-gray-700 hover:text-primary transition font-medium px-3 py-1 rounded-lg hover:bg-primary/10";

  return (
    <header className="bg-white/90 shadow-lg backdrop-blur-md sticky top-0 z-50 border-b border-primary/10">
      <nav className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Hotel Trujillo Logo"
            className="w-10 h-10 rounded-full shadow-md border-2 border-primary group-hover:scale-110 transition"
            style={{ background: "#fff" }}
          />
          <span className="text-2xl font-extrabold text-secondary tracking-wide group-hover:text-primary transition">
            Hotel Los Andes
          </span>
        </Link>

        <div className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} bg-primary/10 text-primary`
                  : linkStyle
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full hover:bg-primary/10 transition"
        >
          {mobileOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/95 border-b border-primary/10 shadow">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} block bg-primary/10 text-primary`
                  : `${linkStyle} block`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
