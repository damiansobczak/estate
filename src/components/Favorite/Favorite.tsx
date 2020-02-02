import React, { MouseEvent } from "react";
import "./Favorite.scss";
import Offer from "../Offer/Offer";
import { ThemeContext } from "../ThemeContext";

class Favorite extends React.Component<any, any> {
    render() {
        let value = this.context;
        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={`favorite ${value.isOpen ? `favorite--open` : ``}`}>
                        <div className="container">
                            <button className="favorite__close" onClick={(e) => { value.toggle && value.toggle(e) }}>
                                <span className="icon-x"></span>
                            </button>
                            <div className="favorite__header">
                                <h4 className="favorite__title">Ulubione</h4>
                                <button className="favorite__button" onClick={(event) => value.deleteFavorites && value.deleteFavorites(event)}>
                                    <span className="icon-trash-2"></span>Usuń zapisane
                                </button>
                            </div>
                            {value.favorites.length === 0 &&
                                <div className="favorite__empty columns">
                                    <div className="column">
                                        <span className="icon-x-circle"></span>
                                        <h2>Upss.</h2>
                                        <p>Aktualnie nie masz żadnych zapisanych ofert.</p>
                                    </div>
                                </div>
                            }
                            <div className="favorite__items columns">
                                {value.favorites.map((item: any) => <Offer id={item.id} image={item.image} price={item.price} category={item.category} date={item.date} title={item.title} tags={item.tags} />)}
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Favorite;
