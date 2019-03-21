import React, { Component } from "react";

class RightBot extends Component {
  state = {};
  render() {
    return (
      <div id="rightBot">
        <textarea
          style={{ width: "100%", height: "100%" }}
          defaultValue="test"
        />
      </div>
    );
  }
}

export default RightBot;
