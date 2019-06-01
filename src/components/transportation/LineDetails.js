import React from "react";

class LineDetails extends React.Component {
  render() {
    console.log("src/cmp/transportation/LineDetails#render props", this.props);
    const { line, type, locations } = this.props;
    const { slug, title, message } = line;
    return (
      <div>
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          Stations perturbées :{" "}
          {locations
            .filter(loc => loc.type === type && loc.line === line.line)
            .join(" - ")}
        </p>
      </div>
    );
  }
}

export default LineDetails;
