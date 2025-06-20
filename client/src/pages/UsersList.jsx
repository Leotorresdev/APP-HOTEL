import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/api";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#7c3aed" }}>
          Usuarios registrados
        </Typography>
        <List>
          {users.map((u) => (
            <ListItem key={u.id}>
              <ListItemText primary={u.email} secondary={new Date(u.createdAt).toLocaleString()} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UsersList;