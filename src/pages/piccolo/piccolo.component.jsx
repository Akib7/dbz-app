import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./piccolo.styles.scss";

class Piccolo extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Piccolo",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_piccolo.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 3,
          description: (
            <>
              <p>
                After the arrival of the Saiyans and many other enemies he
                shared with Goku, Piccolo found himself slowly starting to fight
                to save the world he had once dreamed of dominating. <br />{" "}
                Unlike Goku, however, he is willing to do what it takes to win a
                fight, even if it means killing a comrade, as he did with Goku
                when fighting Raditz.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="piccolo">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Piccolo;
