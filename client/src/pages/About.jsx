/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Paper,
  Avatar,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { deepPurple, amber, teal, pink } from "@mui/material/colors";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const About = () => {
  const horarios = [
    { dia: "Lunes a Viernes", hora: "8:00 AM - 9:00 PM" },
    { dia: "Sábados", hora: "9:00 AM - 8:00 PM" },
    { dia: "Domingos y Feriados", hora: "10:00 AM - 6:00 PM" },
  ];

  // Habitaciones
  const habitaciones = [
    {
      tipo: "Estándar",
      imagen:
        "https://img.freepik.com/foto-gratis/interior-sitio-alojamiento-comodo_1232-1822.jpg?semt=ais_hybrid&w=740",
      descripcion: "Cómoda, ideal para una o dos personas.",
      color: teal[400],
      precio: 35,
    },
    {
      tipo: "Suite Ejecutiva",
      imagen:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/7d/5b/a5/habitacion-suite-ejecutiva.jpg",
      descripcion: "Amplia, con sala y jacuzzi privado.",
      color: deepPurple[400],
      precio: 50,
    },
    {
      tipo: "Familiar",
      imagen:
        "https://www.granhoteljaca.com/wp-content/uploads/imagen-destacada-habitacion-familiar.jpg",
      descripcion: "Perfecta para familias de hasta 5 personas.",
      color: amber[500],
      precio: 60,
    },
  ];

  // Promociones
  const promociones = [
    {
      titulo: "3x2 en fines de semana",
      detalle: "Reserva dos noches y te damos la tercera gratis.",
      icon: <LocalOfferIcon sx={{ color: pink[400] }} />,
    },
    {
      titulo: "Descuento estudiantes",
      detalle: "20% de descuento mostrando carnet universitario.",
      icon: <StarIcon sx={{ color: amber[700] }} />,
    },
    {
      titulo: "Plan romántico",
      detalle: "Decoración especial, vino y desayuno incluido.",
      icon: <FavoriteIcon sx={{ color: pink[400] }} />,
    },
  ];

  // Valores con iconos
  const valores = [
    {
      label: "Hospitalidad con calidez humana",
      icon: <FavoriteIcon sx={{ color: pink[400] }} />,
    },
    {
      label: "Compromiso con la calidad y el confort",
      icon: <StarIcon sx={{ color: amber[700] }} />,
    },
    {
      label: "Respeto por la cultura local y el entorno natural",
      icon: <EmojiEventsIcon sx={{ color: teal[400] }} />,
    },
    {
      label: "Innovación constante en nuestros servicios",
      icon: <LocalOfferIcon sx={{ color: deepPurple[400] }} />,
    },
  ];

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
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Hero */}
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 6 },
            mb: 6,
            background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
            color: "#fff",
            borderRadius: 4,
            boxShadow: 6,
            position: "relative",
            overflow: "hidden",
            maxWidth: 800,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              letterSpacing: 1,
              textShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            Conoce más sobre nosotros
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, opacity: 0.95 }}>
            Un refugio moderno en el corazón de Trujillo, nuestro jardín de Venezuela Boconó.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}>
            Con más de 10 años de trayectoria, fusionamos la serenidad de la naturaleza con el confort moderno para crear experiencias inolvidables. Miles de huéspedes han confiado en nosotros para vivir momentos únicos en la región andina.
          </Typography>
        </Paper>

        {/* Misión y Valores */}
        <Grid
          container
          spacing={4}
          sx={{
            mb: 6,
            justifyContent: "center",
            alignItems: "stretch",
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          <Grid columns={{ xs: 12, md: 6 }} display="flex">
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#7c3aed",
                  fontWeight: "bold",
                  mb: 2,
                  letterSpacing: 0.5,
                }}
              >
                Nuestra Misión
              </Typography>
              <Typography variant="body1" sx={{ color: "#334155" }}>
                Brindar una experiencia de hospitalidad auténtica, cálida y de alta calidad, superando las expectativas de nuestros huéspedes y promoviendo el turismo en el hermoso estado Trujillo.
              </Typography>
            </Paper>
          </Grid>
          <Grid columns={{ xs: 12, md: 6 }} display="flex">
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#06b6d4",
                  fontWeight: "bold",
                  mb: 2,
                  letterSpacing: 0.5,
                }}
              >
                Nuestros Valores
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
                {valores.map((v, i) => (
                  <Chip
                    key={i}
                    icon={v.icon}
                    label={v.label}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      bgcolor: "#f1f5f9",
                      color: "#334155",
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Frase */}
        <Box
          sx={{
            my: 6,
            textAlign: "center",
            background: "linear-gradient(90deg, #f472b6 0%, #7c3aed 100%)",
            color: "#fff",
            borderRadius: 3,
            py: 3,
            px: 2,
            boxShadow: 3,
            maxWidth: 800,
            width: "100%",
            mx: "auto",
          }}
        >
          <Typography variant="h6" sx={{ fontStyle: "italic" }}>
            “Trujillo no solo es una tierra de paisajes; es una tierra de historias. Y en nuestro hotel, queremos ser parte de la tuya.”
          </Typography>
        </Box>

        {/* Horarios */}
        <Box sx={{ mb: 6, width: "100%", maxWidth: 900, mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#7c3aed",
              fontWeight: "bold",
              mb: 2,
              letterSpacing: 0.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <AccessTimeIcon sx={{ color: "#06b6d4" }} /> Horarios de atención
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {horarios.map((h, i) => (
              <Grid columns={{ xs: 12, md: 4 }} key={i}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    bgcolor: "#f1f5f9",
                    color: "#334155",
                    borderLeft: `6px solid ${i === 0 ? "#06b6d4" : i === 1 ? "#7c3aed" : "#f472b6"}`,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {h.dia}
                  </Typography>
                  <Typography variant="body2">{h.hora}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Habitaciones */}
        <Box sx={{ mb: 6, width: "100%", maxWidth: 1100, mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#06b6d4",
              fontWeight: "bold",
              mb: 2,
              letterSpacing: 0.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <MeetingRoomIcon sx={{ color: "#7c3aed" }} /> Tipos de habitaciones
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {habitaciones.map((hab, i) => (
              <Grid columns={{ xs: 12, sm: 6, md: 4 }} key={i} display="flex" justifyContent="center">
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 6,
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: 12,
                    },
                    width: "100%",
                    maxWidth: 340,
                    mx: "auto",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={hab.imagen}
                    alt={hab.tipo}
                    sx={{
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: hab.color,
                        fontWeight: "bold",
                        mb: 1,
                        letterSpacing: 0.5,
                        textAlign: "center",
                      }}
                    >
                      {hab.tipo}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", textAlign: "center" }}>
                      {hab.descripcion}
                    </Typography>
                     <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <AttachMoneyIcon sx={{ color: "#06b6d4" }} />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#06b6d4",
                          fontWeight: "bold",
                        }}
                      >
                        {hab.precio} USD <span style={{ fontWeight: 400, fontSize: "0.95rem" }}>/ noche</span>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Promociones */}
        <Box sx={{ mb: 6, width: "100%", maxWidth: 900, mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#f472b6",
              fontWeight: "bold",
              mb: 2,
              letterSpacing: 0.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <LocalOfferIcon sx={{ color: "#06b6d4" }} /> Promociones disponibles
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {promociones.map((promo, i) => (
              <Grid columns={{xs: 12, sm: 4}} key={i}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    bgcolor: "#fff0f6",
                    color: "#7c3aed",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#f472b6",
                      color: "#fff",
                      width: 40,
                      height: 40,
                    }}
                  >
                    {promo.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {promo.titulo}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                      {promo.detalle}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </motion.div>
   );
  };

export default About;
