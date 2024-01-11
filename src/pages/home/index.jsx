import Row from "~/components/movie-row/index.jsx";
import requests from "~/utils/api/requests";

export default function Home() {
  return (
    <div>
      <Row title="Popular on Netflix" fetchUrl={requests.fetchPopularNetflix} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rating" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}
