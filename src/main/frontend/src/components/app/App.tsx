import React, { Component } from "react";
import { Route } from "react-router-dom";
import AdsPage from "../pages/ads_page";

import "./App.css";

export default class App extends Component {

  render() {
    return (
      <div className="App">
          <Route exact path="/" component={AdsPage} />
      </div>
    );
  }
}
