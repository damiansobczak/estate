import React from "react";
import FaqItem from "../FaqItem/FaqItem";
import "./Faq.scss";

class Faq extends React.Component {
  render() {
    return (
      <section className="faq">
        <div className="container">
            <h3 className="faq__title">Często zadawane pytania</h3>
            <div className="faq__items columns">
                <FaqItem count="01" title="Jakich dokumentów potrzebuję?" desc="Maecenas in turpis diam. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim vestibulum lacinia."/>
                <FaqItem count="02" title="Jakich dokumentów potrzebuję?" desc="Maecenas in turpis diam. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim vestibulum lacinia."/>
                <FaqItem count="03" title="Jakich dokumentów potrzebuję?" desc="Maecenas in turpis diam. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim vestibulum lacinia."/>
                <FaqItem count="04" title="Jakich dokumentów potrzebuję?" desc="Maecenas in turpis diam. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim vestibulum lacinia."/>
            </div>
        </div>
      </section>
    );
  }
}

export default Faq;
