import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./App";
import { cardsLayout, products } from "./utils";

ReactDOM.render(
  <Store layout={cardsLayout} products={products} />,
  document.getElementById("root")
);
