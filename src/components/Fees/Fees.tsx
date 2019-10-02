import React from "react";
import "./Fees.scss";
import { FeesProps } from "./Interfaces/FeesProps";

class Fees extends React.Component<FeesProps> {
  render() {
    return (
      <section className="fees">
        <div className="container">
          <div className="columns">
            <div className="column is-5-tablet">
              <div className="fees__subtitle">Najtaniej w mieście!</div>
              <h4>Szczegóły cen nieruchomości oraz stałych opłat</h4>
              <p className="fees__desc">Orientacyjna kalkulacja dla 3 osobowej rodziny. Skontaktuj się w celu szczegółowej kalkulacji.</p>
            </div>

            <div className="column is-6-tablet is-offset-1-tablet">
              <div className="columns is-multiline">
                <div className="column is-6-tablet">
                  <h4>Kaucja</h4>
                  <div className="fees__numbers fees__deposit">
                    {this.props.deposit} <span className="sup">PLN</span>
                  </div>
                  <div className="fees__hr"></div>
                  <p className="fees__desc">Zrezygnuj na 30 dni przed zakupem!</p>
                </div>
                <div className="column is-6-tablet">
                  <h4>Cena</h4>
                  <div className="fees__numbers fees__price">
                    {this.props.price} <span className="sup">PLN</span>
                  </div>
                  <div className="fees__hr"></div>
                  <p className="fees__desc">Zrezygnuj na 30 dni przed ostatecznym zakupem!</p>
                </div>
                <div className="column is-6-tablet">
                  <h4>Media</h4>
                  <div className="fees__numbers fees__media">
                    {this.props.media} <span className="sup">PLN</span>
                  </div>
                  <div className="fees__hr"></div>
                </div>
                <div className="column is-6-tablet">
                  <h4>Czynsz</h4>
                  <div className="fees__numbers fees__rent">
                    {this.props.rent} <span className="sup">PLN</span>
                  </div>
                  <div className="fees__hr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Fees;
