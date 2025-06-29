import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Reservation from "../pages/Reservation";
import AdminRooms from "../pages/AdminRooms";
import UsersList from "../pages/UsersList";
import ReservationsList from "../pages/ReservationsList";

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/rooms" element={<AdminRooms />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/reservations-list" element={<ReservationsList />} /> 
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
