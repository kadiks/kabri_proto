const {
  getParisCoordinatesFromSearch,
  fetchStationParisDataByName
} = require("../src");
(async () => {
  // const stationName = "La Defense (Grande Arche)";
  // const stationName = "Alexandre Dumas";
  // const stationName = "Acheres-Ville";
  const stationName = "Maisons-Laffitte";
  // const stationName = "Versailles Chantiers";

  const json = await fetchStationParisDataByName({ name: stationName });
  const coords = await getParisCoordinatesFromSearch({
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
