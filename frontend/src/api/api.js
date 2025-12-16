import axios from "axios";

const API = axios.create({
  baseURL: "https://filevault-backend-a5vh.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (
    token &&
    !req.url.includes("/auth/login") &&
    !req.url.includes("/auth/register")
  ) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
