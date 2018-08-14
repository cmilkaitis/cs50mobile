import React from "react";
import { render } from "react-dom";

import "./styles.css";

const App = (props) => (
  <div className="App">
    <h2>{props.count}</h2>
  </div>
);

const rootElement = document.getElementById("root");
let count = 0;
render(<App count={count}/>, rootElement);
