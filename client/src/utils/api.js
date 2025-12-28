const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Set `VITE_API_URL` in client/.env to point to your deployed backend.



// --- Autenticación ---
export async function adminLogin(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Credenciales inválidas");
  const data = await res.json();
  localStorage.setItem("adminToken", data.token);
  return data.token;
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Credenciales inválidas");
  return await res.json(); // { token, role }
}

// --- Rooms ---
export async function getRooms() {
  const res = await fetch(`${API_URL}/rooms`);
  if (!res.ok) throw new Error("Error al obtener rooms");
  return await res.json();
}

export async function createRoom(room) {
  const token = localStorage.getItem("adminToken");
  const res = await fetch(`${API_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(room),
  });
  if (!res.ok) throw new Error("No autorizado o error al crear");
  return await res.json();
}

export async function deleteRoom(id) {
  const token = localStorage.getItem("adminToken");
  const res = await fetch(`${API_URL}/rooms/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("No autorizado o error al eliminar");
  return await res.json();
}

// --- Users ---
export async function getAllUsers() {
  const token = localStorage.getItem("adminToken");
  const res = await fetch(`${API_URL}/users/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("No autorizado");
  return await res.json();
}

// --- Reservations ---
export async function createReservation(data) {
  const res = await fetch(`${API_URL}/reservations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear la reserva");
  return await res.json();
}

export async function getReservations() {
  const res = await fetch(`${API_URL}/reservations`);
  if (!res.ok) throw new Error("Error al obtener reservas");
  return await res.json();
}