import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { red } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class RightTop extends Component {
  state = {
    taskComplete: 0,
    // checked: [0],
    list: [0]
  };
  buttonClick = () => () => {
    console.log("clieck");
    const { list } = this.state;
    const newList = [...list];
    if (list.length != 0) {
      newList.push(list[list.length - 1] + 1);
    } else {
      newList.push(0);
    }
    this.setState({
      list: newList
    });
  };
  handleToggle = value => () => {
    // const { checked, list } = this.state;
    const { list, taskComplete } = this.state;
    const currentIndex = list.indexOf(value);
    // const newChecked = [...checked];
    const newList = [...list];
    let newTaskComplete = taskComplete;
    newTaskComplete++;
    // if (currentIndex === -1) {
    //   newChecked.push(value);
    //   newList.splice(currentIndex, 1);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    //
    // }
    newList.splice(currentIndex, 1);
    this.setState({
      // checked: newChecked,
      taskComplete: newTaskComplete,
      list: newList
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="rightTop">
        <div className="container">
          <List className={"a"}>
            {this.state.list.map(value => (
              <ListItem key={value} role={undefined} dense button>
                <Checkbox
                  checked={false}
                  tabIndex={-1}
                  disableRipple
                  onClick={this.handleToggle(value)}
                />

                <TextField
                  id="standard-bare"
                  className={classes.textField}
                  defaultValue="Bare"
                  margin="normal"
                  fullWidth={true}
                />
                {/* <ListItemText primary={`Line item ${value + 1}`} /> */}
                {/* <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
              </ListItem>
            ))}
          </List>
        </div>
        <Fab
          style={{ padding: 0, margin: 0 }}
          className={"fab"}
          color="secondary"
          onClick={this.buttonClick()}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
// export default RightTop;
export default withStyles(styles)(RightTop);
