import { Typography, Grid, Card, CardContent, Box, Paper } from "@mui/material";
import { FaWifi, FaSwimmer, FaUtensils } from "react-icons/fa";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const services = [
  {
    title: "Wi-Fi de alta velocidad",
    icon: <FaWifi size={36} />,
    description: "Conéctate en cualquier parte del hotel sin interrupciones.",
    color: "#06b6d4",
  },
  {
    title: "Piscina climatizada",
    icon: <FaSwimmer size={36} />,
    description: "Relájate en nuestra moderna piscina interior y exterior.",
    color: "#7c3aed",
  },
  {
    title: "Restaurante gourmet",
    icon: <FaUtensils size={36} />,
    description: "Disfruta de platillos típicos e internacionales preparados por chefs expertos.",
    color: "#f472b6",
  },
];

const ServicesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-10"
    >
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: "#7c3aed",
          fontWeight: "bold",
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Servicios destacados
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid columns={{xs: 12, sm: 6, md: 4}} key={index}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.18)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 6,
                  background: `linear-gradient(135deg, #fff 60%, ${service.color}11 100%)`,
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "box-shadow 0.3s",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: service.color,
                      background: `${service.color}22`,
                      borderRadius: "50%",
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 2px 12px 0 ${service.color}33`,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#334155",
                      mb: 1,
                      letterSpacing: 0.5,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      fontSize: "1.05rem",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default ServicesSection;
