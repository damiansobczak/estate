import React from "react";
import "./Assets.scss";
import { AssetsProps } from "./Interfaces/AssetsProps";

class Assets extends React.Component<AssetsProps> {
  static defaultProps: Partial<AssetsProps> = {
    assets: {}
  }

  render() {
    return (
      <section className={`assets ${!Object.keys(this.props.assets).length && `assets--empty`}`}>
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {!Object.keys(this.props.assets).length ?
              <div className="column">
                <h4 className="assets__title">Przepraszamy, brak danych.</h4>
                <div className="columns">
                  <div className="column is-6-tablet is-offset-3-tablet">
                    <p className="assets__subtitle">Obecnie nie posiadamy szczegółów odnośnie tej oferty. Skontaktuj się z naszym biurem lub agentem telefonicznie.</p>
                  </div>
                </div>
              </div>
              :
              Object.entries(this.props.assets).map(asset => ({ [asset[0]]: asset[1] })).map((asset, index) => (
                <div className="assets__item column is-6-mobile is-4-tablet is-2-desktop" key={index}>
                  <div className="assets__name">{asset ? String(Object.keys(asset)).charAt(0).toUpperCase() + String(Object.keys(asset)).slice(1) : "-"}</div>
                  <div className="assets__desc">{String(Object.values(asset)).trim() ? Object.values(asset) : "-"}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Assets;
