import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function hexTorgb(c) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

class App extends React.Component {
  state = {
    hex: "#FFFFFF"
  };
  handleOnChange = event => {
    const hex = event.target.value;
    this.setState({ hex });
  };
  render() {
    const { hex } = this.state;
    const rgb = hexTorgb(hex);
    return (
      <div className="App" style={{ background: `${hex}` }}>
        <form>
          <input
            className="control input"
            value={hex}
            onChange={this.handleOnChange}
          />
          <div className="control button">
            {rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "Ошибка!"}
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
