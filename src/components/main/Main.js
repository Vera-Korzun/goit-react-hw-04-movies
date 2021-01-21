import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import MovieDetailsPage from "../pages/moviedetails/MovieDetailsPage";
import MoviesPage from "../pages/moviespage/MoviesPage";

const Main = () => {
  return (
    <>
      {/*    
        <Route path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} /> */}
      <HomePage />
      <MoviesPage />
      <MovieDetailsPage />
    </>
  );
};

export default Main;
