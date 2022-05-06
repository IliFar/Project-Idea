import React, { Component } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

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
            <button onClick={<signUp/>}>Sign up</button>
            <button onClick={<signIn/>}>Sign in</button>
        </div>
      </>
    );
  }
}

export default User;
