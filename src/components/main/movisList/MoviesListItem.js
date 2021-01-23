import React from "react";
import { NavLink } from "react-router-dom";

const MoviesListItem = ({ id, title }) => {
  return (
    <li>
      {/* <NavLink to={id}>{title}</NavLink> */}
      {title}
    </li>
  );
};

export default MoviesListItem;
