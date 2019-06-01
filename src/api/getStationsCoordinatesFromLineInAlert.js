const getLineInAlert = require("./getLineInAlert");
const fetchStationsByLine = require("./fetchStationsByLine");
const getStartEndStationsFromAlert = require("./getStartEndStationsFromAlert");
const getInBetweenStations = require("./getInBetweenStations");
const getStationsCoordsFromInBetweenStations = require("./getStationsCoordsFromInBetweenStations");

const getStationsCoordinatesFromLineInAlert = ({ line }) =>
  fetchStationsByLine({ line })
    .then(getStartEndStationsFromAlert)
    .then(getInBetweenStations)
    .then(getStationsCoordsFromInBetweenStations);

module.exports = getStationsCoordinatesFromLineInAlert;
