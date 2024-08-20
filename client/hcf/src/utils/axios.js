import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3800/",
  // baseURL: "https://aggressive-bikini-dove.cyclic.app/",
  baseURL: "https://backend.makewell.life",
});

export default axiosInstance;
