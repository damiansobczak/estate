import React from "react";
import "./Assets.scss";
import { AssetsProps } from "./Interfaces/AssetsProps";

class Assets extends React.Component<AssetsProps> {
  render() {
    if (this.props.assets && this.props.assets.length > 0) {
      return (
        <section className="assets">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {this.props.assets.map(asset => (
                <div className="assets__item column is-6-mobile is-4-tablet is-2-desktop" key={asset.id}>
                  <div className="assets__name">{asset.name.trim() ? asset.name : "-"}</div>
                  <div className="assets__desc">{asset.desc.trim() ? asset.desc : "-"}</div>
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
