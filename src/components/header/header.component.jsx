import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import MyImage from "../../assets/dbzk_logo.jpg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to={"/"}>
      <img src={MyImage} alt="logo" />
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
  </div>
);

export default Header;
