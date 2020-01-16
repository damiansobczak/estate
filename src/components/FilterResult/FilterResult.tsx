import React from "react";
import "./FilterResult.scss";
import { FilterResultProps } from "./Interfaces/FilterResultProps";
import { Link } from "react-router-dom";

class FilterResult extends React.Component<FilterResultProps> {
    render() {
        if (this.props.data && this.props.data.length) {
            return (
                <div className={`filterResult ${this.props.isShowing ? "filterResult--visible" : " "}`}>
                    {this.props.data.map((item: any) => (
                        <Link to={`/oferta/${item.id}`} className="filterResult__item" key={item.id}>
                            <img className="filterResult__image" src={item.better_featured_image != null ? item.better_featured_image.source_url : ''} alt={item.slug} />
                            <div className="filterResult__col">
                                <div className="filterResult__title">{item.title.rendered}</div>
                                <div className="filterResult__value">ul. {item.acf.ulica}</div>
                            </div>
                            <div className="filterResult__col">
                                <div className="filterResult__title">Cena</div>
                                <div className="filterResult__value">{item.acf.cena}</div>
                            </div>
                            <div className="filterResult__col">
                                <div className="filterResult__title">Metraż</div>
                                <div className="filterResult__value">{item.acf.metraz}</div>
                            </div>
                            <div className="filterResult__col">
                                <div className="filterResult__title">Liczba pokoi</div>
                                <div className="filterResult__value">{item.acf.liczba_pokoi}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            );
        } else {
            return (
                <div className={`filterResult ${this.props.isShowing ? "filterResult--visible" : " "}`}>
                    <div className="filterResult__title">Brak ofert</div>
                </div>
            );
        }
    }
}

export default FilterResult;
