import React, { Component } from "react";
import LeftBot from "./leftBot";
import LeftTop from "./leftTop";

class Left extends Component {
  state = {};
  styles = {
    backgroundColor: "blue",
    borderRight: "5px solid black"
  };
  render() {
    return (
      <div style={this.styles} className="col">
        <div id="leftPanel">
          <LeftTop />

          <LeftBot />
        </div>
      </div>
    );
  }
}

export default Left;
