import React from "react";
import "./FilterSearch.scss";

class FilterSearch extends React.Component {
  render() {
    return (
      <div className="filterSearch container">
        <form className="filterSearch__form">
          <div className="filterSearch__wrapper">
            <div className="filterSearch__group">
              <label htmlFor="filterSearch__name" className="filterSearch__label">
                Szukaj
              </label>
              <input id="filterSearch__name" type="text" className="filterSearch__input" placeholder="Napisz nam czego szukasz?" />
            </div>
            <div className="filterSearch__group filterSearch__group--price">
              <label htmlFor="filterSearch__price" className="filterSearch__label">
                Cena
              </label>
              <input type="text" id="filterSearch__price" className="filterSearch__input" placeholder="np. 1500 - 2000" />
            </div>
            <div className="filterSearch__group filterSearch__group--category">
              <label htmlFor="filterSearch__category" className="filterSearch__label">
                Kategoria
              </label>
              <input id="filterSearch__category" type="text" className="filterSearch__input" placeholder="Kupno lub wynajem" />
            </div>
          </div>
          <button className="filterSearch__btn">Wyszukaj</button>
        </form>
      </div>
    );
  }
}

export default FilterSearch;
