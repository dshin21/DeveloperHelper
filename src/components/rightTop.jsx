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
    list: [{ id: 0, value: "test" }, { id: 2, value: "test1" }]
  };
  buttonClick = () => () => {
    console.log("clieck");
    const { list } = this.state;
    const newList = [...list];
    if (list.length != 0) {
      newList.push({ id: list[list.length - 1].id + 1, value: "test" });
    } else {
      newList.push({ id: 0, value: "test" });
    }
    this.setState({
      list: newList
    });
  };
  handleToggle = value => () => {
    const { list, taskComplete } = this.state;
    const newList = list.filter(element => {
      return element.id != value;
    });
    let newTaskComplete = taskComplete;
    newTaskComplete++;
    // newList.splice(currentIndex, 1);
    this.setState({
      taskComplete: newTaskComplete,
      list: newList
    });
  };
  onTextChange(e, id) {
    console.log(e.target.value);
    console.log(id);
    const { list } = this.state;
    const newList = [...list];
    newList.forEach(element => {
      if (element.id == id) element.value = e.target.value;
    });
    this.setState({
      list: newList
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div id="rightTop" className="boxShadow">
        <div className="listContainer">
          <List className={"a"}>
            {this.state.list.map(value => (
              <ListItem key={value.id} role={undefined} dense button>
                <Checkbox
                  checked={false}
                  tabIndex={-1}
                  disableRipple
                  onClick={this.handleToggle(value.id)}
                />

                <TextField
                  id="standard-bare"
                  className={classes.textField}
                  // value={value.value}
                  onChange={event => {
                    this.onTextChange(event, value.id);
                  }}
                  margin="normal"
                  fullWidth={true}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div id="addButtonContainer">
          <Fab
            id="addButton"
            style={{ padding: 0, margin: 0 }}
            className={"fab"}
            color="secondary"
            onClick={this.buttonClick()}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
// export default RightTop;
export default withStyles(styles)(RightTop);
