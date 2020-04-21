import React, { FormEvent } from "react";
import "./FilterSearch.scss";
import { getSearches } from "../../API";
import FilterResult from "../FilterResult/FilterResult";

class FilterSearch extends React.Component {
  node = React.createRef<any>();
  form = React.createRef<HTMLFormElement>();

  state = {
    isShowing: false,
    result: null,
    text: '',
    price: '',
    category: ''
  }

  search = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = this.state.text;
    const price = this.state.price && Number(this.state.price) !== 0 ? Number(this.state.price.replace(/zł|,| /g, '')) : 999999999;
    const category = this.state.category;
    const data = await getSearches(text, price, category);
    this.setState({
      isShowing: !this.state.isShowing,
      result: data
    });
  }

  clickOutside = (ev: any) => {
    if (this.state.isShowing && !this.node.current.contains(ev.target)) {
      this.setState({
        isShowing: false
      });
    }
  }

  updateField = (field: any) => (e: any) => {
    this.setState({
      [field]: e.target.value
    });
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.clickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutside, false);
  }

  render() {
    return (
      <div className="filterSearch container" ref={this.node}>
        <form className="filterSearch__form" ref={this.form} onSubmit={this.search}>
          <div className="filterSearch__wrapper">
            <div className="filterSearch__group">
              <label htmlFor="filterSearch__name" className="filterSearch__label">
                Szukaj
              </label>
              <input id="filterSearch__name" type="text" className="filterSearch__input" value={this.state.text} placeholder="Napisz nam czego szukasz?" onChange={this.updateField('text')} />
            </div>
            <div className="filterSearch__group filterSearch__group--price">
              <label htmlFor="filterSearch__price" className="filterSearch__label">
                Cena
              </label>
              <input type="text" id="filterSearch__price" className="filterSearch__input" value={this.state.price} placeholder="np. 200,000zł" onChange={this.updateField('price')} />
            </div>
            <div className="filterSearch__group filterSearch__group--category">
              <label htmlFor="filterSearch__category" className="filterSearch__label">
                Kategoria
              </label>
              <input id="filterSearch__category" type="text" className="filterSearch__input" value={this.state.category} placeholder="Kupno lub wynajem" onChange={this.updateField('category')} />
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
