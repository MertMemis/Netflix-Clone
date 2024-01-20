import axios from "~/utils/api/axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [translateValue, setTranslateValue] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const doubledMovies = [...request.data.results, ...request.data.results];
      setMovies(doubledMovies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleScroll = (direction) => {
    const container = document.getElementById("movie-container");
    const cardWidth = 1423;
    const maxTranslateValue = (movies.length - 35) * cardWidth;

    const isAtStart = translateValue === 0;

    if (direction === "left" && !isAtStart) {
      setTranslateValue((prevTranslateValue) =>
        Math.min(prevTranslateValue + cardWidth, 0)
      );
    } else if (direction === "right") {
      setTranslateValue((prevTranslateValue) =>
        Math.max(prevTranslateValue - cardWidth, -maxTranslateValue)
      );
    }
  };

  return (
    <div className="pl-[70px] overflow-hidden">
      <h2 className="text-2xl mt-8 mb-3">{title}</h2>

      <div className="absolute z-10 flex w-full h-[130px]">
        <button
          className={`-ml-[70px] bg-[#14141480] hover:bg-[#141414b3] h-full w-16 ${
            translateValue === 0 ? "invisible" : "visible"
          }`}
          onClick={() => handleScroll("left")}
        >
          <IoIosArrowBack size={40} />
        </button>
        <button
          className="ml-auto pr-32 w-24 h-full bg-[#14141480] hover:bg-[#141414b3] text-center"
          onClick={() => handleScroll("right")}
        >
          <IoIosArrowForward size={40} className=" ml-4" />
        </button>
      </div>

      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${translateValue}px)` }}
      >
        {movies.map((movie, index) => (
          <img
            key={index}
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
            className="w-full object-contain max-h-[130px] mr-1.5 rounded transition duration-450 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}
