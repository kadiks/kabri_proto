import React from "react";
import GoogleMapReact from "google-map-react";

import Config from "../../utils/Config";

let map = null;
let maps = null;

const handleApiLoaded = (gmap, gmaps) => {
  console.log(">> #handleApiLoaded");
  // use map and maps objects
  map = gmap;
  maps = gmaps;
};

const Marker = props => {
  const size = 20;
  if (props.type === "metros") {
    return <MetroMarker {...props} size={size} />;
  }
  return <RERMarker {...props} size={size} />;
};

const MetroMarker = ({ line, name, color, size }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: size - 5,
        width: size - 5,
        borderColor: color,
        // borderWidth: 3,
        borderStyle: "solid",
        borderRadius: size * 0.5,
        color: "black",
        fontWeight: "bold",
        position: "relative"
      }}
    >
      <p
        style={{
          position: "absolute",
          top: -9,
          // left: 5,
          textAlign: "center",
          width: size - 5
        }}
      >
        {line}
      </p>
    </div>
  );
};

const RERMarker = ({ line, name, color, size }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: size - 3,
        width: size - 3,
        borderColor: color,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: size * 0.5,
        color,
        fontWeight: "bold",
        position: "relative"
      }}
    >
      <p
        style={{
          position: "absolute",
          top: -8,
          left: 5
        }}
      >
        {line}
      </p>
    </div>
  );
};

class Map extends React.Component {
  componentDidMount() {
    // this.setMarkers(this.props.markers);
  }

  //  https://github.com/google-map-react/google-map-react/issues/488#issuecomment-355478022
  setMarkers(mapMarkers) {
    console.log("cmp/map#setMarkers #1");
    const bounds = new maps.LatLngBounds(); // need handler incase `google` not yet available

    console.log("cmp/map#setMarkers #2");

    mapMarkers.forEach(marker => {
      bounds.extend(new maps.LatLng(marker.latitude, marker.longitude));
    });

    console.log("cmp/map#setMarkers #3");

    const newBounds = {
      ne: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng()
      },
      sw: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
      }
    };

    console.log("cmp/map#setMarkers #4");

    const size = {
      width: this.state.DomElementRef.offsetWidth,
      height: this.props.height
    };

    console.log("cmp/map#setMarkers #5");

    const { center, zoom } = fitBounds(newBounds, size);

    console.log("cmp/map#setMarkers #6");

    this.setState({
      markers: mapMarkers,
      center: center,
      zoom: zoom
    });
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Config.GMAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {this.props.markers.map((marker, index) => {
            return (
              <Marker
                key={index}
                lat={marker.lat}
                lng={marker.lon}
                {...marker}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

Map.defaultProps = {
  center: {
    lat: 48.8587741,
    lng: 2.3269771
  },
  zoom: 11
};

export default Map;
