import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { Main } from "./components/main/main.jsx";
import User from "./components/user/user.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <User />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
