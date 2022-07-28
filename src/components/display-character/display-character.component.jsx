import React from "react";

import "./display-character.styles.scss";

//display Chaacter

const DisplayCharacter = ({ title, imageUrl, description }) => (
  <div className="displayCharacter-container">
    <div className="displayCharacter-image">
      <img src={imageUrl} alt="dgit isplayCharacter" />
    </div>

    <div className="content">
      <h1 className="title">{title}</h1>

      <p className="description">{description}</p>
    </div>
  </div>
);

export default DisplayCharacter;
