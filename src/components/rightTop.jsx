import React, { Component } from "react";

class RightTop extends Component {
  state = {};
  render() {
    return (
      <div id="rightTop">
        <ul className="list" style={{ listStyleType: "none" }}>
          <li className="list-item">
            <input type="checkbox" />
            to-do <button>Del</button>
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do
            <button>Del</button>
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do <button>Del</button>
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do <button>Del</button>
          </li>
          <li className="list-item">
            {" "}
            <input type="checkbox" />
            to-do <button>Del</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default RightTop;
