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
    isOpen: false
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        isOpen: this.state.isOpen,
        toggle: (e: MouseEvent) => {
          e.preventDefault();
          this.setState({ isOpen: !this.state.isOpen })
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
