import React, { Component } from "react";
import "./App.css";
import Left from "./components/Left/Left";
import Right from "./components/right";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Left />

        <Right />
      </div>
    );
  }
}

export default App;
