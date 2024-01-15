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
    <div
      className=" text-white object-contain h-screen item-center flex"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
         "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className=" ml-16 pt-72 h-full">
        <div className=" cursor-default">
          <h1 className=" text-[3rem] pb-1 font-bold">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <h1 className=" w-[45rem] pt-4 text-lg max-w-lg">
            {movie?.overview}
          </h1>
        </div>
        <div className="flex mt-14 ">
          <button className=" bg-white text-black items-center font-medium flex px-6 py-2 mr-4 space-x-2 rounded text-[1.25rem] hover:bg-[#ffffffbf]">
            <svg
              viewBox="0 0 24 24"
              className="h-[1.75rem] text-black"
              fill="currentColor"
            >
              <path d="M 5 2.69127 C 5 1.93067 5.81547 1.44851 6.48192 1.81506 L 23.4069 11.1238 C 24.0977 11.5037 24.0977 12.4963 23.4069 12.8762 L 6.48192 22.1849 C 5.81546 22.5515 5 22.0693 5 21.3087 V 2.69127 Z" />
            </svg>
            <span className=" ml-auto">Play</span>
          </button>
          <button className="bg-[#6d6d6eb3] text-white items-center font-medium flex px-6 py-2 mr-4 space-x-2 rounded text-[1.25rem] hover:bg-[#6d6d6e66]">
            <svg
              viewBox="0 0 24 24"
              className="h-[1.75rem] text-white"
              fill="currentColor"
            >
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" />
            </svg>
            <span className=" ml-auto">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
