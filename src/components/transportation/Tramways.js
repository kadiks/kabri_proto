import React from "react";

import Card from "./Card";

class Tramways extends React.Component {
  render() {
    const { onSelect } = this.props;
    const transportations = ["1", "3B", "5", "6", "7"];
    return (
      <div className="row">
        {transportations.map(t => {
          return <Card key={t} line={t} type={"tramways"} onClick={onSelect} />;
        })}
      </div>
    );
  }
}

export default Tramways;
