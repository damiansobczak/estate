import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Sprzedaz from "../../pages/Sprzedaz";
import Wynajem from "../../pages/Wynajem";
import NotFound from "../../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wynajem" component={Wynajem} />
      <Route exact path="/sprzedaz" component={Sprzedaz} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
