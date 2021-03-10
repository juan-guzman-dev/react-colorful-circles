import React from "react";
import "./App.css";
import PositionedColorfulCircles from "./PositionedColorfulCircles";

function App() {
  return (
    <div className="App">
      <h1>Colorful Circles!</h1>
      <p>Click on a button to add a colored circle with a random position and size.
        <br></br>
        Hover the mouse over a circle to chase it around.</p>
      <PositionedColorfulCircles />
    </div>
  );
}

export default App;
