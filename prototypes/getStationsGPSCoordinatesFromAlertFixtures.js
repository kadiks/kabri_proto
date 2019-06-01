const fs = require("fs-extra");
const {
  getParisCoordinatesFromSearch,
  getInBetweenStations,
  fetchStationParisDataByName,
  fetchStationsByLine,
  getLinesInAlert,
  getLineInAlert,
  getStartEndStationsFromAlert,
  getStationsCoordinatesFromLines
} = require("../src/api");

const getStationCoordsFromStartEndStations = ({ start, end, stations }) =>
  getInBetweenStations({ start, end, stations }).then(inBetweenStations =>
    getStationsCoordsFromInBetweenStations({ inBetweenStations })
  );

const getStationsCoordsFromInBetweenStations = inBetweenStations => {
  return Promise.all(
    inBetweenStations.map(s => getStationCoordinatesFromName(s))
  );
};

const getStationCoordinatesFromName = ({ name }) => {
  // return new Promise(resolve => {
  //   console.log("#getStationCoordinatesFromName", a);
  //   resolve("ok");
  // });
  return fetchStationParisDataByName({ name }).then(({ search, name }) =>
    getParisCoordinatesFromSearch({ search, name })
  );
};

(async () => {
  const res = await fs.readFile("./fixtures/perturbation_call_1.json", "utf8");

  const lines = JSON.parse(res).result;

  try {
    const stationsCoordinates = await getStationsCoordinatesFromLines({
      lines
    });
    console.log("stationsCoordinates", stationsCoordinates);
  } catch (e) {
    console.log("e", e);
  }

  // const lineInAlert = await getLineInAlert({ lines });

  // // const lineInAlert = linesInAlert.lines[0];

  // console.log("lineInAlert", lineInAlert);

  // // process.exit();

  // const { line, stations } = await fetchStationsByLine({
  //   line: lineInAlert
  // });

  // try {
  //   const startEndStations = await getStartEndStationsFromAlert({
  //     line,
  //     stations
  //   });

  //   const coordsStations = await getStationCoordsFromStartEndStations({
  //     start: startEndStations.start,
  //     end: startEndStations.end,
  //     stations
  //   });

  //   console.log("coordsStations", coordsStations);
  // } catch (e) {
  //   console.log("Error", e);
  // }

  // const resStations = await fs.readFile(
  //   "./transportation/fixtures/line_rer_a_stations.json",
  //   "utf8"
  // );

  // const stations = JSON.parse(resStations).result.stations;

  // console.log("stations", stations);
  // console.log("startEndStations", startEndStations);

  // process.exit();

  // const inBetweenStations = await getInBetweenStations({
  //   start: startEndStations.start,
  //   end: startEndStations.end,
  //   stations
  // });

  // console.log("inBetweenStations", inBetweenStations);

  // process.exit();

  // con;

  // const coordsStations = await Promise.all(
  //   inBetweenStations.map(s => getStationCoordinatesFromName({ name: s }))
  // );

  // const coordsStations = await getStationsCoordsFromInBetweenStations({
  //   inBetweenStations
  // });
})();
