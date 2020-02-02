import React from "react";
import "./Features.scss";
import FeaturesItem from "../FeaturesItem/FeaturesItem";

class Features extends React.Component<any, any> {
  render() {
    return (
      <section className="features">
        <div className="container">
          <div className="features__desc columns">
            <h4 className="features__title column is-6-tablet">Cały czas zastanawiasz się dlaczego powinieneś wybrać nasze usługi?</h4>
            <p className="features__text column is-8-tablet">Poznaj kilka faktów o naszej firmie. Mamy nadzieję że rozjaśni to Twoje wątpliwości. Pamiętaj że nasi konsultanci pozostają do Twojej dyspozycji!</p>
          </div>
          <div className="features__items columns">
            <FeaturesItem number="1" icon="key" title="Najniższe ceny w mieście" />
            <FeaturesItem number="2" icon="check-square" title="Wszystko załatwimy za Ciebie" />
            <FeaturesItem number="3" icon="gift" title="Dajemy roczną gwarancję" />
            <FeaturesItem number="4" icon="volume-2" title="Stawiamy na komunikację" />
            <FeaturesItem number="5" icon="unlock" title="Bezpieczeństwo transakcji" />
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
