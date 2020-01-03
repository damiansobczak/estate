import React from "react";
import "./FilterResult.scss";
import { FilterResultProps } from "./Interfaces/FilterResultProps";

class FilterResult extends React.Component<FilterResultProps> {
    render() {
        if (this.props.data) {
            return (
                <div className={`filterResult ${this.props.isShowing ? "filterResult--visible" : " "}`}>
                    {this.props.data.map((item: any) => (
                        <div className="filterResult__item" key={item.id}>
                            <img className="filterResult__image" src={item.better_featured_image != null ? item.better_featured_image.source_url : ''} alt={item.slug} />
                            <div className="filterResult__wrapper">
                                <div className="filterResult__title">{item.title.rendered}</div>
                                <div className="filterResult__desc">
                                    <div className="filterResult__price">{item.acf.cena}</div>
                                    <div className="filterResult__address">ul. {item.acf.ulica},</div>
                                    <div className="filterResult__space">{item.acf.metraz}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className={`filterResult ${this.props.isShowing ? "filterResult--visible" : " "}`}>
                    Brak wyszukań
                </div>
            );
        }
    }
}

export default FilterResult;
