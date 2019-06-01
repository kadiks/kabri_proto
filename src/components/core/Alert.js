import React from "react";

class Alert extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

Alert.defaultProps = {
  message: ""
};

export default Alert;
