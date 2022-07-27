import React from "react";

import "./character.styles.scss";

const Character = ({ title, imageUrl, linkUrl }) => (
  <div className="character">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default Character;

// import React from "react";

// import "./character.styles.scss";

// const MenuItem = ({ title, imageUrl, size }) => (
//   <div className={`${size} menu-item`}>
//     <div
//       className="background-image"
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//       }}
//     />
//     <div className="content">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <span className="subtitle">SHOP NOW</span>
//     </div>
//   </div>
// );

// export default MenuItem;
