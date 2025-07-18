// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   Filler
// } from "chart.js";

// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);


// export default function TodayWeatherDetails({ weatherData, hourlyData }) {

//   if (!weatherData || !hourlyData){
//     console.warn("⛔ Skipping render: Missing weatherData or hourlyData");
//     return null;
//   } 

//   const chartData = {
//     labels: hourlyData.map(hour =>
//       new Date(hour.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

//     ),
//     datasets: [
//       {
//         label: "Temp (°C)",
//         data: hourlyData.map(hour => hour.main.temp),
//         fill: true,
//         borderColor: "#ffb347",
//         backgroundColor: "rgba(255, 179, 71, 0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: true },
//       tooltip: { mode: 'index', intersect: false },
//     },
//     scales: {
//       x: { grid: { display: false } },
//       y: {
//         beginAtZero: false,
//         ticks: { callback: (value) => `${value}°C` }
//       },
//     },
//   };

//   return (
//     <section className="toady-detail pt-100 ">
//       <div className="container">
//         <div className="title text-center">
//           <h2 className="fw-5 fs-40 lh-120 ls-5 color-dark mb-16">Today Weather Details</h2>
//           <p className="fw-4 fs-16 lh-160 ls-2 color-gray mb-48">
//             This chart displays upcoming hourly temperature data.
//           </p>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-md-10">
//             <div className="detail bg-white-1 text-center">
//               <Line data={chartData} options={chartOptions} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   Filler
// } from "chart.js";

// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

// export default function TodayWeatherDetails({ weatherData, hourlyData }) {
//   const [data, setData] = useState(null);
//   const [hourly, setHourly] = useState([]);

//   useEffect(() => {
//     if (weatherData) {
//       setData(weatherData);
//       localStorage.setItem("currentWeather", JSON.stringify(weatherData));
//     } else {
//       const savedWeather = localStorage.getItem("currentWeather");
//       if (savedWeather) setData(JSON.parse(savedWeather));
//     }

//     if (hourlyData && hourlyData.length > 0) {
//       setHourly(hourlyData);
//       localStorage.setItem("hourly", JSON.stringify(hourlyData));
//     } else {
//       const savedHourly = localStorage.getItem("hourly");
//       if (savedHourly) setHourly(JSON.parse(savedHourly));
//     }
//   }, [weatherData, hourlyData]);

//   if (!data || !hourly || hourly.length === 0) {
//     console.warn("⛔ Skipping chart render: Data missing");
//     return null;
//   }

//   // const chartData = {
//   //   labels: hourly.map(hour =>
//   //     new Date(hour.dt_txt || hour.dt * 1000).toLocaleTimeString([], {
//   //       hour: "2-digit", minute: "2-digit"
//   //     })
//   //   ),
//   //   datasets: [
//   //     {
//   //       label: "Temp (°C)",
//   //       data: hourly.map(hour => hour.main.temp),
//   //       fill: true,
//   //       borderColor: "#ffb347",
//   //       backgroundColor: "rgba(255, 179, 71, 0.2)",
//   //       tension: 0.4,
//   //     },
//   //   ],
//   // };

//   // const chartOptions = {
//   //   responsive: true,
//   //   plugins: {
//   //     legend: { display: true },
//   //     tooltip: { mode: 'index', intersect: false },
//   //   },
//   //   scales: {
//   //     x: { grid: { display: false } },
//   //     y: {
//   //       beginAtZero: false,
//   //       ticks: { callback: (value) => `${value}°C` }
//   //     },
//   //   },
//   // };

//   return (
//     <section className="toady-detail pt-100">
//       <div className="container">
//         <div className="title text-center">
//           <h2 className="globalSec-heading">Today Weather Details</h2>
//           <p className="globalSec-text">
//             This chart displays upcoming hourly temperature data.
//           </p>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-md-10">
//             <div className="detail bg-white-1 text-center">
//               <Line data={chartData} options={chartOptions} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect } from "react";

export default function TodayWeatherDetails({ weatherData, hourlyData }) {
  useEffect(() => {
    if (weatherData) {
      localStorage.setItem("currentWeather", JSON.stringify(weatherData));
    }

    if (hourlyData && hourlyData.length > 0) {
      localStorage.setItem("hourly", JSON.stringify(hourlyData));
    }
  }, [weatherData, hourlyData]);

  return null; // No need to display anything here
}
