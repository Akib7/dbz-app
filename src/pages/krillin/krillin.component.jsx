import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./krillin.styles.scss";

class Krillin extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Krillin",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_krillin.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 7,
          description: (
            <>
              <p>
                A childhood friend and rival of Goku's, they once both trained
                under Master Roshi. <br /> As Goku grew in stature and in power,
                so too did the gap between them, but Krillin remained by his
                friend's side and eventually Gohan's as well.
                <br /> He currently lives with Master Roshi and continues to
                train to this day.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="krillin">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Krillin;
