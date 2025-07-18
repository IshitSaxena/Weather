// src/components/TemperatureChart.jsx
// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// export default function TemperatureChart({ hourlyData }) {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);

//   useEffect(() => {
//     if (!hourlyData || hourlyData.length === 0) return;

//     const ctx = chartRef.current.getContext("2d");

//     // Destroy old chart instance if it exists
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     const labels = hourlyData.map((item) =>
//       new Date(item.dt * 1000).toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })
//     );

//     const temps = hourlyData.map((item) => item.main.temp);

//     chartInstanceRef.current = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels,
//         datasets: [
//           {
//             label: "Temperature (°C)",
//             data: temps,
//             borderColor: "#f57c00",
//             backgroundColor: "rgba(245, 124, 0, 0.1)",
//             fill: true,
//             tension: 0.4,
//             pointRadius: 4,
//             pointBackgroundColor: "#f57c00",
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         scales: {
//           y: {
//             beginAtZero: false,
//           },
//         },
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//       },
//     });
//   }, [hourlyData]);

//   return <canvas ref={chartRef} width="350" height="140" />;
// }
// TemperatureChartSection.js
import React from "react";
import "./temp.css"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

export default function TemperatureChartSection({ hourlyData }) {
  if (!hourlyData || hourlyData.length === 0) return null;

  const chartData = {
    labels: hourlyData.map(hour =>
      new Date(hour.dt_txt || hour.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit", minute: "2-digit"
      })
    ),
    datasets: [
      {
        label: "Temperature (°C)",
        data: hourlyData.map(hour => hour.main.temp),
        fill: true,
        borderColor: "#f57c00",
        backgroundColor: "rgba(245, 124, 0, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#f57c00",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        ticks: { callback: (val) => `${val}°C` },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <section className="temperature-chart-section pt-100">
      <div className="container">
        <div className="title text-center">
          <h2 className="globalSec-heading">Hourly Temperature Chart</h2>
          <p className="globalSec-text">Visual representation of hourly temperature</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="chart bg-white-1 text-center">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
