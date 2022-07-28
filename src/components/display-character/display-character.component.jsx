import React from "react";

import "./display-character.styles.scss";

const DisplayCharacter = ({ title, imageUrl, description }) => (
  <div className="displayCharacter-container">
    <div className="displayCharacter-image">
      <img src={imageUrl} alt="displayCharacter" />
    </div>

    <div className="content">
      <h1 className="title">{title}</h1>

      <p className="description">{description}</p>
    </div>
  </div>
);

export default DisplayCharacter;
