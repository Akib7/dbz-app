import React from "react";

import "./display-character.styles.scss";

//display Chaacter

const DisplayCharacter = ({ title, imageUrl, description }) => (
  <div className="displayCharacter-container">
    <div className="characters">
      <div className="displayCharacter-image">
        <img src={imageUrl} alt="displayCharacter" />
      </div>

      <div className="content">
        <h1 className="title">{title}</h1>

        <p className="description">{description}</p>
      </div>
    </div>
  </div>
);

export default DisplayCharacter;
