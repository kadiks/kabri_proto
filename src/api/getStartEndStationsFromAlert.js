const getStartEndStationsFromAlert = ({ line, stations }) =>
  new Promise(async (resolve, reject) => {
    console.log("#getStartEndStationsFromAlert line.line", line.line);
    const stationNames = stations.map(s => s.name);
    // console.log("#getStartEndStationsFromAlert stationNames", stationNames);

    // console.log("#getStartEndStationsFromAlert #1");
    const stationStringPositions = [];
    stationNames.forEach(station => {
      // console.log("#getStartEndStationsFromAlert #2");
      const stringRegex = station
        .replace(" de ", " [de ]?")
        .replace("(", "\\(")
        .replace(")", "\\)");
      // console.log("#getStartEndStationsFromAlert #3 stringRegex", stringRegex);
      // console.log("stringRegex", stringRegex);
      const fixMessage = line.message.replace("Pte", "Porte");
      // console.log("#getStartEndStationsFromAlert #3-2 fixMessage", fixMessage);
      const matches = fixMessage.match(new RegExp(stringRegex, ""));
      // console.log("#getStartEndStationsFromAlert #4-1", alert.message);
      // console.log(
      //   "#getStartEndStationsFromAlert #4-2",
      //   new RegExp(stringRegex, "i")
      // );
      // console.log("#getStartEndStationsFromAlert #4-3", matches);
      if (matches !== null) {
        // console.log("#getStartEndStationsFromAlert #5");
        // console.log("#getStartEndStationsFromAlert #5-2 station", station);
        stationStringPositions.push({
          matches,
          station
        });
        // console.log("#getStartEndStationsFromAlert #6");
      }
    });
    // console.log("stationStringPositions", stationStringPositions);
    // console.log("#getStartEndStationsFromAlert #7");
    if (line.message.match(/Etoile/) !== null) {
      resolve({
        line,
        start: "Charles de Gaulle-Etoile",
        end: null
      });
      return;
    }
    if (
      stationStringPositions.length === 1 &&
      line.message.replace(/é/g, "e").match("fermee") !== null
    ) {
      resolve({
        line,
        start: stationStringPositions[0].station,
        end: null
      });
      return;
    }
    if (stationStringPositions.length !== 2) {
      // console.log("#getStartEndStationsFromAlert #8");
      reject({
        code: "E101",
        message: "Could not find 2 stations from alert message",
        invalidInput: line.message
      });
      // console.log("#getStartEndStationsFromAlert #9");
      return;
    }
    // console.log("#getStartEndStationsFromAlert #10");
    let start = stationStringPositions[0].station;
    let end = stationStringPositions[1].station;
    // console.log("#getStartEndStationsFromAlert #11");
    if (
      stationStringPositions[0].matches.index >
      stationStringPositions[1].matches.index
    ) {
      // console.log("#getStartEndStationsFromAlert #12");
      start = stationStringPositions[1].station;
      end = stationStringPositions[0].station;
    }
    // console.log("#getStartEndStationsFromAlert #13");
    resolve({
      start,
      end,
      stations,
      line
    });
  });

module.exports = getStartEndStationsFromAlert;
