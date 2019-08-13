import React from "react";
import ReactDOM from "react-dom";
import shortid from "shortid";
import "./styles.css";

class App extends React.Component {
  state = {
    list: [],
    date: "",
    km: ""
  };
  compare = ({ date: first }, { date: second }) => {
    if (first < second) {
      return 1;
    }
    if (first > second) {
      return -1;
    }
    return 0;
  };
  handleOnChange = name => event => {
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  handleOnClick = event => {
    event.preventDefault();
    this.setState(({ list, date, km }) => {
      const row = list.find(item => item.date === date);
      if (row) {
        return {
          list: [
            ...list.filter(item => item.date !== date),
            { id: shortid.generate(), date, km: Number(km) + Number(row.km) }
          ].sort(this.compare),
          date: "",
          km: ""
        };
      }
      return {
        list: [...list, { id: shortid.generate(), date, km }].sort(
          this.compare
        ),
        date: "",
        km: ""
      };
    });
  };
  handleOnEditRow = id => event => {
    this.setState(({ list }) => {
      const { date, km } = list.find(item => item.id === id);
      return { date, km, list: list.filter(item => item.id !== id) };
    });
  };
  handleOnRemoveRow = id => event => {
    this.setState(({ list }) => {
      return {
        list: list.filter(item => item.id !== id)
      };
    });
  };
  render() {
    const { date, km, list } = this.state;
    console.log(date, km, list);
    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="date">Дата</label>
            <input
              id="date"
              type="text"
              className="control input"
              value={date}
              onChange={this.handleOnChange("date")}
            />
          </div>
          <div>
            <label htmlFor="km">КМ</label>
            <input
              id="km"
              type="text"
              className="control input"
              value={km}
              onChange={this.handleOnChange("km")}
            />
          </div>
          <button className="control button" onClick={this.handleOnClick}>
            Ok
          </button>
        </form>
        {list.length ? (
          <div className="list">
            {list.map(({ id, date, km }) => (
              <div className="list-item" key={id}>
                <div className="list-item--date">{date}</div>
                <div className="list-item--km">{km}</div>
                <div className="list-item--edit">
                  <i onClick={this.handleOnEditRow(id)}>
                    <img src="https://img.icons8.com/material-outlined/24/000000/pencil--v1.png" />
                  </i>
                  <i onClick={this.handleOnRemoveRow(id)}>
                    <img src="https://img.icons8.com/material-rounded/24/000000/cancel.png" />
                  </i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Записей нет</div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
