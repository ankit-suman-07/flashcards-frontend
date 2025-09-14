// src/store/authStore.js
import { create } from "zustand";
import { loginApi, logoutApi } from "../api/auth-api";
import { saveToken, removeToken } from "../utils/storage";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  login: async (email, password) => {
    try {
      const { user, token } = await loginApi(email, password);
      saveToken(token);
      set({ user, token });
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    await logoutApi();
    removeToken();
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
