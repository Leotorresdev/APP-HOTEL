import { create } from "zustand";
import { login } from "../utils/api";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isAdmin: false,
  login: async (email, password) => {
    try {
      const data = await login(email, password);
      if (data.token && data.role === "admin") {
        localStorage.setItem("adminToken", data.token);
        set({ isAuthenticated: true, isAdmin: true });
      } else {
        localStorage.removeItem("adminToken");
        set({ isAuthenticated: true, isAdmin: false });
      }
      return true;
    } catch {
      localStorage.removeItem("adminToken");
      set({ isAuthenticated: false, isAdmin: false });
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem("adminToken");
    set({ isAuthenticated: false, isAdmin: false });
  },
}));
