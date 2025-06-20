import { Typography, Paper } from "@mui/material";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const WelcomeBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-10"
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, md: 5 },
          background: "linear-gradient(90deg, #06b6d4 0%, #7c3aed 100%)",
          color: "#fff",
          borderRadius: 4,
          boxShadow: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 16, right: 24, opacity: 0.15, fontSize: 120 }}>
          <FaLeaf />
        </div>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            letterSpacing: 1,
            textShadow: "0 2px 8px rgba(0,0,0,0.12)",
            zIndex: 2,
            position: "relative",
          }}
        >
          Bienvenido al corazón de Trujillo, nuestro jardín de Venezuela Boconó
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            fontSize: { xs: "1.1rem", md: "1.2rem" },
            opacity: 0.95,
            zIndex: 2,
            position: "relative",
          }}
        >
          Descubre un lugar donde la hospitalidad se une con la naturaleza.
          Nuestro hotel ofrece una experiencia única para relajarte, trabajar o explorar.
          Con servicios de primer nivel, atención personalizada y un entorno espectacular,
          estamos aquí para hacer que tu estadía sea inolvidable.
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default WelcomeBlock;