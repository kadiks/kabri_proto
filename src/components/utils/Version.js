import Config from "../../utils/Config";

export default () => (
  <div
    style={{
      backgroundColor: "#FFFFFF",
      color: "lightgrey",
      opacity: 0.8,
      position: "absolute",
      bottom: 0,
      left: 0,
      fontSize: 12,
      paddingLeft: 3
    }}
  >
    Version {Config.VERSION} - Basé sur l'API de{" "}
    <a href="https://twitter.com/pgrimaud_" target="_blank">
      Pierre Grimaud
    </a>
  </div>
);
