import React, { MouseEvent } from "react";
import "./Favorite.scss";
import Offer from "../Offer/Offer";
import { ThemeContext } from "../ThemeContext";
import EmptyFavorite from "./EmptyFavorite";

class Favorite extends React.Component<any, any> {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={`favorite ${value.isOpen ? `favorite--open` : ``}`}>
                        <div className="container">
                            <button className="favorite__close" onClick={(e: MouseEvent) => { value.toggle && value.toggle(e) }}>
                                <span className="icon-x"></span>
                            </button>
                            <div className="favorite__header">
                                <h4 className="favorite__title">Ulubione</h4>
                                <button className="favorite__button" onClick={(e: MouseEvent) => value.deleteFavorites && value.deleteFavorites(e)}>
                                    <span className="icon-trash-2"></span>Usuń zapisane
                                </button>
                            </div>
                            {value.favorites && value.favorites.length === 0 ? <EmptyFavorite /> :
                                <div className="favorite__items columns">
                                    {value.favorites.map((item: any) => <Offer key={item.id} id={item.id} image={item.image} price={item.price} category={item.category} date={item.date} title={item.title} tags={item.tags} />)}
                                </div>
                            }
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Favorite;
