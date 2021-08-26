import "./App.css";
import _ from "lodash";
import React, { useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Col, Row, Carousel } from "antd";
import "antd/dist/antd.css";
import About from "./about";
import LandingPage from "./landingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/about" exact component={About}>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
