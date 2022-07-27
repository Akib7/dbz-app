import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./character.styles.scss";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const Character = ({ title, imageUrl, linkUrl, router }) => (
  <div
    className="character"
    onClick={() => router.navigate(`${router.location.pathname}${linkUrl}`)}
  >
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

export default withRouter(Character);
