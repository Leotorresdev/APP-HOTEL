/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const bgImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; // Puedes cambiar por otra imagen de hotel

const HeroSection = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Hotel Los Andes
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow text-white/90">
          Donde la tranquilidad se encuentra con la elegancia
        </p>
        <a
          href="/reservation"
          className="inline-block bg-primary hover:bg-white hover:text-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 border-2 border-white"
        >
          Reserva ahora
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;