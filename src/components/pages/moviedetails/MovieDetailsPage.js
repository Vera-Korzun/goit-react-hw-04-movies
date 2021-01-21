import React from "react";
import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";
import MovieDetailsStyled from "./MovieDetailsStyled";

const MovieDetailsPage = () => {
  return (
    <MovieDetailsStyled>
      <div className="details">
        <h4>Additional information</h4>
        <Cast />
        <Reviews />
      </div>
    </MovieDetailsStyled>
  );
};

export default MovieDetailsPage;
