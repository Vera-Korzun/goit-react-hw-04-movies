import React, { useState } from "react";
import MoviesList from "../../main/movisList/MoviesList";
import MovieDetailsPage from "../moviedetails/MovieDetailsPage";
import MoviesPageStyled from "./MoviesPageStyled";

const initialState = {
  query: "",
  serching: false,
};

const MoviesPage = ({ onClick, dataMoviesSearch }) => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { value } = e.target;
    setState({ query: value, serching: true });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onClick(state.query);
    //console.log("onFormSubmit this.state.query ==>>", query);
  };

  return (
    <MoviesPageStyled>
      <div className="movies">
        <h2>Movies</h2>
        <form className="movies__form" onSubmit={onFormSubmit}>
          <input
            className="movies__form-input"
            type="text"
            placeholder="Search movies"
            onChange={onHandleChange}
          />
          <button type="submit" className="movies__form-btn">
            <span className="movies__form-btn-label">Search</span>
          </button>
        </form>
        {/* {state.serching && <MoviesList dataMovies={dataMoviesSearch} />} */}
      </div>
      <MovieDetailsPage />
    </MoviesPageStyled>
  );
};

export default MoviesPage;
