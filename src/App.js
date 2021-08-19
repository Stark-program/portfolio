import "./App.css";
import _ from "lodash";

function renderTimes(num) {
  let card = [];
  _.times(num, () => {
    card.push(
      <section>
        <h1>Nice Curves!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lobortis turpis dui, vel vulputate nunc sollicitudin et. Aenean
          sollicitudin orci tempus, semper nibh vel, porttitor quam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Praesent bibendum purus ut interdum elementum. Aenean quis
          pulvinar magna. Integer sed vestibulum dui. Ut tempor pretium ornare.
          Mauris tortor purus, pulvinar sed lectus sed, cursus pellentesque
          arcu. Pellentesque consectetur iaculis nulla, ac sagittis metus
          molestie nec.
        </p>
      </section>
    );
  });
  return card;
}
function App() {
  return <div className="App">{renderTimes(8)}</div>;
}

export default App;
