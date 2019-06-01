// require("dotenv").config();
const Config = require("../utils/Config");
// const request = require("request-promise-native");
const fetch = require("isomorphic-unfetch");

const fetchCurrentTraffic = () =>
  new Promise(async (resolve, reject) => {
    const rootUrl = Config.TRANSPORTATION_API_URL;
    const url = `${rootUrl}/traffic?format=json`;

    console.log("url", url);

    const res = await fetch(url);

    // const lines = JSON.parse(res).result;
    const json = await res.json();
    let lines = json.result;

    resolve({ lines });
  });

module.exports = fetchCurrentTraffic;
