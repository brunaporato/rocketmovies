import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmoviesapi-54ac.onrender.com"
});