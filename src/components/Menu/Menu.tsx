import React, { MouseEvent } from "react";
import "./Menu.scss";
import { MenuProps } from "./Interfaces/MenuProps";
import { ThemeContext } from "../ThemeContext";

class Menu extends React.Component<MenuProps> {
  private listRef: React.RefObject<HTMLUListElement>;
  static contextType = ThemeContext;

  constructor(props: MenuProps) {
    super(props);
    this.listRef = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const ref = this.listRef.current;
    if (ref) {
      if (!ref.classList.contains("menu__list--active")) {
        ref.classList.add("menu__list--active", "menu__list--animate");
      } else {
        ref.classList.add("menu__list--animate-out");
        setTimeout(() => {
          ref.classList.remove("menu__list--animate", "menu__list--active", "menu__list--animate-out");
        }, 200);
      }
    }
  }

  render() {
    let value = this.context;
    return (
      <ThemeContext.Consumer>
        {value => (
          <nav aria-label="Primary" className="menu container">
            <img src={this.props.logo} alt="Main logo" className="menu__logo" />
            <button className="menu__mobile" onClick={this.toggleMenu}>
              <span className="icon-menu"></span>
            </button>
            <ul className="menu__list" ref={this.listRef}>
              {this.props.pages.map(page => (
                <li className="menu__item" key={page.id}>
                  <a className="menu__link" href={page.url} title={page.desc}>
                    {page.name}
                  </a>
                </li>
              ))}
              <li className="menu__item">
                <a className="menu__link" onClick={(e) => value.toggle(e)}>
                  <span className="icon-heart"></span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Menu;
