import React from "react";

class Card extends React.Component {
  render() {
    const { line, type, onClick } = this.props;
    return (
      <div className="col-2" onClick={() => onClick({ line, type })}>
        <img
          style={{
            width: "100%"
          }}
          src={`/static/img/${type}${line}.svg`}
          alt={line}
        />
      </div>
    );
  }
}

export default Card;
