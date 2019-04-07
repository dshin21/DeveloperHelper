import React, { Component } from "react";
import RightBot from "./rightBot";
import RightTop from "./rightTop";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
class Right extends Component {
  state = {
    taskComplete: 0,
    list: [{ id: 0, value: "test" }, { id: 2, value: "test1" }],
    textArea: "",
    googleToken: 0
  };
  responseGoogle = response => {
    //console.log("google ID", response.googleId, "\ntokenId", response.tokenId);
    console.log(response);
  };
  logout = () => {
    console.log("logout");
  };
  buttonClick = () => () => {
    console.log("clieck");
    const { list } = this.state;
    const newList = [...list];
    if (list.length !== 0) {
      newList.push({ id: list[list.length - 1].id + 1, value: "test" });
    } else {
      newList.push({ id: 0, value: "test" });
    }
    this.setState({
      list: newList
    });
  };
  saveButtonOnClick = () => () => {
    if (this.state.googleToken === 0) alert("please sign in");
    else console.log(this.state);
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
          <GoogleLogin
            clientId="410835721178-qbq11dmb6bamb5s20l77o8tn3fttcc0d.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={res => this.responseGoogle(res)}
            onFailure={res => this.responseGoogle(res)}
            cookiePolicy={"single_host_origin"}
          />
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={() => this.logout()}
          />
          <Button
            id="saveOnServer"
            variant="contained"
            size="small"
            className={"button"}
            onClick={this.saveButtonOnClick()}
          >
            <SaveIcon className={"icon"} />
            Save
          </Button>
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
