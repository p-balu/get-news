import React, { Component } from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Sports from "./Sports.js";
import Business from "./Business.js";
import Entertainment from "./Entertainment.js";
import Home from "./Home.js";
import Health from "./Health.js";
import Science from "./Science.js";
import Technology from "./Technology.js";
import Results from "./Results.js";
export default class App extends Component {
  render() {
    return (
      <div className="container" >
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sports" component={Sports} />
            <Route path="/business" component={Business} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/health" component={Health} />
            <Route path="/science" component={Science} />
            <Route path="/technology" component={Technology} />
            <Route path="/search" component={Results} />
          </Switch>
        </HashRouter>
      </div >
    );
  }
}
