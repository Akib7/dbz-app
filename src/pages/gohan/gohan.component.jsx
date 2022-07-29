import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./gohan.styles.scss";

class Gohan extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Gohan",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_gohan.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 3,
          description: (
            <>
              <p>
                A trademark characteristic of Saiyans is their transformation
                into a Great Ape upon seeing the light of a full moon. <br />{" "}
                Being half Saiyan, Gohan is no exception to this rule, and his
                first transformation was during his survival training. <br />{" "}
                Piccolo managed to stop Gohan's rampage and revert him back to
                normal, and to make sure it never happened again, he removed the
                boy's tail.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="gohan">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Gohan;
