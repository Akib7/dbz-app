import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./goku.styles.scss";

class Goku extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Goku",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_goku.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 1,
          description:
            "A Saiyan warrior born on Planet Vegeta and sent to Earth as a baby.\nHis Saiyan name is Kakarot, but he was given the name Goku by his adoptive grandfather Gohan, from whom he also learned martial arts.\nAfter Gohan's passing, Goku spent his days alone in the mountains until visited by a young girl in search of the mystical Dragon Balls...",
        },
      ],
    };
  }

  render() {
    return (
      <div className="goku">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Goku;
