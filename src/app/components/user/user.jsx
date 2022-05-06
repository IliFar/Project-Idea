import React, { Component } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import SignIn from "./signin/signIn";
import SignUp from "./signup/signUp";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
  }
  
  localuser = sessionStorage.getItem("username")

  render() {
    return (
      <>
        <div className="container">
        {!this.localuser ? (<SignUp />) : `Hello ${this.localuser}`}
        </div>
      </>
    );
  }
}

export default User;
