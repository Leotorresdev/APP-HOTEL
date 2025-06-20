/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Typography, Container, Grid, Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import WelcomeBlock from "../components/WelcomeBlock";
import ServicesSection from "../components/ServicesSection";
import BlogCard from "../components/BlogCard";
import WeatherBanner from "../components/WeatherBanner";

const articles = [
  {
    title: "Laguna de los Cedros Boconó estado Trujillo: un paraíso escondido",
    summary:
      "Descubre los paisajes y la naturaleza que no puedes dejar de visitar en tu viaje al estado Trujillo.",
    image:
    //si tengo una imagen guardada en la carpeta assets, usaré como las uso
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Laguna_Los_Cedros_%2811846232765%29.jpg",

     // "/assets/Laguna.jpg",
  },
  {
    title: "Virgen de la Paz: tradición y espiritualidad en Trujillo",
    summary:
      "Explora la historia y el significado de la Virgen de la Paz, patrona del estado Trujillo.",
    image:
      "https://venparasaber.com/wp-content/uploads/2024/03/Virgen-de-la-Paz.png",
  },
  {
    title: "Gastronomía trujillana: sabores andinos",
    summary:
      "Conoce los platos típicos que no puedes perderte durante tu estadía en Trujillo.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_g4E3B1MR2RSqy7SMB0uOy_faaU8dKXYuxy4H5OkBsinSvoKE8WnAAGIi3k8lqp_uK2Va_8D5R16ZMt7GDTTtYUs_RbOSuit2kDBtpsmDWtHUuwbnzamma5jnEoUKreSu_WP9bwcdc2mdGGcujpgTkXZLi36gDyGe6XjuC1L5ogT7yK5qhzpeav1lrRH8/s1920/La%20Arepa%20Un%20viaje%20a%20trav%C3%A9s%20de%20la%20historia%20y%20la%20gastronom%C3%ADa%20venezolana.JPG",
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        minHeight: "100vh",
      }}
    >
      <WeatherBanner />
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <WelcomeBlock />
        <ServicesSection />

        <Box
          sx={{
            mt: 10,
            mb: 6,
            textAlign: "center",
            background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
            color: "#fff",
            borderRadius: 3,
            py: 3,
            px: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              mb: 1,
              textShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            Tips de viaje y artículos turísticos
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "1.1rem", md: "1.2rem" },
            }}
          >
            Inspírate y prepárate para tu experiencia en Trujillo y los Andes venezolanos.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid columns={{xs: 12, sm: 6, md: 4}} key={index}>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.18)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BlogCard {...article} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Home;
