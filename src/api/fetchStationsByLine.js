// require("dotenv").config();
const Config = require("../utils/Config");
// const request = require("request-promise-native");
const fetch = require("isomorphic-unfetch");

const fetchStationsByLine = ({ line }) =>
  new Promise(async (resolve, reject) => {
    // console.log("#fetchStationsByLine line", line);
    const rootUrl = Config.TRANSPORTATION_API_URL;
    const url = `${rootUrl}/stations/${line.type}/${line.line}?_format=json`;
    console.log("#fetchStationsByLine url", url);
    const res = await fetch(url);
    // const json = JSON.parse(res);
    const json = await res.json();
    resolve({
      stations: json.result.stations,
      line
    });
  });

module.exports = fetchStationsByLine;
