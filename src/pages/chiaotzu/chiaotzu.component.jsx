import React from "react";
import DisplayCharacter from "../../components/display-character/display-character.component";

import "./chiaotzu.styles.scss";

class Chiaotzu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Chiaotzu",
          imageUrl:
            "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/05-characters/dbzk_chiaotzu.png?twic=v1/cover=390x546/step=10/quality=80",
          id: 8,
          description: (
            <>
              <p>
                During his time as a Crane School student, Tien became close
                friends with fellow student Chiaotzu. <br /> After Chiaotzu
                sacrificed himself, Tien used his Tri-Beam technique to avenge
                his friend, but at the cost of his own life, proving that the
                two of them are inseparable in both life and death.
                <br />
                Launch seems to be rather infatuated with Tien, but how he feels
                about her remains a mystery.
              </p>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="chiaotzu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <DisplayCharacter key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Chiaotzu;
