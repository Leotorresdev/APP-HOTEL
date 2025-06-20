import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import { FaHotel } from "react-icons/fa";


const bgImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

const LoginScreen = () => {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (!success) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, #7c3aed99 0%, #06b6d499 100%), url(${bgImage}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background: "linear-gradient(120deg, #fff 80%, #e0e7ff 100%)",
            boxShadow: 10,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: "#7c3aed",
                color: "#fff",
                width: 70,
                height: 70,
                mb: 1,
                boxShadow: 3,
              }}
            >
              <FaHotel size={38} />
            </Avatar>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 1,
                letterSpacing: 1,
                color: "#7c3aed",
                textAlign: "center",
              }}
            >
              Iniciar Sesión
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#06b6d4",
                opacity: 0.95,
                mb: 2,
                textAlign: "center",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Bienvenido al portal de Hotel Los Andes
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Correo"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="filled"
                InputProps={{
                  style: { background: "#f8fafc", borderRadius: 8 },
                }}
              />
              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="filled"
                InputProps={{
                  style: { background: "#f8fafc", borderRadius: 8 },
                }}
              />
              {error && (
                <Typography sx={{ color: "#f472b6", fontWeight: "bold", textAlign: "center" }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
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
                Entrar
              </Button>
            </Box>
          </form>
          <Box
            sx={{
              mt: 4,
              textAlign: "center",
              color: "#64748b",
              fontStyle: "italic",
              fontSize: { xs: "1rem", md: "1.1rem" },
              opacity: 0.85,
            }}
          >
            Acceso exclusivo para huéspedes y personal de Hotel Trujillo
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginScreen;
