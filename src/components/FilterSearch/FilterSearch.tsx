import React, { FormEvent } from "react";
import "./FilterSearch.scss";
import { getSearches } from "../../API";
import FilterResult from "../FilterResult/FilterResult";

class FilterSearch extends React.Component {
  form = React.createRef<HTMLFormElement>();
  text = React.createRef<HTMLInputElement>();
  price = React.createRef<HTMLInputElement>();
  category = React.createRef<HTMLInputElement>();

  search = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = this.text.current ? this.text.current.value : "";
    const price = this.price.current && Number(this.price.current.value) != 0 ? Number(this.price.current.value.replace(/zł|,| /g, '')) : 999999999;
    const category = this.category.current ? this.category.current.value : "";
    const data = await getSearches(text, price, category);
    this.setState({
      isShowing: !this.state.isShowing,
      result: data
    });
  }

  state = {
    isShowing: false,
    result: null
  }

  render() {
    return (
      <div className="filterSearch container">
        <form className="filterSearch__form" ref={this.form} onSubmit={this.search}>
          <div className="filterSearch__wrapper">
            <div className="filterSearch__group">
              <label htmlFor="filterSearch__name" className="filterSearch__label">
                Szukaj
              </label>
              <input id="filterSearch__name" type="text" className="filterSearch__input" placeholder="Napisz nam czego szukasz?" ref={this.text} />
            </div>
            <div className="filterSearch__group filterSearch__group--price">
              <label htmlFor="filterSearch__price" className="filterSearch__label">
                Cena
              </label>
              <input type="text" id="filterSearch__price" className="filterSearch__input" placeholder="np. 1500 - 2000" ref={this.price} />
            </div>
            <div className="filterSearch__group filterSearch__group--category">
              <label htmlFor="filterSearch__category" className="filterSearch__label">
                Kategoria
              </label>
              <input id="filterSearch__category" type="text" className="filterSearch__input" placeholder="Kupno lub wynajem" ref={this.category} />
            </div>
          </div>
          <button className="filterSearch__btn">Wyszukaj</button>
        </form>
        <FilterResult isShowing={this.state.isShowing} data={this.state.result} />
      </div>
    );
  }
}

export default FilterSearch;
