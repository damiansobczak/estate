import React from "react";
import "./Header.scss";
import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import Search from "../Search/Search";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Menu />
        <Slider />
        <Search />
      </header>
    );
  }
}

export default Header;
