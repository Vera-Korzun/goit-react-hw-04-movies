import React from "react";

import MoviesList from "../../main/movisList/MoviesList";
import HomeStyled from "./HomeStyled";

const HomePage = ({ dataMovies }) => {
  return (
    <HomeStyled>
      <div className="homepage">
        <h2>Trending today</h2>
        <MoviesList dataMovies={dataMovies} />
      </div>
    </HomeStyled>
  );
};

export default HomePage;
