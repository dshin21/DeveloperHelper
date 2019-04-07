import React, { Component } from "react";
class RightBot extends Component {
  render() {
    return (
      <div id="rightBot" className="boxShadow">
        <div className="textAreaContainer">
          <textarea
            value={this.props.textarea}
            onChange={e => this.props.onTextAreaChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default RightBot;
