import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { cardsLayout, products } from "./utils";

ReactDOM.render(
  <App layout={cardsLayout} products={products} />,
  document.getElementById("root")
);
