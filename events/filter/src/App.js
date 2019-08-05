import React from "react";
import "./App.css";
import Toolbar from "./Toolbar";
import Portfolio from "./Portfolio";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "All"
    };
  }

  selectFilter(filter) {
    this.setState({
      selected: filter
    });
  }

  render() {
    const { projects, filters } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.selectFilter.bind(this)}
        />
        <Portfolio
          projects={
            selected === "All"
              ? projects
              : projects.filter(el => el.category === selected)
          }
        />
      </div>
    );
  }
}
