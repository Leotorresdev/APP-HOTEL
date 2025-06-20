import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import { FaHotel } from "react-icons/fa";
import { createReservation } from "../utils/api";

const Reservation = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    entrada: "",
    salida: "",
    comentarios: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await createReservation({
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        entrada: formData.entrada,
        salida: formData.salida,
        comentarios: formData.comentarios,
      });
      setMsg("¡Reservación enviada con éxito!");
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        entrada: "",
        salida: "",
        comentarios: "",
      });
    } catch {
      setMsg("Error al crear la reserva");
    }
  };

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
      <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 } }}>
        <Paper
          elevation={8}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background: "linear-gradient(120deg, #06b6d4 0%, #7c3aed 100%)",
            color: "#fff",
            boxShadow: 10,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#fff",
                color: "#7c3aed",
                width: 70,
                height: 70,
                mb: 1,
                boxShadow: 3,
              }}
            >
              <FaHotel size={38} />
            </Avatar>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 1,
                letterSpacing: 1,
                textShadow: "0 2px 8px rgba(0,0,0,0.12)",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Reserva tu estadía
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#e0e7ff",
                opacity: 0.95,
                mb: 2,
                textAlign: "center",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Vive la experiencia Hotel Trujillo. Completa el formulario y asegura tu lugar en nuestro paraíso andino.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid columns={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Nombre completo"
                  name="nombre"
                  fullWidth
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{
                    style: { background: "#f8fafc", borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid columns={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Correo electrónico"
                  name="correo"
                  type="email"
                  fullWidth
                  required
                  value={formData.correo}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{
                    style: { background: "#f8fafc", borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid columns={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Teléfono"
                  name="telefono"
                  fullWidth
                  value={formData.telefono}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{
                    style: { background: "#f8fafc", borderRadius: 8 },
                  }}
                />
              </Grid>


              <Grid columns={{ xs: 6, sm: 3 }}>
                <TextField
                  label="Entrada"
                  name="entrada"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.entrada}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{
                    style: { background: "#f8fafc", borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid columns={{ xs: 6, sm: 3 }}>
                <TextField
                  label="Salida"
                  name="salida"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.salida}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{
                    style: { background: "#f8fafc", borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid columns={{ xs: 12 }}>
                <TextField
                  label="Comentarios adicionales"
                  name="comentarios"
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.comentarios}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{
                    style: { background: "#f8fafc", borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid columns={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    borderRadius: 8,
                    background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
                    color: "#fff",
                    boxShadow: 4,
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "linear-gradient(90deg, #06b6d4 0%, #7c3aed 100%)",
                      color: "#fff",
                      boxShadow: 8,
                    },
                  }}
                >
                  Reservar ahora
                </Button>
              </Grid>
            </Grid>
          </form>
          {msg && (
            <Typography color={msg.includes("éxito") ? "primary" : "error"} sx={{ mt: 2, textAlign: "center" }}>
              {msg}
            </Typography>
          )}
          <Box
            sx={{
              mt: 4,
              textAlign: "center",
              color: "#e0e7ff",
              fontStyle: "italic",
              fontSize: { xs: "1rem", md: "1.1rem" },
              opacity: 0.85,
            }}
          >
            <FaHotel style={{ marginRight: 8, color: "#fff" }} />
            ¡Te esperamos para vivir una experiencia inolvidable en Hotel Trujillo!
          </Box>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default Reservation;