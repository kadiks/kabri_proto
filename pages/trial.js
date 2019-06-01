import React from "react";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../src/styles/main.css";

import Api from "../src/utils/Api";
import Map from "../src/components/map";
import { Alert } from "../src/components/core";
import Version from "../src/components/utils/Version";
import Navigation from "../src/components/navigation";
import TransportationSelection from "../src/components/transportation/Selection";
import LineDetails from "../src/components/transportation/LineDetails";

const REFRESH_INTERVAL = 5 * 60 * 1000;

class Trial extends React.Component {
  static async getInitialProps({ req }) {
    const { locations, error } = await Api.getStationsInAlert();
    // if (req) {
    // console.log("ok");
    // setTimeout(() => {
    //   Home.getStationsInAlert();
    // }, REFRESH_INTERVAL);
    // // }
    return { locations, error };
  }

  constructor(props) {
    super(props);

    this.state = {
      currentLine: {},
      locations: props.locations,
      error: props.error
    };

    this.getStationsInAlert = this.getStationsInAlert.bind(this);
    this.onSelectTransportation = this.onSelectTransportation.bind(this);
    this.timeout = null;
  }

  componentDidMount() {
    console.log("#componentDidMount");
    this.timeout = setTimeout(this.getStationsInAlert, REFRESH_INTERVAL);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  async getStationsInAlert() {
    console.log("#getStationsInAlert");
    const { locations, error } = await Api.getStationsInAlert();
    this.setState(
      {
        locations,
        error
      },
      () => {
        this.timeout = setTimeout(this.getStationsInAlert, REFRESH_INTERVAL);
      }
    );
  }

  async onSelectTransportation({ line, type }) {
    console.log("transportation", line, type);
    const alert = await Api.getLineStatus({ type, line });
    console.log("pages/trial#onSelectTransportation alert", alert);
    this.setState({ currentLine: alert });
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4" style={{ paddingTop: 30 }}>
              <TransportationSelection onSelect={this.onSelectTransportation} />
              <Alert message={this.state.error} />
              <LineDetails
                line={this.state.currentLine}
                locations={this.state.locations}
              />
              <Version />
            </div>
            <div className="col-8">
              <Map markers={this.state.locations} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trial;
