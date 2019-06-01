const _ = require("lodash");

const getIdfCoordinatesFromSearch = ({ search }) =>
  new Promise((resolve, reject) => {
    const stopCoords = _.get(
      search,
      "records[0].fields.coordonnees_geographiques",
      []
    );
    resolve({
      lat: stopCoords[0],
      lon: stopCoords[1]
    });
  });

module.exports = getIdfCoordinatesFromSearch;
