import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./trunks.styles.scss";

class Trunks extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Trunks",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_trunks.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 3,
          description: (
            <>
              <p>
                Vegeta and Bulma's son. Saiyans are normally born with black
                hair and eyes, but Trunks took more after his mother with his
                purplish blue hair and blue eyes. <br /> Equal parts mischievous
                and curious, his affluent upbringing made him somewhat arrogant,
                but he still has a sense of manners when speaking with adults.{" "}
                <br /> Vegeta has started training him in the hopes of
                developing his skills in battle.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="trunks">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Trunks;
