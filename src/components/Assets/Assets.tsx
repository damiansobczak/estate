import React from "react";
import "./Assets.scss";
import { AssetsProps } from "./Interfaces/AssetsProps";

class Assets extends React.Component<AssetsProps> {
  render() {
    if (this.props.assets) {
      const assets = Object.entries(this.props.assets).map(asset => {
        return { [asset[0]]: asset[1] };
      });
      return (
        <section className="assets">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {assets.map((asset, index) => (
                <div className="assets__item column is-6-mobile is-4-tablet is-2-desktop" key={index}>
                  <div className="assets__name">{asset ? String(Object.keys(asset)).charAt(0).toUpperCase() + String(Object.keys(asset)).slice(1) : "-"}</div>
                  <div className="assets__desc">{asset ? Object.values(asset) : "-"}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="assets assets--empty">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              <div className="column">
                <h4 className="assets__title">Przepraszamy, brak danych.</h4>
                <div className="columns">
                  <div className="column is-6-tablet is-offset-3-tablet">
                    <p className="assets__subtitle">Obecnie nie posiadamy szczegółów odnośnie tej oferty. Skontaktuj się z naszym biurem lub agentem telefonicznie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Assets;
