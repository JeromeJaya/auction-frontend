import axios from "axios";

const VITE_API = import.meta.env.VITE_API || "http://localhost:5000";

export const api = axios.create({
  baseURL: `${VITE_API}/api`,
  withCredentials: true,
});
