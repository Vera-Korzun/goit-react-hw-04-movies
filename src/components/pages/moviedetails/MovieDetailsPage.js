import React from "react";
import Details from "./details/Details";
import Navigation from "./details/navigation/Navigation";
import MovieDetailsStyled from "./MovieDetailsStyled";

const MovieDetailsPage = () => {
  return (
    <MovieDetailsStyled>
      <button
        type="button"
        // onClick="onHandleGoBack"
      >
        Go Back
      </button>
      <div className="details">
        <h4>Additional information</h4>
      </div>
      <Navigation />
      <Details />
    </MovieDetailsStyled>
  );
};

export default MovieDetailsPage;
