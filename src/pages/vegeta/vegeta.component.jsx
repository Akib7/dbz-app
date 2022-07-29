import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./vegeta.styles.scss";

class Vegeta extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Vegeta",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_vegeta.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 2,
          description: (
            <>
              <p>
                After changing his battle suit, Vegeta saw fit to provide both
                Gohan and Krillin with suits as well, knowing that the two
                should prove useful in the fight with Frieza. <br /> Vegeta's
                willingness to fight alongside his former enemies against a
                greater foe was emblematic of his combat experience.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="vegeta">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Vegeta;
