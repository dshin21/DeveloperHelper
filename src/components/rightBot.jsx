import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
class RightBot extends Component {
  state = {};
  render() {
    return (
      <div id="rightBot">
        <textarea
          style={{ width: "100%", height: "100%" }}
          defaultValue="The print function for JS is console.log();"
        />
      </div>
    );
  }
}

export default RightBot;
