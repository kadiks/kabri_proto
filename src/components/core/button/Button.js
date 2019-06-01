import React from "react";

class Button extends React.Component {
  render() {
    const { isSelected = false } = this.props;
    const bgColor = isSelected ? "blue" : "grey";
    const color = isSelected ? "white" : "black";
    return (
      <button
        style={{
          backgroundColor: bgColor,
          borderWidth: 1,
          borderColor: bgColor,
          borderStyle: "solid",
          color
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
