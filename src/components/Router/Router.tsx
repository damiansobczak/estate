import React, { MouseEvent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Sprzedaz from "../../pages/Sprzedaz";
import Wynajem from "../../pages/Wynajem";
import NotFound from "../../pages/NotFound";
import Oferta from "../../pages/Oferta";
import Favorite from "../Favorite/Favorite";
import { ThemeContext } from "../ThemeContext";

class Router extends React.Component<any, any> {
  state = {
    isOpen: false,
    favorites: []
  }

  componentDidMount() {
    let values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    const items = values.map(item => JSON.parse(String(item)));
    this.setState({ favorites: items });
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        isOpen: this.state.isOpen,
        toggle: (e) => {
          e.preventDefault();
          this.setState({ isOpen: !this.state.isOpen })
        },
        toggleFavorites: (event, details) => {
          event.preventDefault();
          const { id } = details;
          let favorites: any = this.state.favorites;

          if (!localStorage.getItem(id)) {
            localStorage.setItem(id, JSON.stringify(details));
            favorites.push(details);
            this.setState({ favorites });
          } else {
            localStorage.removeItem(id);
            let newFavorites = favorites.filter((item: any) => item.id !== id);
            this.setState({ favorites: newFavorites });
          }
        },
        favorites: this.state.favorites,
        isFavorite: (id) => {
          const items = this.state.favorites.filter((item: any) => item.id == id ? true : false);
          return items.length ? true : false;
        },
        deleteFavorites: (e) => {
          e.preventDefault();
          localStorage.clear();
          this.setState({
            favorites: [],
            isOpen: false
          });
        }
      }}>
        <BrowserRouter>
          <Favorite />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wynajem" component={Wynajem} />
            <Route exact path="/sprzedaz" component={Sprzedaz} />
            <Route exact path="/oferta/:id" component={Oferta} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

export default Router;
