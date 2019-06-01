const getLineInAlert = require("./getLineInAlert");
const getLinesInAlert = require("./getLinesInAlert");
const fetchStationsByLine = require("./fetchStationsByLine");
const getStartEndStationsFromAlert = require("./getStartEndStationsFromAlert");
const getInBetweenStations = require("./getInBetweenStations");
const getStationsCoordsFromInBetweenStations = require("./getStationsCoordsFromInBetweenStations");

const getStationsCoordinatesFromLines = ({ lines }) =>
  getLinesInAlert({ lines }).then(({ lines }) =>
    Promise.all(lines.map(getStationsCoordinatesFromLine))
  );

const getStationsCoordinatesFromLine = line =>
  fetchStationsByLine({ line })
    .then(getStartEndStationsFromAlert)
    .then(getInBetweenStations)
    .then(getStationsCoordsFromInBetweenStations);

module.exports = getStationsCoordinatesFromLines;
