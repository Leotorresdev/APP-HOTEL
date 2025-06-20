import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: (email, password) => {
    // 🔐 Lógica temporal (ficticia)
    if (email === "admin@hotel.com" && password === "1234") {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));
