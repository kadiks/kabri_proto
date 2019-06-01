import React from "react";

import Button from "./Button";

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: props.selected || 0
    };

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(selectedIndex) {
    const { onClick, elements } = this.props;
    this.setState({
      selectedIndex
    });
    if (typeof onClick !== "undefined") {
      console.log("core/ButtonGroup elements", elements);
      console.log("core/ButtonGroup selectedIndex", selectedIndex);
      onClick(elements[selectedIndex].value);
    }
  }

  render() {
    const { elements } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div className="btn-group">
        {elements.map((el, index) => {
          return (
            <Button
              key={index}
              onClick={() => this.onClickButton(index)}
              isSelected={selectedIndex === index}
            >
              {el.name}
            </Button>
          );
        })}
      </div>
    );
  }
}

export default ButtonGroup;
