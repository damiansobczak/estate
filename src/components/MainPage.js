import React from "react";
import Header from "./Header/Header";

class MainPage extends React.Component {
  state = {
    favorite: [],
    properties: []
  };

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default MainPage;
