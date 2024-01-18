import Banner from "~/components/banner";
import Row from "~/components/movie-row/index.jsx";
import requests from "~/utils/api/requests";
import Header from "~/components/header";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Header />
        <Banner />

        <div className=" relative z-10">
          <Row
            title="Popular on Netflix"
            fetchUrl={requests.fetchPopularNetflix}
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rating" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Animations" fetchUrl={requests.fetchAnimations} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Family" fetchUrl={requests.fetchFamily} />
          <Row title="Crime" fetchUrl={requests.fetchCrime} />
        </div>
      </div>
    </div>
  );
}
