import React from "react";

import Character from "../character/character.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Goku",
          imageUrl:
            "https://media.interaksyon.com/wp-content/uploads/2020/01/Son-Goku.jpg",
          id: 1,
          linkUrl: "goku",
        },
        {
          title: "Vegeta",
          imageUrl: "https://i.redd.it/81i19fa6ng871.jpg",
          id: 2,
          linkUrl: "vegeta",
        },
        {
          title: "Gohan",
          imageUrl:
            "https://conteudo.imguol.com.br/c/entretenimento/9c/2017/07/14/gohan-1500057808905_v2_900x506.jpg.webp",
          id: 3,
          linkUrl: "gohan",
        },
        {
          title: "Trunks",
          imageUrl: "https://images2.alphacoders.com/772/thumb-1920-772447.jpg",
          id: 4,
          linkUrl: "trunks",
        },
        {
          title: "Piccolo",
          imageUrl:
            "https://hotstuff4geeks.com/wp-content/uploads/2021/08/Dragon-Ball-Super-Super-Hero-Piccolos-Look-Has-Changed.-See-the-Differences.jpg",
          id: 5,
          linkUrl: "piccolo",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <Character key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
