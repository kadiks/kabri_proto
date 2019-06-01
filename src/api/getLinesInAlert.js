const getLinesInAlert = ({ lines }) =>
  new Promise((resolve, reject) => {
    console.log(">> #getLinesInAlert");
    const linesInAlert = [];
    const lineTypes = Object.keys(lines);
    lineTypes.forEach(lineType => {
      lines[lineType].forEach(line => {
        // console.log("line", line);
        if (line.slug === "alerte") {
          if (
            line.message.match(
              "le trafic reprend progressivement sur la ligne"
            ) === null
          ) {
            linesInAlert.push({
              ...line,
              type: lineType
            });
          }
        }
      });
    });
    if (linesInAlert.length === 0) {
      console.log("#getLinesInAlert linesInAlert.length === 0");

      reject({
        code: "E102",
        message: "No lines in alert"
      });
      return;
    }
    resolve({
      lines: linesInAlert
    });
  });

module.exports = getLinesInAlert;
