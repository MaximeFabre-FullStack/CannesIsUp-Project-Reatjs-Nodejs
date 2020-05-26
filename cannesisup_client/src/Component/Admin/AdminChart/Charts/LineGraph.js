import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["Janvier", "Fevrier", "Mars", "Avri", "Mai"],

  datasets: [
    {
      label: "Quantité",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 139],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Nombre de visiteurs / mois",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
