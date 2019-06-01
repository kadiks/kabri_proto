import React from "react";

import Card from "./Card";

class Metros extends React.Component {
  render() {
    const { onSelect } = this.props;
    const transportations = [
      "1",
      "2",
      "3",
      "3B",
      "4",
      "5",
      "6",
      "7",
      "7B",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14"
    ];
    return (
      <div className="row">
        {transportations.map(t => {
          return <Card key={t} line={t} type={"metros"} onClick={onSelect} />;
        })}
      </div>
    );
  }
}

export default Metros;
