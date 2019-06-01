const fetchCurrentTraffic = require("./fetchCurrentTraffic");
// const fetchOfflineTraffic = require("./fetchOfflineTraffic");
const getStationsCoordinatesFromLines = require("./getStationsCoordinatesFromLines");

const getStationsCoordinates = () =>
  fetchCurrentTraffic().then(getStationsCoordinatesFromLines);
// fetchOfflineTraffic({ id: 1 }).then(getStationsCoordinatesFromLines);

module.exports = getStationsCoordinates;
