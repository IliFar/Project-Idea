import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import Home from "./components/pages/home.jsx";
import PersonalInfo from "./components/pages/personalInfo.jsx";
import Recipes from "./components/pages/recipes.jsx";
import Statistics from "./components/pages/statistics.jsx";
import User from "./components/user/user.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<PersonalInfo />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </Router>
        <User />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
