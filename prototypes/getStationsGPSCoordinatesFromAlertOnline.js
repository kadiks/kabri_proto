const fs = require("fs-extra");
const {
  getParisCoordinatesFromSearch,
  getInBetweenStations,
  fetchStationParisDataByName,
  fetchStationsByLine,
  getLinesInAlert,
  getLineInAlert,
  getStartEndStationsFromAlert,
  getStationsCoordinatesFromLines,
  getStationsCoordinates
} = require("../src/api");

// const getStationCoordsFromStartEndStations = ({ start, end, stations }) =>
//   getInBetweenStations({ start, end, stations }).then(inBetweenStations =>
//     getStationsCoordsFromInBetweenStations({ inBetweenStations })
//   );

// const getStationsCoordsFromInBetweenStations = inBetweenStations => {
//   return Promise.all(
//     inBetweenStations.map(s => getStationCoordinatesFromName(s))
//   );
// };

// const getStationCoordinatesFromName = ({ name }) => {
//   // return new Promise(resolve => {
//   //   console.log("#getStationCoordinatesFromName", a);
//   //   resolve("ok");
//   // });
//   return fetchStationParisDataByName({ name }).then(({ search, name }) =>
//     getParisCoordinatesFromSearch({ search, name })
//   );
// };

(async () => {
  try {
    const stationsCoordinates = await getStationsCoordinates();
    console.log("stationsCoordinates", stationsCoordinates);
  } catch (e) {
    console.log("e", e);
  }
})();
