const { getStartEndStationsFromAlert } = require("../../src/api");
const expect = require("chai").expect;

const fs = require("fs-extra");

const FIXTURES_PATH = "./fixtures";

const stationsRERA = JSON.parse(
  fs.readFileSync(FIXTURES_PATH + "/line_rer_a_stations.json")
).result.stations;
const stationsMetro1 = JSON.parse(
  fs.readFileSync(FIXTURES_PATH + "/line_metro_1_stations.json")
).result.stations;
const stationsMetro3 = JSON.parse(
  fs.readFileSync(FIXTURES_PATH + "/line_metro_3_stations.json")
).result.stations;
const stationsMetro4 = JSON.parse(
  fs.readFileSync(FIXTURES_PATH + "/line_metro_4_stations.json")
).result.stations;
const stationsMetro13 = JSON.parse(
  fs.readFileSync(FIXTURES_PATH + "/line_metro_13_stations.json")
).result.stations;

describe("getStartEndStationsFromAlert", () => {
  it("should get Defense & Poissy", async () => {
    const line = {
      message:
        "23/05/19, 09:55, le trafic est perturbé de La Defense (Grande Arche) vers Cergy/ Poissy (train en panne)"
    };
    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsRERA
    });
    expect(start).to.equal("La Defense (Grande Arche)");
    expect(end).to.equal("Poissy");
  });
  it("should get Acheres-Ville & Maisons-Laffitte", async () => {
    const line = {
      message:
        "23/05/19, 16:14, le trafic reprend progressivement entre Acheres-Ville et Maisons-Laffitte (accident grave de personne)"
    };
    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsRERA
    });
    expect(start).to.equal("Acheres-Ville");
    expect(end).to.equal("Maisons-Laffitte");
  });
  it("should get Mairie de Clichy & Chatillon Montrouge", async () => {
    const line = {
      message:
        "23/05/19, 16:32, la rame stationne à Mairie Clichy en dir. de Chatillon Montrouge (malaise voyageur)"
    };
    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsMetro13
    });
    expect(start).to.equal("Mairie de Clichy");
    expect(end).to.equal("Chatillon Montrouge");
  });
  it("should get an error", async () => {
    const line = {
      message:
        "23/05/19, 18:31, le trafic est perturbé sur la ligne (incident voyageur)"
    };
    try {
      await getStartEndStationsFromAlert({
        line,
        stations: stationsMetro4
      });
    } catch (e) {
      expect(e.code).to.equal("E101");
    }
  });
  it("should give the error message", async () => {
    const line = {
      message:
        "23/05/19, 18:31, le trafic est perturbé sur la ligne (incident voyageur)"
    };
    try {
      await getStartEndStationsFromAlert({
        line,
        stations: stationsMetro4
      });
    } catch (e) {
      expect(e.invalidInput).to.equal(
        "23/05/19, 18:31, le trafic est perturbé sur la ligne (incident voyageur)"
      );
    }
  });
  it("should give the Republique and Villiers message", async () => {
    const line = {
      message:
        "24/05/19, 19:43, le trafic reprend progressivement entre Republique et Villiers (bagage oublié)"
    };

    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsMetro3
    });
    expect(start).to.equal("Republique");
    expect(end).to.equal("Villiers");
  });
  it("should give Concorde and null", async () => {
    const line = {
      message:
        "25/05/19, 08:08, la station Concorde est fermée (mesure de sécurité)"
    };

    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsMetro1
    });
    expect(start).to.equal("Concorde");
    expect(end).to.equal(null);
  });
  it("should give Etoile and null", async () => {
    const line = {
      message: "25/05/19, 08:07, la gare Etoile est fermée (mesure de sécurité)"
    };

    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsMetro1
    });
    expect(start).to.equal("Charles de Gaulle-Etoile");
    expect(end).to.equal(null);
  });
  it("should give Mairie de Montrouge and Porte de Clignancourt", async () => {
    const line = {
      message:
        "25/05/19, 21:15, le trafic est perturbé de Mairie de Montrouge vers Pte de Clignancourt (malaise voyageur)"
    };

    const { start, end } = await getStartEndStationsFromAlert({
      line,
      stations: stationsMetro4
    });
    expect(start).to.equal("Mairie de Montrouge");
    expect(end).to.equal("Porte de Clignancourt");
  });
});
