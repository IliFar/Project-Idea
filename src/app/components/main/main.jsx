import React from "react";
import User from "./user/user.jsx";
import BloodData from "./bloodData/bloodData.jsx";
import "./main.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";


export class Main extends React.Component {
  constructor() {
    super();
  }

  localUser = localStorage.getItem("username")
  render() {
    return (
      <>
        <div className="main col-7">
          <User/>
          {this.localUser && <BloodData/>}
        </div>
      </>
    );
  }
}
