import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Skills from "./components/Skils";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Skills} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
