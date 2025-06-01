import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  baseURL: "http://127.0.0.1:5001/clone2025-138e6/us-central1/api",
  responseType: "json",
});

export { axiosInstance };
