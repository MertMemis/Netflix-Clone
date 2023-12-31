import axios from '~/utils/api/axios';
import React, { useEffect, useState } from 'react'

const base_url = "https://image.tmdb.org/t/p/original/"

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

   console.table(movies)
  return (
    <div>
      <h2>{title}</h2>

      <div className="">
         {movies.map(movie => (
            <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
         ))}
      </div>
    </div>
  )
}