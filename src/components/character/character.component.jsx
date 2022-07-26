import React from "react";

import "./character.styles.scss";

const Character = ({ _name, imageUrl, linkUrl }) => (
  <div className="character">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{_name.toUpperCase()}</h1>
    </div>
  </div>
);

export default Character;
