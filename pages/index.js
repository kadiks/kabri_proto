import React from "react";
import Link from "next/link";

import Navigation from "../src/components/navigation";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <header>
          <div className="container" style={{ padding: 30 }}>
            <div className="row">
              <div className="col-12">
                <h1>Kabri</h1>
                <p className="tagline">
                  Sautez de stations en stations pour avoir le taxi toujours en
                  service
                </p>
                <form>
                  <p>M'alerter de la sortie de l'application mobile</p>
                  <input type="text" placeholder="Email" />
                  <button>M'alerter</button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Fonctionnalités</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Alertes lors de perturbations</li>
                  <li>
                    Alertes géolocalisées : seuls les alertes proches de vous
                    vous sont notifiées
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Prix</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table>
                  <thead>
                    <tr>
                      <td>Gratuit</td>
                      <td>PRO</td>
                      <td>PRO+</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alertes en temps réel</td>
                      <td>Alertes en temps réel</td>
                      <td>Alertes en temps réel</td>
                    </tr>
                    <tr>
                      <td />
                      <td>Notifications</td>
                      <td>Notifications</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>Prévisions des zones d'affluences fortes</td>
                    </tr>
                    <tr className="price">
                      <td>0€</td>
                      <td>
                        9,99€ <sup>H.T</sup>
                      </td>
                      <td>
                        19,99€ <sup>H.T</sup>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
