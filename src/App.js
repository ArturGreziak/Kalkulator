import React from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      liczba1: "",
      liczba2: "",
      operator: "",
      wynik: ""
    };
    this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    let liczba1 = parseInt(this.refs.liczba1.value);
    let liczba2 = parseInt(this.refs.liczba2.value);
    let operator = this.refs.operator.value;

    let wynik;

    switch (operator) {
      case "+":
        wynik = liczba1 + liczba2;
        break;
      case "-":
        wynik = liczba1 - liczba2;
        break;
      case "*":
        wynik = liczba1 * liczba2;
        break;
      case "/":
        wynik = liczba1 / liczba2;
        break;
      default:
    }
    this.setState({
      liczba1: liczba1,
      liczba2: liczba2,
      operator: operator,
      wynik: wynik
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1>Kalkulator</h1>
              <div>
                <label htmlFor="">Liczba 1: </label>
                <input type="text" ref="liczba1" />
              </div>
              <div className="">
                <label htmlFor="">Liczba 2: </label>
                <input type="text" ref="liczba2" />
              </div>
              <div className="">
                <label htmlFor="">Zanki Math: </label>
                <select ref="operator">
                  <option>+</option>
                  <option>-</option>
                  <option>*</option>
                  <option>/</option>
                </select>
              </div>
              <div className="form-grup">
                <button>Policz</button>
              </div>
            </form>
            <h1>{this.state.wynik}</h1>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
