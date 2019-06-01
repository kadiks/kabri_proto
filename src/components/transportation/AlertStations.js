export default ({ locations, type, line }) => {
  if (
    locations.length === 0 ||
    typeof type === "undefined" ||
    typeof line === "undefined"
  ) {
    return null;
  }
  return (
    <p>
      Stations perturbées :{" "}
      {locations
        .filter(loc => loc.type === type && loc.line === line.line)
        .join(" - ")}
    </p>
  );
};
