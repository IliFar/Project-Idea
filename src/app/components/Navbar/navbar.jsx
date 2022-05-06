import React from "react";
import "./navbar.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav
          className="col-4 navbar navbar-expand d-flex flex-column align-items-center"
          id="sidebar"
        >
          <a href="#" className="navbar-brand text-light mt-5">
            <div>Wellness Plus</div>
          </a>
          <ul className="navbar-nav d-flex flex-column mt-5 w-100 text-center">
            <li className="nav-item ">
              <a href="#" className="nav-link text-light pl-4">
                Dashboard
              </a>
            </li>
            <li className="nav-item ">
              <a href="#" className="nav-link text-light pl-4">
                Inbox
              </a>
            </li>
            <li className="nav-item ">
              <a href="#" className="nav-link text-light pl-4">
                Statistics
              </a>
            </li>
            <li className="nav-item ">
              <a href="#" className="nav-link text-light pl-4">
                Other
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
