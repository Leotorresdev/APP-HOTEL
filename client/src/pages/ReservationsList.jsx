import { useEffect, useState } from "react";
import { getReservations } from "../utils/api";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const ReservationsList = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    getReservations().then(setReservations);
  }, []);
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#06b6d4", display: "flex", alignItems: "center", gap: 1 }}>
          <EventAvailableIcon /> Reservas realizadas
        </Typography>
        <List>
          {reservations.map((r) => (
            <ListItem key={r.id}>
              <ListItemText
                primary={`${r.nombre} (${r.correo}) - ${r.comentarios}`}
                secondary={`Entrada: ${new Date(r.entrada).toLocaleDateString()} | Salida: ${new Date(r.salida).toLocaleDateString()} | Comentarios: ${r.comentarios || "N/A"}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ReservationsList;