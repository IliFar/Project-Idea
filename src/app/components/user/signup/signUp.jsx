import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  HandleSubmit = () => {
      
  }

  render() {
    return (
      <section>
        <h1>Sign in</h1>
        <form>
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
        </form>
      </section>
    );
  }
}

export default SignUp;
