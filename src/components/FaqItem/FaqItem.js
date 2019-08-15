import React from "react";
import "./FaqItem.scss";

class FaqItem extends React.Component {
  render() {
    return (
      <div className="column is-6-tablet">
        <div className="faqitem">
            <div className="faqitem__count">{this.props.count}.</div>
            <div className="faqitem__content">
                <div className="faqitem__title">{this.props.title}</div>
                <div className="faqitem__desc">{this.props.desc}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default FaqItem;
