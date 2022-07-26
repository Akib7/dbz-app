import React from "react";
import Character from "../character/character.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          _name: "Goku",
          ImageUrl:
            "https://theouterhaven.b-cdn.net/wp-content/uploads/2022/03/goku-dragon-ball-guru-824x490-1-750x400.jpg",
          id: 1,
          linkUrl: "goku",
        },
        {
          _name: "Vegeta",
          ImageUrl: "https://i.redd.it/81i19fa6ng871.jpg",
          id: 2,
          linkUrl: "vegeta",
        },
        {
          _name: "Gohan",
          ImageUrl:
            "https://dragonball.guru/wp-content/uploads/2021/03/toppng.com-mystic-gohan-dragon-ball-z-gohan-1021x2859-1-e1617011806816-400x400.png",
          id: 3,
          linkUrl: "gohan",
        },
        {
          _name: "Trunks",
          ImageUrl: "https://images2.alphacoders.com/772/thumb-1920-772447.jpg",
          id: 4,
          linkUrl: "trunks",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => {
          <Character key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
