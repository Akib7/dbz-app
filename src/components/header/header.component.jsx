import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/appLogo.svg";
// import { ReactComponent as Logo } from "../..assets/dragonball-z.svg";

const Header = () => {
  <div className="header">
    <Link className="logo-container" to={"/"}>
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to={"/"}>
        SHOP
      </Link>
      <Link className="option" to={"/"}>
        CONTACTS
      </Link>
      <Link className="option" to={"/"}>
        SIGN IN
      </Link>
    </div>
  </div>;
};

export default Header;
