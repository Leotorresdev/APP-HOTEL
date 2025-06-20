const API_URL = "http://localhost:4000";

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

export async function getRooms() {
  const res = await fetch(`${API_URL}/rooms`);
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





export async function getAllUsers() {
  const token = localStorage.getItem("adminToken");
  const res = await fetch("http://localhost:4000/users/all", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("No autorizado");
  return await res.json();
}




export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Credenciales inválidas");
  return await res.json(); // { token, role } o { message, role }
}