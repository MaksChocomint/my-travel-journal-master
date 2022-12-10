import React from "react";
import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="logo" className="header__logo" />
      <h2 className="header__title">my travel journal.</h2>
    </header>
  );
}

export default Header;
