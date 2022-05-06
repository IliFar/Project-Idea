import React, { Component } from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

export class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      nutrients: [],
    };
    this.axiosGet = this.axiosGet.bind(this);
  }

  //   async componentDidMount() {
  //     await axios.get("https://apimocha.com/wellnessplus/nutrients").then((res) => {
  //       const nutrients = res.data;
  //       console.log(res.data);
  //       this.setState({nutrients: this.state.nutrients });
  //     });
  //   }

  async axiosGet() {
    await axios
      .get("https://apimocha.com/wellnessplus/nutrients")
      .then((res) => {
        console.log(res.data);
        this.setState({ nutrients: res.data }, () => {
          console.log(this.state.nutrients);
        });
      });
  }
  render() {
    this.axiosGet;
    Chart.register(...registerables);
    const nutrientsData = {
      labels: this.state.nutrients.map((nutrient) => nutrient.name).slice(" "),
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
          data: this.state.nutrients.map((rec) => rec.DailyValue),
        },
      ],
    };
    console.log(nutrientsData.labels);
    return (
      <>
        <ul>
          {this.state.nutrients.map(nut => 
            <li key={nut.id}>{nut.name}</li>
          )}
        </ul>
      </>
    );
  }
}

export default Statistics;
