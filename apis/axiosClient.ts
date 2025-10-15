import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://nest-api-public.ixe-agent.io.vn/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = "YOUR_ACCESS_TOKEN";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;