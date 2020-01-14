import React from "react";
import FaqItem from "../FaqItem/FaqItem";
import { FaqProps } from "./Interfaces/FaqProps";
import "./Faq.scss";

class Faq extends React.Component<FaqProps> {
  render() {
    return (
      <section className="faq">
        <div className="container">
          <h3 className="faq__title">Często zadawane pytania</h3>
          <div className="faq__items columns">
            {this.props.data && this.props.data.map((item: any, index: any) => <FaqItem count={index} title={item.title.rendered} desc={item.content.rendered.replace(/<p>|<\/p>/g, '')} key={index}/>)}
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
