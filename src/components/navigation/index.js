import React from "react";
import Link from "next/link";

const linkStyle = { paddingLeft: 5, paddingRight: 5 };

class Navigation extends React.Component {
  render() {
    return (
      <div
        style={{
          height: 30,
          position: "fixed",
          opacity: 0.6,
          zIndex: 1,
          backgroundColor: "#FFF",
          width: "100%"
        }}
      >
        <Link href="/">
          <a style={linkStyle}>Accueil</a>
        </Link>
        <Link href="/trial">
          <a style={linkStyle}>Démo</a>
        </Link>
      </div>
    );
  }
}

export default Navigation;
