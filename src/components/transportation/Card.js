import React from "react";

import icons from "../core/icon";

class Card extends React.Component {
  render() {
    const { line, type, onClick } = this.props;
    // console.log("src/cmp/transportation/Card props", this.props);
    return (
      <div className="col-2" onClick={() => onClick({ line, type })}>
        <img
          style={{
            width: "100%"
          }}
          src={icons[`${type}${line}`]}
          alt={line}
        />
      </div>
    );
  }
}

export default Card;
