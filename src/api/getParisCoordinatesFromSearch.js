const _ = require("lodash");

const getParisCoordinatesFromSearch = ({ search, name }) =>
  new Promise((resolve, reject) => {
    const stopCoords = _.get(search, "records[0].fields.stop_coordinates", []);
    resolve({
      name,
      lat: stopCoords[0],
      lon: stopCoords[1]
    });
  });

module.exports = getParisCoordinatesFromSearch;
