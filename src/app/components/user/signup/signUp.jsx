import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  HandleSubmit = (e) => {
    let body = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("https://retoolapi.dev/NYHxFL/users", body, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      });
    sessionStorage.setItem("username", this.state.username);
  };

  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        <form onSubmit={this.HandleSubmit}>
          <label htmlFor="username">username:</label>
          <input
            name="username"
            type="text"
            id="username"
            onChange={this.handleChange}
            value={this.state.username}
            required
          />
          <label htmlFor="password">password:</label>
          <input
            name="password"
            type="text"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <input type="submit" value="submit" />
        </form>
      </section>
    );
  }
}

export default SignUp;
