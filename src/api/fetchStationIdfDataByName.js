const Config = require("../utils/Config");
// const request = require("request-promise-native");
const fetch = require("isomorphic-unfetch");

const fetchStationIdfDataByName = ({ name }) =>
  new Promise(async (resolve, reject) => {
    const rootUrl = Config.STATION_IDF_API_URL;
    const url = `${rootUrl}&q=${name}`;
    console.log("url", url);
    const res = await fetch(url);
    // const json = JSON.parse(res);
    const json = await res.json();
    resolve(json);
  });

module.exports = fetchStationIdfDataByName;
