const fs = require("fs-extra");

const { getLinesInAlert } = require("../src");

(async () => {
  const res = await fs.readFile(
    "./transportation/fixtures/perturbation_call_3.json",
    "utf8"
  );

  const json = JSON.parse(res);

  const linesInAlert = await getLinesInAlert({ lines: json.result });
  console.log(linesInAlert);
})();
