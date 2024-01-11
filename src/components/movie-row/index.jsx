import axios from "~/utils/api/axios";
import React, { useEffect, useState } from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="">
      <h2>{title}</h2>

      <div className="flex">
        {movies.map((movie) => (
          <img
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
            className="w-full object-contain max-h-[100px] mr-[10px] transition duration-450 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}
