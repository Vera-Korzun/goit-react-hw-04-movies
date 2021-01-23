import React from "react";
import { NavLink } from "react-router-dom";

const MoviesListItem = ({ id, title }) => {
  return (
    <li>
      <NavLink to={`/movies/:${id}`}>{title}</NavLink>
    </li>
  );
};

export default MoviesListItem;
