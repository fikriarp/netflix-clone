import React, { useEffect, useState } from "react";
import { getMovieList } from "../api";

function Row() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie list:", error);
      });
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <div>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
