import React, { MouseEvent } from "react";
import "./Favorite.scss";
import Offer from "../Offer/Offer";
import { ThemeContext } from "../ThemeContext";

class Favorite extends React.Component<any, any> {
    static contextType = ThemeContext;

    state = {
        items: []
    }

    componentDidMount() {
        let values = [], keys = Object.keys(localStorage), i = keys.length;
        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        const items = values.map(item => JSON.parse(String(item)));
        this.setState({ items });
    }

    componentDidUpdate() {
        if (this.context.isOpen && this.state.items.length !== localStorage.length) {
            let values = [], keys = Object.keys(localStorage), i = keys.length;
            while (i--) {
                values.push(localStorage.getItem(keys[i]));
            }
            const items = values.map(item => JSON.parse(String(item)));
            this.setState({ items });
        }
    }

    render() {
        let value = this.context;
        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={`favorite ${value.isOpen ? `favorite--open` : ``}`}>
                        <div className="container">
                            <button className="favorite__close" onClick={(e) => value.toggle(e)}>
                                <span className="icon-x"></span>
                            </button>
                            <div className="favorite__header">
                                <h4 className="favorite__title">Ulubione</h4>
                                <button className="favorite__button">
                                    <span className="icon-trash-2"></span>Usuń zapisane
                                </button>
                            </div>
                            <div className="favorite__items columns">
                                {this.state.items.map((item: any) => <Offer id={item.id} image={item.image} price={item.price} category={item.category} date={item.date} title={item.title} tags={item.tags} />)}
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Favorite;
