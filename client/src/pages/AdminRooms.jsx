import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Box,
  Paper,
} from "@mui/material";
import { getRooms, createRoom, deleteRoom, adminLogin } from "../utils/api";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", price: "", image: "" });
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("adminToken"));
  const [error, setError] = useState("");

  useEffect(() => {
    getRooms().then(setRooms);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await adminLogin(email, password);
      setIsAdmin(true);
      getRooms().then(setRooms);
      setError("");
    } catch {
      setError("Credenciales inválidas");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const roomToSend = { ...form, price: Number(form.price) };
      await createRoom(roomToSend);
      setForm({ name: "", type: "", price: "", image: "" });
      getRooms().then(setRooms);
      setError("");
    } catch {
      setError("No autorizado o error al crear");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRoom(id);
      setRooms(rooms.filter((r) => r.id !== id));
      setError("");
    } catch {
      setError("No autorizado o error al eliminar");
    }
  };

  if (!isAdmin) {
    return (
      <Container maxWidth="xs" sx={{ mt: 8 }}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#7c3aed" }}>
            Admin Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              name="email"
              label="Email admin"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" fullWidth sx={{
              background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
              color: "#fff",
              fontWeight: "bold"
            }}>
              Entrar como admin
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "#7c3aed" }}>
        Gestión de Habitaciones
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room) => (
          <Grid columns={{ xs: 12, sm: 6, md: 4 }} key={room.id}>
            <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
              <CardMedia
                component="img"
                height="160"
                image={room.image}
                alt={room.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#334155" }}>
                  {room.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  {room.type}
                </Typography>
                <Typography variant="body2" sx={{ color: "#06b6d4", fontWeight: "bold" }}>
                  ${room.price} USD / noche
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ mt: 2 }}
                  onClick={() => handleDelete(room.id)}
                >
                  Eliminar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box component="form" onSubmit={handleCreate} sx={{ mt: 6, maxWidth: 500, mx: "auto" }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#06b6d4" }}>
          Crear nueva habitación
        </Typography>
        <TextField
          label="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Tipo"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Precio"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Imagen (URL)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          Crear habitación
        </Button>
      </Box>
    </Container>
  );
};

export default AdminRooms;