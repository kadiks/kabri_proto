require("dotenv").config();
const fs = require("fs-extra");
const request = require("request-promise-native");

const { getStartEndStationsFromAlert, fetchStationsByLine } = require("../src");
// const getStationsFromLine = ({ line }) => new Promise((resolve, reject) => {});

(async () => {
  const resAlert = await fs.readFile(
    "./transportation/fixtures/perturbation_line_3.json",
    "utf8"
  );

  // const resStations = await fs.readFile(
  //   "./transportation/fixtures/line_rer_a_stations.json",
  //   "utf8"
  // );

  const alert = JSON.parse(resAlert);
  // const stations = JSON.parse(resStations).result.stations;

  const stations = await fetchStationsByLine({
    type: alert.type,
    name: alert.line
  });

  console.log("#getStartEndStationsFromPerturbation alert", alert.message);
  // console.log("stations", stations);

  const startEndStations = await getStartEndStationsFromAlert({
    alert,
    stations
  });

  console.log(
    `Perturbation start from ${startEndStations.start} to ${
      startEndStations.end
    }`
  );
})();
