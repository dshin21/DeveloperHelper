import React, { Component } from "react";

class LeftTop extends Component {
  state = {};
  render() {
    return (
      <div id="leftTop">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">
                Java
              </button>
              <button type="button" class="btn btn-secondary">
                C
              </button>
              <button type="button" class="btn btn-secondary">
                CPP
              </button>
              <button type="button" class="btn btn-secondary">
                JS
              </button>
            </div>
          </div>
        </nav>
        LEFTTOP
      </div>
    );
  }
}

export default LeftTop;
