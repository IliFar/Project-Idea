import "./home.css";
import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Widget from "../reusable/widget";

const Home = () => {

  
  return (
    <Box
      className="box"
      flex={5}
      p={2}
      sx={{ display: { xs: { margin: 0 } } }}
    >
      <Widget type="statistics"/>
      <Widget type="personal-info"/>
      <Widget type="recipes"/>
      <Widget type="saved-recipes"/>
      <Widget type="achievement"/>
    </Box>
  );
};

export default Home;
