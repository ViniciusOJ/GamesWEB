import axios from "axios";

// base da url: https://free-to-play-games-database.p.rapidapi.com/api/

const api = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
  headers: {
    "X-RapidAPI-Key": "560e44a1d8msh9573f1a4fdb329dp18e19fjsn3490a292c450",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});

export default api;
