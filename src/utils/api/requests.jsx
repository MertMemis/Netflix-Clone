const API_KEY = "8651454b12de067b27007e9edf9fdfe8";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopularNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
};

315162;
export default requests;
