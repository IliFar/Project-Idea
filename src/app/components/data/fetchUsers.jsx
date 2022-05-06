import axios from "axios";
import React, { Component } from "react";

export class FetchUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
    this.postUser = this.postUser.bind(this);
  }

  componentDidMount() {
    this.postUser
  }

  async postUser() {
    let body = {
        username: this.props.username,
        password: this.props.password
    }
    axios.post("https://retoolapi.dev/NYHxFL/users", JSON.stringify(body))
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        Hello {this.props.username}
      </div>
    );
  }
}

export default FetchUsers;
