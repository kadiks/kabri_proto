const getLinesInAlert = require("./getLinesInAlert");

// console.log("#getLineInAlert getLinesInAlert", getLinesInAlert);

const getLineInAlert = ({ lines }) =>
  new Promise(async (resolve, reject) => {
    try {
      const linesInAlert = await getLinesInAlert({ lines });
      resolve({ line: linesInAlert.lines[0] });
    } catch (e) {
      reject(e);
    }
  });

module.exports = getLineInAlert;
