import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup } from "../core";

import Metros from "./Metros";
import RERs from "./RERs";
import Tramways from "./Tramways";

class Selection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "metros"
    };

    this.onClickTab = this.onClickTab.bind(this);
  }

  onClickTab(selected) {
    this.setState({
      selected
    });
    this.props.onDeselect();
  }
  render() {
    const { onSelect } = this.props;
    const { selected } = this.state;

    // console.log('filter/ViewChanger#render view', view)

    const buttonGroupEls = [
      {
        value: "metros",
        name: "Métro"
        // component: <Icon name="vertical_split" color={Global.color.secondary} />
      },
      {
        value: "rers",
        name: "RER"
        // component: <Icon name="view_list" color={Global.color.secondary} />
      },
      {
        value: "tramways",
        name: "Tramways"
        // component: <Icon name="view_module" color={Global.color.secondary} />
      }
    ];
    const buttons = buttonGroupEls.map(b => b.value);
    return (
      <div>
        <ButtonGroup
          selected={buttons.indexOf(selected)}
          elements={buttonGroupEls}
          onClick={this.onClickTab}
        />
        <div style={{ height: 15 }} />
        {selected === "metros" && <Metros onSelect={onSelect} />}
        {selected === "rers" && <RERs onSelect={onSelect} />}
        {selected === "tramways" && <Tramways onSelect={onSelect} />}
      </div>
    );
  }
}

Selection.defaultProps = {
  onClick: () => {}
};

Selection.propTypes = {
  onClick: PropTypes.func
};

export default Selection;
