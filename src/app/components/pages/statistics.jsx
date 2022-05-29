import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import axiosGet from "../data/fetchNutrients";
import Box from "@mui/material/Box";

const Statistics = () => {
  
  useEffect()

 

  Chart.register(...registerables);
  const nutrientsData = {
    labels: nutrients.map((nutrient) => nutrient.name).slice(" "),
    datasets: [
      {
        label: "Vitamins",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: nutrients.map((rec) => rec.DailyValue),
      },
    ],
  };
  console.log(nutrientsData.labels);
  return (
    <Box
      flex={5}
      p={2}
      sx={{ display: { xs: { margin: 0 } } }}
    >
      <Bar data={nutrientsData} />
    </Box>
  );
};

export default Statistics;
