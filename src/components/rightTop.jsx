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
  state = {};
  state = {
    checked: [0]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="rightTop">
        <List className={"a"}>
          {[0, 1, 2, 3].map(value => (
            <ListItem key={value} role={undefined} dense button>
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                onClick={this.handleToggle(value)}
              />

              <TextField
                id="standard-bare"
                className={classes.textField}
                defaultValue="Bare"
                margin="normal"
                fullWidth="true"
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
        <Fab
          style={{ padding: 0, margin: 0 }}
          className={"fab"}
          color="secondary"
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
// export default RightTop;
export default withStyles(styles)(RightTop);
