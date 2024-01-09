import axios from "axios";


const apiBase = axios.create({
   baseURL: "https://api.themoviedb.org/3",
});

export default apiBase;