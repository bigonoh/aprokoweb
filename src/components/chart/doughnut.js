/* eslint-disable import/no-unresolved */
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip);

export const data = {
  datasets: [
    {
      label: "Account Statistics",
      data: [12, 19],
      backgroundColor: ["#13AD96", "#FF5959"],
      borderColor: ["#13AD96", "#FF5959"],
      borderWidth: 1,
    },
  ],
  labels: ["Credit", "Debit"],
};

const credit = {
  one: "Account Statistics ",
  two: "Credit",
};

const debit = {
  one: "Account Statistics",
  two: "Debit",
};

// document.getElementById('chartjsLegend').innerHTML = ChartJS.register(Legend);

// const options = {
//   legend: {
//     display: false,
//     position: "right"
//   },
//   elements: {
//     arc: {
//       borderWidth: 0
//     }
//   }
// };

function DoughnutChart(props) {
  const data = {
    datasets: [
      {
        label: "Account Statistics",
        data: [props.credit, props.debit],
        backgroundColor: ["#13AD96", "#FF5959"],
        borderColor: ["#13AD96", "#FF5959"],
        borderWidth: 1,
      },
    ],
    labels: [credit.one, debit.one],
  };
  // console.log(props.data);
  const options = {
    responsive: true,
    cutout: props.cutout ? props.cutout : 55,
    legend: {
      display: true,
      position: "bottom",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = ` ${
                context.label === "Account Statistics " ? "Credit" : "Debit"
              }`,
              currentValue = context.raw;
            return label + ": " + currentValue + "%";
          },
        },
      },
    },
  };
  return (
    <div>
      <div style={{ width: "15.5rem" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default DoughnutChart;
