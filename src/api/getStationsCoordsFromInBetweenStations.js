const fetchStationParisDataByName = require("./fetchStationParisDataByName");
const getParisCoordinatesFromSearch = require("./getParisCoordinatesFromSearch");
const LINES = require("../constants/lines");

const getStationCoordinatesFromName = ({ name }) =>
  fetchStationParisDataByName({ name }).then(({ search, name }) =>
    getParisCoordinatesFromSearch({ search, name })
  );

const getStationsCoordsFromInBetweenStations = async ({ line, stations }) => {
  const stationCoords = await Promise.all(
    stations.map(s => getStationCoordinatesFromName(s))
  );
  const mergedStations = stationCoords.map(s => ({
    ...s,
    type: line.type,
    line: line.line,
    color: LINES[`${line.type}${line.line}`].color || "black"
  }));
  const filteredStations = mergedStations.filter(
    s => typeof s.lat !== "undefined"
  );
  return filteredStations;
};

module.exports = getStationsCoordsFromInBetweenStations;
