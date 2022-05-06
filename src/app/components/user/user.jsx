import React, { Component } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import SignIn from "./signin/signIn";
import SignUp from "./signup/signUp";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
    };
  }

  render() {
      const fromTitles = ["Sign Up", "Sign In", "Personal Info"];
    return (
      <>
        <div className="container">
            <button onClick={() => {<SignUp formData={this.state} setFormData={this.setState({})}/>}}>Sign up</button>
            <button onClick={() => {<SignIn/>}}>Sign in</button>
        </div>
      </>
    );
  }
}

export default User;
