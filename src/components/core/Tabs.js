import React from "react";
import Button from "./button/Button";

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "metros"
    };

    this.onClickTab = this.onClickTab.bind(this);
  }

  onClickTab(activeTab) {
    this.setState({
      activeTab
    });
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => this.onClickTab("metros")}
          selected={this.state.activeTab === "metros"}
        >
          Métros
        </Button>
        <Button
          onClick={() => this.onClickTab("rers")}
          selected={this.state.activeTab === "rers"}
        >
          RER
        </Button>
        <Button
          onClick={() => this.onClickTab("tramways")}
          selected={this.state.activeTab === "tramways"}
        >
          Tramways
        </Button>
      </div>
    );
  }
}

export default Tabs;
