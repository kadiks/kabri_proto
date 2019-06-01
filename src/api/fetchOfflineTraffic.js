require("dotenv").config();
const fs = require("fs-extra");

const fetchOfflineTraffic = ({ id }) =>
  new Promise(async (resolve, reject) => {
    const res = await fs.readFile(
      `./fixtures/perturbation_call_${id}.json`,
      "utf8"
    );

    const lines = JSON.parse(res).result;

    resolve({ lines });
  });

module.exports = fetchOfflineTraffic;
