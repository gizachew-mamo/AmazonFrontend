import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  
  baseURL: "https://amazonbackend-ubnu.onrender.com",
  responseType: "json",
});

export { axiosInstance };
