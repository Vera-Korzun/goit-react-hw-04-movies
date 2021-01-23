import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ dataMovies }) => {
  return (
    <>
      <ul>
        {dataMovies.map((movie, index) => (
          <MoviesListItem
            key={`${movie.id}${index}`}
            movie={movie}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
