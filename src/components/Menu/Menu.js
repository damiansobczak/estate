import React from "react";
import "./Menu.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="menu">
          <div className="menu__logo">
            <Link to="/">
              <img src={logo} alt="Logo biura nieruchomości" />
            </Link>
          </div>
          <ul className="menu__items">
            <li className="menu__item menu__item--active">
              <Link to="/">Strona główna</Link>
            </li>
            <li className="menu__item">
              <Link to="/wynajem">Wynajem</Link>
            </li>
            <li className="menu__item">
              <Link to="sprzedaz">Sprzedaż</Link>
            </li>
          </ul>
          <div className="menu__actions">
            <div className="menu__action">Szukaj</div>
            <div className="menu__action">
              <Link to="/ulubione">Ulubione</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
