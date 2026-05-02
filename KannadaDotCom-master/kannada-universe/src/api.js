
import axios from "axios";

// Use Vite env variables (import.meta.env) in browser. Falls back to localhost mock server.
const API = axios.create({
  baseURL: (import.meta.env && import.meta.env.VITE_API_BASE) || "http://localhost:5000"
});

export default API;
