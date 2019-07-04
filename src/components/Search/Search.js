import React from "react";
import "./Search.scss";

class Search extends React.Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <form className="search">
          <div className="search__group">
            <label htmlFor="#id-search-name">Szukaj</label>
            <input id="id-search-name" type="text" placeholder="Napisz nam czego szukasz..." />
          </div>
          <div className="search__group">
            <label htmlFor="#id-search-name">Cena</label>
            <input id="id-search-name" type="text" placeholder="Napisz nam czego szukasz..." />
          </div>
          <div className="search__group">
            <label htmlFor="#id-search-name">Kategoria</label>
            <input id="id-search-name" type="text" placeholder="Napisz nam czego szukasz..." />
          </div>
          <button className="search__button">Wyszukaj</button>
        </form>
      </div>
    );
  }
}

export default Search;
