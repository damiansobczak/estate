import React from "react";
import "./Header.scss";
import { HeaderProps } from "./Interfaces/HeaderProps";

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <section className="header" style={{ height: `${this.props.height}` }}>
        {this.props.children}
      </section>
    );
  }
}

export default Header;
