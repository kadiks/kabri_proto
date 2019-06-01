require("dotenv").config();
const request = require("request-promise-native");

const { getLinesInAlert } = require("../src");

(async () => {
  const rootUrl = process.env.TRANSPORTATION_API_URL;

  const res = await request(`${rootUrl}/traffic?format=json`);

  const json = JSON.parse(res);

  const linesInAlert = await getLinesInAlert({ lines: json.result });
  console.log(linesInAlert);
})();
