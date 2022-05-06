import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
    this.showSidebar = this.showSidebar.bind(this);
  }

  showSidebar = () => {
    this.setState({
      value: true,
    });
  };

  hideSidebar = () => {
    this.setState({
      value: false,
    });
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={this.showSidebar} />
            </Link>
          </div>
          <nav className={this.state.value ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={this.hideSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}

export default Navbar;
