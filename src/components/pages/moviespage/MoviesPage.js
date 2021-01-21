import React from "react";
import MoviesPageStyled from "./MoviesPageStyled";

const MoviesPage = () => {
  return (
    <MoviesPageStyled>
      <div className="movies">
        <h2>Movies</h2>
        <form className="movies__form">
          <input
            className="movies__form-input"
            type="text"
            placeholder="Search movies"
          />
          <button type="submit" className="movies__form-btn">
            <span className="movies__form-btn-label">Search</span>
          </button>
        </form>
      </div>
    </MoviesPageStyled>
  );
};

export default MoviesPage;
