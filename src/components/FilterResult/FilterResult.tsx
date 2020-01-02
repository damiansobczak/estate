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
                            {item.id}
                            {item.slug}
                            {item.title.rendered}
                            {item.type}
                            {item.cena}
                            {item.ulica}
                            {item.metraz}
                            {/* <img src={item.better_featured_image != null ? item.better_featured_image.source_url : ''} alt="" /> */}
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className={`filterResult ${this.props.isShowing ? "filterResult--visible" : " "}`}>
                    Pusto
                </div>
            );
        }
    }
}

export default FilterResult;
