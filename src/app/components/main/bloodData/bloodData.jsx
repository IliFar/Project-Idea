import React, {useState} from "react";
import Records from "../../../../data/userBloodData.json";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LoadingData from "../recommendation/loadingData.jsx";

const BloodData = () => {
  const [isLoading, setIsLoading] = useState(false)

  Chart.register(...registerables)

    const data = {
      labels: Records.map(rec => rec.name).slice(" "),
      datasets: [
        {
          label: "Vitamins",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: Records.map(rec => rec.DailyValue)
        }
      ]
    }
    
  console.log(data.labels);
   return (
     <>
      <LoadingData/>
      <Doughnut 
        data={data}
        height={400}
        width={600}
      />
     </>
   )
 
}

export default BloodData;
