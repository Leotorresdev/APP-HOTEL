import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Close, MeetingRoom } from "@mui/icons-material";
import logo from "../assets/icono.jpg";
// Importa tu store de autenticación
import { useAuthStore } from "../store/authStore";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

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

        <div className="hidden md:flex items-center space-x-2">
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
          {isAdmin && (
            <button
              onClick={() => navigate("/rooms")}
              title="Gestión de habitaciones"
              className="ml-2 p-2 rounded-full hover:bg-primary/10 transition text-primary"
            >
              <MeetingRoom fontSize="large" />
            </button>
          )}
        </div>
        {isAdmin && (
      <button
        onClick={() => {
          logout();
          navigate("/rooms"); // o a donde quieras redirigir
        }}
        title="Cerrar sesión"
        className="ml-2 p-2 rounded-full hover:bg-red-100 transition text-red-600"
      >
        <LogoutIcon fontSize="large" />
      </button>
    )}

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
          {isAdmin && (
            <button
              onClick={() => {
                toggleMenu();
                navigate("/rooms");
              }}
              title="Gestión de habitaciones"
              className="w-full flex items-center gap-2 mt-2 p-2 rounded-lg hover:bg-primary/10 transition text-primary"
            >
              <MeetingRoom fontSize="medium" />
              <span>Gestión de habitaciones</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
