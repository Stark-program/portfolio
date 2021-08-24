import "./App.css";
import _ from "lodash";
import { useState } from "react";

function App() {
  const renderTimes = (num) => {
    console.log(1);
    let card = [];
    _.times(num, (i) => {
      console.log(i);
      card.push(
        <div className="section-Container">
          <div className="text-container">
            <section className={i % 2 ? "blue section" : "red section"}>
              <h1>Nice Curves!</h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis turpis dui, vel vulputate nunc sollicitudin et. Aenean
                sollicitudin orci tempus, semper nibh vel, porttitor quam. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Praesent bibendum purus ut interdum
                elementum. Aenean quis pulvinar magna. Integer sed vestibulum
                dui. Ut tempor pretium ornare. Mauris tortor purus, pulvinar sed
                lectus sed, cursus pellentesque arcu. Pellentesque consectetur
                iaculis nulla, ac sagittis metus molestie nec.
              </p>
            </section>
          </div>
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className={i % 2 ? "blue svgWave" : "red svgWave"}
            >
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,149.3C672,139,768,85,864,90.7C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      );
    });

    return card;
  };
  return <div className="App">{renderTimes(3)}</div>;
}

export default App;
