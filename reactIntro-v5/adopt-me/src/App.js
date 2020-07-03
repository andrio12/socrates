import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Herkúles" animal="Dog" breed="Labrador" />
      <Pet name="Doink" animal="fish" breed="Shark" />
      <Pet name="Pepper" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
