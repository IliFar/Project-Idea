import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FetchUsers from "../../data/fetchUsers";

export class SignIn extends Component {
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

  HandleSubmit = () => {  
    return <FetchUsers username={this.state.username}/>
  };

  render() {
    return (
        <>
      <section>
        <h1>Login</h1>
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
          <input type="submit" value="login"/>
        </form>
      </section>
      </>
    );
  }
}

export default SignIn;
