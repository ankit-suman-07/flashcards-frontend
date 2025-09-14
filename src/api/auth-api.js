// src/api/authApi.js
import axios from "axios";

const API_URL = "http://localhost:5555/api/auth";

export const loginApi = async (email, passwordHash) => {
  const res = await axios.post(`${API_URL}/login`, { email, passwordHash });
  return res.data; // { user, token }
};

export const logoutApi = async () => {
  return await axios.post(`${API_URL}/logout`);
};
