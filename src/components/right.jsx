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
      <div id="rightPanel">
        <RightTop />
        <RightBot />
      </div>
    );
  }
}

export default Right;
