import "./App.css";
import _ from "lodash";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { Col, Row, Carousel } from "antd";
import "antd/dist/antd.css";
import About from "./about";

function LandingPage() {
  const [test, setTest] = useState(false);
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="App">
      <Row className="column-wrapper">
        <Col xs={{ span: 24 }} md={{ span: 8 }} id="col-1">
          <h1 className="portfolio-header">StarkProgramming</h1>
          <Router>
            <div>
              <button className="under-title-btns">
                <Link to="/about" onClick={() => setTest(true)}>
                  About
                </Link>
              </button>
              <button className="under-title-btns">
                <Link to="/contact">Contact</Link>
              </button>
            </div>
          </Router>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }} id="col-2">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 10 }} id="col-3">
          Test-2
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
