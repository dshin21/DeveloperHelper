import React, { Component } from "react";
import RightBot from "./rightBot";
import RightTop from "./rightTop";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

class Right extends Component {
  state = {
    taskComplete: 0,
    list: [{ id: 0, value: "" }],
    textArea: "",
    userId: "0"
  };

  componentDidMount() {
    //add localstorage
    // localStorage.setItem("userId", "1000");
    // let userId = localStorage.getItem("userId");
    // console.log(userId);
    // if (userId != null)
    let userId = null;
    fetch("http://18.217.49.198:3000/whoami", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (result.userId !== undefined) {
            userId = result.userId;
            console.log(userId);
            if (userId !== "-1") {
              fetch("http://18.217.49.198:3000/choose", {
                method: "post",
                body: JSON.stringify({ userId: userId }),
                headers: { "Content-Type": "application/json" }
              })
                .then(res => res.json())
                .then(
                  result => {
                    console.log(result);
                    if (result.todo !== undefined && result.todo !== "empty") {
                      this.setState({
                        list: JSON.parse(result.todo).list,
                        textArea: result.notes,
                        taskComplete: JSON.parse(result.todo).taskComplete,
                        userId: userId
                      });
                    } else {
                      this.setState({
                        userId: userId
                      });
                    }
                  },
                  error => {}
                );
            }
          }
        },
        error => {}
      );
  }

  logout = () => {
    console.log("logout");
  };
  buttonClick = () => () => {
    console.log("clieck");
    const { list } = this.state;
    const newList = [...list];
    if (list.length !== 0) {
      newList.push({ id: list[list.length - 1].id + 1, value: "" });
    } else {
      newList.push({ id: 0, value: "" });
    }
    this.setState({
      list: newList
    });
  };
  saveButtonOnClick = () => () => {
    console.log("saving");
    let jsonObj = {
      userId: this.state.userId,
      todo: JSON.stringify({
        list: this.state.list,
        taskComplete: this.state.taskComplete
      }),
      notes: this.state.textArea
    };
    fetch("http://18.217.49.198:3000/update", {
      method: "post",
      body: JSON.stringify(jsonObj),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log("update successful!");
        },
        error => {}
      );
    //update taskComplete
  };
  loginOnClick = () => () => {
    console.log("login");
    window.location = "https://badgebook-core.azurewebsites.net/External/Login";
  };
  handleToggle = value => () => {
    const { list, taskComplete } = this.state;
    const newList = list.filter(element => {
      return element.id !== value;
    });
    let newTaskComplete = taskComplete;
    newTaskComplete++;
    // newList.splice(currentIndex, 1);
    this.setState({
      taskComplete: newTaskComplete,
      list: newList
    });
  };
  onTextChange = (e, id) => {
    console.log(e.target.value);
    console.log(id);
    const { list } = this.state;
    const newList = [...list];
    newList.forEach(element => {
      if (element.id === id) element.value = e.target.value;
    });
    this.setState({
      list: newList
    });
  };
  onTextAreaChange = e => {
    console.log(e.target.value);
    this.setState({
      textArea: e.target.value
    });
  };
  styles = {
    backgroundColor: "red"
  };
  render() {
    return (
      <div id="rightPanel">
        <div className="boxShadow">
          <span id="taskNumber">Task:{this.state.taskComplete}</span>
          <IconButton aria-label="Delete" onClick={this.loginOnClick()}>
            <SvgIcon>
              <path
                fill="#000000"
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
              />
            </SvgIcon>
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.saveButtonOnClick()}>
            <SvgIcon>
              <path
                fill="#000000"
                d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
              />
            </SvgIcon>
          </IconButton>
          {/* <Button
            id="loginButton"
            variant="contained"
            size="small"
            className={"button"}
            onClick={this.loginOnClick()}
          >
            <SaveIcon className={"icon"} />
            Login
          </Button> */}
          {/* <Button
            id="saveOnServer"
            variant="contained"
            size="small"
            className={"button"}
            onClick={this.saveButtonOnClick()}
          >
            <SaveIcon className={"icon"} />
            Save
          </Button> */}
        </div>
        <RightTop
          onTextChange={this.onTextChange}
          handleToggle={this.handleToggle}
          buttonClick={this.buttonClick}
          taskComplete={this.state.taskComplete}
          list={this.state.list}
        />
        <RightBot
          textArea={this.state.textArea}
          onTextAreaChange={this.onTextAreaChange}
        />
      </div>
    );
  }
}

export default Right;
