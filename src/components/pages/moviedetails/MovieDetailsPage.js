import React from "react";
import { NavLink } from "react-router-dom";
import moviesDetailsRoutes from "../../../routes/MoviesDetailsRouters";
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
        <ul>
          {moviesDetailsRoutes.map(({ name, path, exact }) => (
            <li key={path}>
              <NavLink to={path} exact={exact}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </MovieDetailsStyled>
  );
};

export default MovieDetailsPage;
