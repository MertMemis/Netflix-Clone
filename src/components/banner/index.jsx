import React, { useEffect, useState } from "react";
import axios from "~/utils/api/axios";
import requests from "~/utils/api/requests";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchPopularNetflix);

      if (response.data.results && response.data.results.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );

        setMovie(response.data.results[randomIndex]);
      } else {
        setMovie(null);
      }
    };

    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className=" text-white object-contain h-screen"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
         "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className=" ml-16 pt-80 h-full">
        <h1 className=" text-[3rem] pb-1 font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className=" w-[45rem] pt-4 text-4 leading-snug">
          {movie?.overview}
        </h1>
        <div>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </header>
  );
}
