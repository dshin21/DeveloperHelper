import React, { Component } from "react";

class RightTop extends Component {
  state = {};
  render() {
    return (
      <div id="rightTop">
        <ul className="list" style={{ listStyleType: "none" }}>
          <li className="list-item">
            <input type="checkbox" />
            to-do
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do
          </li>
        </ul>
      </div>
    );
  }
}

export default RightTop;
