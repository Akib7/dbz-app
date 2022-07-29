import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./yamcha.styles.scss";

class Yamcha extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Yamcha",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_yamcha.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 6,
          description: (
            <>
              <p>
                A young bandit Goku met on his journey when he was a child.
                Being a bandit, Yamcha would steal money from those that passed
                through his wasteland.
                <br /> yamcha's He initially joined Goku and company with the
                hopes of stealing the Dragon Balls from them, but he eventually
                grew fond of them and became a good friend.
                <br />
                He later gave up his bandit life and became a student of Master
                Roshi.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="yamcha">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Yamcha;
