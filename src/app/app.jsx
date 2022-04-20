import React from "react";
import ReactDOM from "react-dom/client";
import {Navbar} from "./components/Navbar/navbar.jsx";

class App extends React.Component {
    render() {
        return (
             <Navbar/>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);