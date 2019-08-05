import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import images from "./imgs";
const filters = ["All", "Websites", "Flayers", "Business Cards"];

ReactDOM.render(
  <App projects={images} filters={filters} />,
  document.getElementById("root")
);
