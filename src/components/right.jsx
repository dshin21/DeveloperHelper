import React, { Component } from "react";
import RightBot from "./rightBot";
import RightTop from "./rightTop";
class Right extends Component {
  state = {};
  styles = {
    backgroundColor: "red"
  };
  render() {
    return (
      <div style={this.styles} className="col">
        <div id="rightPanel">
          <RightTop />
          <RightBot />
        </div>
      </div>
    );
  }
}

export default Right;
