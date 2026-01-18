import axios from "axios";

export const http = axios.create({
  baseURL: "https://swapi.thehiveresistance.com/api",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});