const {
  getIdfCoordinatesFromSearch,
  fetchStationIdfDataByName
} = require("../src");

(async () => {
  const stationName = "Versailles Chantiers";

  const json = await fetchStationIdfDataByName({ name: stationName });
  const coords = await getIdfCoordinatesFromSearch({
    search: json
  });

  console.log(
    `Station: ${stationName}. Coordinates: ${coords.lat}, ${coords.lon}`
  );

  // fetchStationDataByName({ name: stationName }).then(json =>
  //   getCoordinatesFromSearch({ search: json }).then(coords => {
  //     console.log(
  //       `Station: ${stationName}. Coordinates: ${coords.lat}, ${coords.lon}`
  //     );
  //   })
  // );
})();
