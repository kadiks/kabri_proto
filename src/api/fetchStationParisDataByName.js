// require("dotenv").config();
const Config = require("../utils/Config");
// const request = require("request-promise-native");
const fetch = require("isomorphic-unfetch");

const fetchStationParisDataByName = ({ name }) =>
  new Promise(async (resolve, reject) => {
    const rootUrl = Config.STATION_PARIS_API_URL;
    const res = await fetch(`${rootUrl}&q=${name}`);
    // const json = JSON.parse(res);
    const json = await res.json();
    resolve({ search: json, name });
  });

module.exports = fetchStationParisDataByName;
