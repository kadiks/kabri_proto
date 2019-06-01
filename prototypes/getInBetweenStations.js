require("dotenv").config();
const fs = require("fs-extra");
const request = require("request-promise-native");

const { getInBetweenStations } = require("../src");

(async () => {
  // const startEndStations = {
  //   start: "Acheres-Ville",
  //   end: "Maisons-Laffitte"
  // };
  const startEndStations = {
    start: "La Defense (Grande Arche)",
    end: "Poissy"
  };

  const resStations = await fs.readFile(
    "./transportation/fixtures/line_rer_a_stations.json",
    "utf8"
  );

  const stations = JSON.parse(resStations).result.stations;

  const inBetweenStations = await getInBetweenStations({
    start: startEndStations.start,
    end: startEndStations.end,
    stations
  });

  console.log(
    `Stations between ${startEndStations.start} and ${
      startEndStations.end
    } are: ${inBetweenStations.join(", ")}`
  );
})();
