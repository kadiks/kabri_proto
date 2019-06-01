const getInBetweenStations = ({ start, end, stations, line }) =>
  new Promise((resolve, reject) => {
    console.log("#getInBetweenStations line.line", line.line);
    let newStart = null;
    let newEnd = null;

    if (end === null) {
      resolve({ line, stations: [{ name: start }] });
      return;
    }

    const stationNames = stations.map(s => s.name);
    // console.log("#getInBetweenStations start", start);
    // console.log("#getInBetweenStations end", end);
    // console.log("#getInBetweenStations stationNames", stationNames);
    let selectedStations = [];
    stationNames.forEach(station => {
      if (newStart === null) {
        if (station === start || station === end) {
          if (station === start) {
            newStart = start;
            newEnd = end;
          } else {
            newStart = end;
            newEnd = start;
          }
        }
      }
      if (newStart !== null) {
        if (selectedStations.includes(newEnd) === false) {
          selectedStations.push(station);
        }
      }
    });
    resolve({
      line,
      stations: selectedStations.map(s => ({ name: s }))
    });
  });

module.exports = getInBetweenStations;
