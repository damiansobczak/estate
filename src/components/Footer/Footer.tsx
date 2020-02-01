import React, { Component, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component<any, any> {
  state = {
    button: "Kontakt z nami"
  }

  showNumber = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({
      button: this.state.button === "Kontakt z nami" ? "+48 793 469 554" : "Kontakt z nami"
    });
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <section className="columns">
            <div className="footer__desc column is-8-tablet">
              <div className="footer__title">Ekskluzywne mieszkania w zasięgu budżetu. Zapraszamy do kontaktu.</div>
              <p className="footer__text">Mieszkania na sprzedaż i wynajem w Kaliszu.</p>
            </div>
            <div className="footer__action column is-4-tablet">
              <button className="footer__button" onClick={(e) => this.showNumber(e)}>{this.state.button}</button>
            </div>
          </section>
          <section className="footer__menu columns">
            <ul className="footer__links column is-10-tablet">
              <li className="footer__link">
                <Link to="/">Strona główna</Link>
              </li>
              <li className="footer__link">
                <Link to="/sprzedaz">Sprzedaż</Link>
              </li>
              <li className="footer__link">
                <Link to="/wynajem">Wynajem</Link>
              </li>
              <li className="footer__link">
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
            <div className="footer__socials column is-2-tablet">
              <span className="footer__social">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7c0-.6.4-1 1-1h3V2z" />
                </svg>
              </span>
              <span className="footer__social">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17 1H7C3.7 1 1 3.7 1 7v10c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6V7c0-3.3-2.7-6-6-6zm4 16c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10z" />
                  <path d="M12.8 7a5.05 5.05 0 0 0-5.7 5.7c.2 1.3.9 2.5 2 3.3.9.6 1.9 1 3 1 .2 0 .5 0 .7-.1a5.02 5.02 0 0 0 0-9.9zm1.7 6.7c-.5.6-1.2 1.1-2 1.2-1.6.2-3.2-.9-3.4-2.5-.3-1.6.9-3.2 2.5-3.4h.8c1.3.2 2.3 1.2 2.5 2.5.2.8 0 1.6-.4 2.2zM16.8 5.8c-.2.2-.3.4-.3.7 0 .1 0 .3.1.4 0 .1.1.2.2.3.2.2.5.3.7.3s.5-.1.7-.3c.1-.1.2-.2.2-.3s.1-.2.1-.4c0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0z" />
                </svg>
              </span>
            </div>
          </section>
          <section className="footer__copyright">
            <p>@Copyright 2019 | Real Estate Agency. Wszelkie prawa zastrzeżone.</p>
            <a href="#">
              Website by <span>Damian Sobczak</span>
            </a>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
