import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Left from "./components/left";
import Right from "./components/right";
class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <Left />
          <Right />
        </div>
      </div>
    );
  }
}

export default App;
