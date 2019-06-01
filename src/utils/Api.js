import _ from "lodash";
import {
  getStationsCoordinates,
  getStationsCoordinatesFromLineInAlert,
  fetchCurrentTraffic
} from "../api";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Api {
  async getLineStatus({ line = "1", type = "metros" }) {
    const traffic = await fetchCurrentTraffic();
    console.log("Api#getLineStatus traffic", traffic);
    const lines = traffic.lines[type];
    console.log("Api#getLineStatus lines", lines);
    const selectedLine = _.find(lines, { line });
    console.log("Api#getLineStatus selectedLine", selectedLine);
    return selectedLine;
  }

  async getStationsInAlert() {
    let locations = [];
    let error = "";
    try {
      locations = await getStationsCoordinates();
      // throw new Error();
    } catch (e) {
      console.log("utils/Api e", e);
      error = e.message;
      if (e.code === "E102") {
        error = "Traffic normal. Utilisation de données de tests";
      }

      const lines = [
        {
          line: "A",
          slug: "alerte",
          title: "Trafic perturbé",
          message:
            "23/05/19, 09:55, le trafic est perturbé de La Defense (Grande Arche) vers Cergy/ Poissy (train en panne)",
          type: "rers"
        },
        {
          line: "A",
          slug: "alerte",
          title: "Trafic perturbé",
          message:
            "23/05/19, 16:14, le trafic reprend progressivement entre Acheres-Ville et Maisons-Laffitte (accident grave de personne)",
          type: "rers"
        },
        {
          line: "13",
          slug: "alerte",
          title: "Trafic perturbé",
          message:
            "23/05/19, 16:32, la rame stationne à Mairie Clichy en dir. de Chatillon Montrouge (malaise voyageur)",
          type: "metros"
        }
      ];

      locations = await getStationsCoordinatesFromLineInAlert({
        line: lines[getRandomInt(0, lines.length - 1)]
      });
    }
    locations = _.flatMap(locations);
    locations = _.uniqBy(locations, "name");
    // console.log("utils/Api locations", locations);
    return { locations, error };
  }
}

export default new Api();
