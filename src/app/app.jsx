import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/navbar/Sidebar";
import Home from "./components/pages/home.jsx";
import PersonalInfo from "./components/pages/personalInfo.jsx";
import Recipes from "./components/pages/recipes.jsx";
import Statistics from "./components/pages/statistics.jsx";
import Widget from "./components/reusable/widget";

const App = () => {
  return (
    <Box>
      <Router>
        <Navbar />
        <Stack direction="row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<PersonalInfo />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </Stack>
      </Router>
    </Box>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
