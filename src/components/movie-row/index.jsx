import axios from "~/utils/api/axios";
import React, { useEffect, useState } from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
