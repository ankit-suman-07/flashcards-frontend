import { create } from "zustand";

export const useUserData = create((set) => ({
  username: "",
  password: "",
  updateUser: (username) => set({ username }),
  updatePassword: (password) => set({ password })
}));

export const useLoggedInUser = create((set) => ({
    user: {},
    isLoggedIn: false,
    updateLoggedStatus: (isLoggedIn) => set({isLoggedIn}),
    updateLoggedUser: (user) => set({user})
}));