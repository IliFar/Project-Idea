import React from "react";
import BloodData from "./bloodData/bloodData.jsx";
import "./main.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";


export class Main extends React.Component {
  constructor() {
    super();
  }

  
  render() {
    return (
      <>
        <div className="main col-7">
          <BloodData/>
        </div>
      </>
    );
  }
}
