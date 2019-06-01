import React from "react";

import Card from "./Card";

class Metros extends React.Component {
  render() {
    const { onSelect } = this.props;
    const transportations = ["A", "B"];
    return (
      <div className="row">
        {transportations.map(t => {
          return <Card key={t} line={t} type={"rers"} onClick={onSelect} />;
        })}
      </div>
    );
  }
}

export default Metros;
