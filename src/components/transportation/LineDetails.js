import React from "react";

import AlertStations from "./AlertStations";

class LineDetails extends React.Component {
  render() {
    // console.log("src/cmp/transportation/LineDetails#render props", this.props);
    const { line, type, locations } = this.props;
    const { slug, title, message } = line;
    return (
      <div>
        <h4>{title}</h4>
        <p>{message}</p>
        <AlertStations locations={locations} type={type} line={line} />
      </div>
    );
  }
}

export default LineDetails;
