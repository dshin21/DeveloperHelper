import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class RightTop extends Component {
  render() {
    const {
      classes,
      handleToggle,
      onTextChange,
      buttonClick,
      list
    } = this.props;

    return (
      <div id="rightTop" className="boxShadow">
        <div className="listContainer">
          <List className={"a"}>
            {list.map(value => (
              <ListItem key={value.id} role={undefined} dense button>
                <Checkbox
                  checked={false}
                  tabIndex={-1}
                  disableRipple
                  onClick={handleToggle(value.id)}
                />

                <TextField
                  id="standard-bare"
                  className={classes.textField}
                  value={value.value}
                  onChange={event => {
                    onTextChange(event, value.id);
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
            onClick={buttonClick()}
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
