import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";

export class SignUp extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.props.formData.email}
              onChange={e => this.setState({...this.props.formData, email: e.target.value})}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.props.formData.password}
              onChange={e => this.setState({...this.props.formData, password: e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default SignUp;
