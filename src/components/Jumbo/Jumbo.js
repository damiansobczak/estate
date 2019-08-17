import React from "react";
import "./Jumbo.scss";
import CoupleImage from "../../assets/smile-people.png";
import HouseImage from "../../assets/modern-house-ideas.png";

class Jumbo extends React.Component {
  render() {
    return (
      <section className="jumbo">
        <div className="container">
          <div className="columns">
            <div className="jumbo__content column is-5-tablet is-4-desktop">
              <div className="jumbo__subtitle">Bogata oferta nieruchomości</div>
              <h2 className="jumbo__title">Specjalizujemy się w sprzedaży</h2>
              <div className="jumbo__text">A diam id consequat. Sed dictum arcu vel mi malesuada, ac imperdiet felis elementum.</div>
            </div>
            <div className="column jumbo__image is-6-tablet is-offset-1-tablet is-offset-2-desktop">
              <img src={HouseImage} alt="" />
              <div className="jumbo__btn">
                <span className="jumbo__line" />
                Zobacz resztę ofert
              </div>
            </div>
          </div>
        </div>
        <img src={CoupleImage} alt="" className="jumbo__feature" />
      </section>
    );
  }
}

export default Jumbo;
