import React from "react";
import list from "./etsy.json";
import "./App.css";
import Star from "Star";

function App() {
  const stars = JSON.parse(list);
  console.log("star", stars);
  return <Star />;
}

export default App;
