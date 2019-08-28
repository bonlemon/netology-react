import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Add from "./components/Add";
// import List from "./components/List";
import HomePage from "./components/HomePage";
// import ForzaPage from "./components/ForzaPage";
// import TimeAttackPage from "./components/TimeAttackPage";

export default function App() {
  return (
    <Router>
      <div className="page">
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/drift" component={DriftPage} />
        <Route path="/timeattack" component={TimeAttackPage} />
        <Route path="/forza" component={ForzaPage} /> */}
      </div>
    </Router>
  );
}
