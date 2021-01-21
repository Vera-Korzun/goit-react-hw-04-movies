import React from "react";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header">
        <ul className="header__list">
          <li className="header__list-item">Home</li>
          <li className="header__list-item">Movies</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
