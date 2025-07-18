// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './hourly.css';
// import { useState ,useMemo} from "react";
// import axios from "axios";

// // const hourlyData = [
// //   {
// //     icon: "fas fa-cloud-showers",
// //     temp: "12°",
// //     label: "Rain",
// //     humidity: "2%",
// //     wind: "2/km",
// //     time: "Now"
// //   },
// //   {
// //     icon: "fas fa-moon",
// //     temp: "14°",
// //     label: "Moon",
// //     humidity: "3%",
// //     wind: "2/km",
// //     time: "01 am"
// //   },
// //   {
// //     icon: "fas fa-cloud",
// //     temp: "18°",
// //     label: "Cloud",
// //     humidity: "4%",
// //     wind: "2/km",
// //     time: "02 am"
// //   },
// //   {
// //     icon: "fas fa-thunderstorm",
// //     temp: "20°",
// //     label: "Lightning",
// //     humidity: "3%",
// //     wind: "2/km",
// //     time: "03 am"
// //   },
// //   {
// //     icon: "fas fa-cloud-snow",
// //     temp: "22°",
// //     label: "Snow",
// //     humidity: "5%",
// //     wind: "2/km",
// //     time: "04 am"
// //   },
// //   {
// //     icon: "far fa-wind fa-flip-vertical",
// //     temp: "26°",
// //     label: "Wind",
// //     humidity: "2%",
// //     wind: "3/km",
// //     time: "05 am"
// //   },
// //   {
// //     icon: "fas fa-sun",
// //     temp: "14°",
// //     label: "Sun",
// //     humidity: "3%",
// //     wind: "4/km",
// //     time: "06 am"
// //   },
// //   {
// //     icon: "fas fa-sun",
// //     temp: "12°",
// //     label: "Sun",
// //     humidity: "2%",
// //     wind: "2/km",
// //     time: "07 am"
// //   }
// // ];

// // const HourlySlider = () => {
// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 5,
// //     slidesToScroll: 1,
// //     arrows: true,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: { slidesToShow: 4 }
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: { slidesToShow: 2 }
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: { slidesToShow: 1 }
// //       }
// //     ]
// //   };

// //   return (
// //     <section className="hourly pt-100">
// //       <div className="container">
// //         <div className="title text-center">
// //           <h2 className="fw-5 fs-40 lh-120 ls-5 color-dark mb-16">Hourly Update</h2>
// //           <p className="fw-4 fs-16 lh-160 ls-2 color-gray mb-48">
// //             The 'Recent Search Weather' section displays the latest weather information
// //             for the cities you have recently searched. Stay up-to-date with the
// //             weather conditions of your preferred cities with this section.
// //           </p>
// //         </div>
// //         <Slider {...settings}>
// //           {hourlyData.map((item, index) => (
// //             <div key={index} className="slider-block">
// //               <div className="content text-center">
// //                 <i className={`${item.icon} mb-8`}></i>
// //                 <p className="fs-28 fw-4 mb-1">{item.temp}</p>
// //                 <h2 className="fw-5 fs-19 mb-0">{item.label}</h2>
// //                 <div className="line"></div>
// //                 <div className="d-flex justify-content-center align-items-center mb-1">
// //                   <div className="weather-detail left-line">
// //                     <i className="fas fa-tint"></i>
// //                     <p className="fs-16 fw-4 lh-160 m-0">{item.humidity}</p>
// //                   </div>
// //                   <div className="weather-detail">
// //                     <i className="fal fa-wind fa-flip-vertical"></i>
// //                     <p className="fs-16 fw-4 lh-160 m-0">{item.wind}</p>
// //                   </div>
// //                 </div>
// //                 <h2 className="fw-4 fs-19 m-0">{item.time}</h2>
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </section>
// //   );
// // };


// const HourlySection = ({ data }) => {
//   const settings = {
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };




//   const [recentCitiesData, setRecentCitiesData] = useState([]);

//   const handleCitySearch = async (city) => {
//     const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
//       params: {
//         q: city,
//         units: "metric",
//         appid: "6dd65ebd36a60b3f9b05176d8c09bc29",
//       },
//     });

//     const newCityData = {
//       city: res.data.city.name,
//       hourly: res.data.list.slice(0, 8), // first 8 entries = next 24 hours (3-hour interval)
//     };

//     // Update recent search list (max 5 cities)
//     setRecentCitiesData(prev => {
//       const filtered = prev.filter(c => c.city !== newCityData.city);
//       return [newCityData, ...filtered].slice(0, 5);
//     });
//   };


//  return (
//   <section className="hourly pt-100">
//     <div className="container">
//       <div className="title text-center mb-4">
//         <h2>Hourly Update</h2>
//       </div>
//       <Slider {...settings}>
//         {data.map((hour, index) => {
//           const icon = hour.weather[0].main.toLowerCase();
//           const temp = Math.round(hour.main.temp);
//           const humidity = hour.main.humidity;
//           const wind = hour.wind.speed;
//           const time = new Date(hour.dt_txt).toLocaleTimeString("en-US", {
//             hour: "numeric",
//             hour12: true,
//           });

//           return (
//             <div className="slider-block" key={index}>
//               <div className="content text-center">
//                 <i className={`fas fa-${icon}`}></i>
//                 <p>{temp}°</p>
//                 <h2>{hour.weather[0].main}</h2>
//                 <div className="d-flex justify-content-center">
//                   <div className="weather-detail">
//                     <i className="fas fa-tint"></i>
//                     <p>{humidity}%</p>
//                   </div>
//                   <div className="weather-detail">
//                     <i className="fas fa-wind"></i>
//                     <p>{wind} km/h</p>
//                   </div>
//                 </div>
//                 <h2>{time}</h2>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   </section>
// );

// };

// export default HourlySection;



// import React, { useMemo } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './hourly.css';

// const HourlySection = ({ data, recentCitiesData, city }) => {
//   const settings = {
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//     ],
//   };

//   // Use current search data if available, else fallback to recent search
//   const hourlyWeather = useMemo(() => {
//     if (Array.isArray(data) && data.length > 0) {
//       return data;
//     } else if (Array.isArray(recentCitiesData) && recentCitiesData.length > 0) {
//       return recentCitiesData[0].hourly;
//     }
//     return [];
//   }, [data, recentCitiesData]);

//   // Determine current city name to display
//   const currentCity = city || (recentCitiesData?.[0]?.city ?? "Unknown City");

//   return (
//     <section className="hourly pt-100">
//       <div className="container">
//         <div className="title text-center mb-4">
//           <h2>Hourly Update - {currentCity}</h2>
//         </div>

//         {hourlyWeather.length === 0 ? (
//           <p className="text-center">No hourly data available yet...</p>
//         ) : (
//           <Slider {...settings}>
//             {hourlyWeather.map((hour, index) => {
//               const icon = hour.weather?.[0]?.main?.toLowerCase() || "cloud";
//               const temp = Math.round(hour.main?.temp ?? 0);
//               const humidity = hour.main?.humidity ?? "N/A";
//               const wind = hour.wind?.speed ?? "N/A";
//               const time = new Date(hour.dt_txt).toLocaleTimeString("en-US", {
//                 hour: "numeric",
//                 hour12: true,
//               });

//               return (
//                 <div className="slider-block" key={index}>
//                   <div className="content text-center">
//                     <i className={`fas fa-${icon}`}></i>
//                     <p>{temp}°</p>
//                     <h2>{hour.weather?.[0]?.main ?? "N/A"}</h2>
//                     <div className="d-flex justify-content-center">
//                       <div className="weather-detail">
//                         <i className="fas fa-tint"></i>
//                         <p>{humidity}%</p>
//                       </div>
//                       <div className="weather-detail">
//                         <i className="fas fa-wind"></i>
//                         <p>{wind} km/h</p>
//                       </div>
//                     </div>
//                     <h2>{time}</h2>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HourlySection;


import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hourly.css';

const HourlySection = ({ data, recentCitiesData, city }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return "sun"; // ☀️
      case "clouds":
        return "cloud"; // ☁️
      case "rain":
        return "cloud-showers-heavy"; // 🌧️
      case "drizzle":
        return "cloud-rain"; // 🌦️
      case "thunderstorm":
        return "bolt"; // ⚡
      case "snow":
        return "snowflake"; // ❄️
      case "mist":
      case "fog":
      case "haze":
        return "smog"; // 🌫️
      default:
        return "cloud"; // fallback
    }
  };

  const hourlyWeather = useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {
      return data;
    } else if (Array.isArray(recentCitiesData) && recentCitiesData.length > 0) {
      return recentCitiesData[0].hourly;
    }
    return [];
  }, [data, recentCitiesData]);

  const currentCity = city || (recentCitiesData?.[0]?.city ?? "Unknown City");

  return (
    <section id="hourly" className="hourly pt-100">
      <div className="container">
        <div className="title text-center mb-4">
          <h2>Hourly Update - {currentCity}</h2>
        </div>

        {hourlyWeather.length === 0 ? (
          <p className="text-center">No hourly data available yet...</p>
        ) : (
          // <Slider {...settings}>
          //   {hourlyWeather.map((hour, index) => {
          //     const condition = hour.weather?.[0]?.main ?? "Clouds";
          //     const icon = getWeatherIcon(condition);
          //     const temp = Math.round(hour.main?.temp ?? 0);
          //     const humidity = hour.main?.humidity ?? "N/A";
          //     const wind = hour.wind?.speed ?? "N/A";
          //     const time = new Date(hour.dt_txt).toLocaleTimeString("en-US", {
          //       hour: "numeric",
          //       hour12: true,
          //     });

          //     return (
          //       <div className="slider-block" key={index}>
          //         <div className="content text-center">
          //           <i className={`fas fa-${icon} fa-2x mb-2`}></i>
          //           <p>{temp}°</p>
          //           <h2>{condition}</h2>
          //           <div className="d-flex justify-content-center">
          //             <div className="weather-detail">
          //               <i className="fas fa-tint"></i>
          //               <p>{humidity}%</p>
          //             </div>
          //             <div className="weather-detail">
          //               <i className="fas fa-wind"></i>
          //               <p>{wind} km/h</p>
          //             </div>
          //           </div>
          //           <h2>{time}</h2>
          //         </div>
          //       </div>
          //     );
          //   })}
          // </Slider>

          <Slider {...settings}>
  {hourlyWeather.map((hour, index) => {
    const condition = hour.weather?.[0]?.main ?? "Clouds";
    const icon = getWeatherIcon(condition);
    const temp = Math.round(hour.main?.temp ?? 0);
    const humidity = hour.main?.humidity ?? "N/A";
    const wind = hour.wind?.speed ?? "N/A";
    const time = new Date(hour.dt_txt).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });

    return (
      <div className="slider-block" key={index}>
        <div className="content text-center">
          <i className={`fas fa-${icon} fa-2x`}></i>
          <p>{temp}°</p>
          <h2>{condition}</h2>
          <div className="d-flex justify-content-center">
            <div className="weather-detail">
              <i className="fas fa-tint"></i>
              <p>{humidity}%</p>
            </div>
            <div className="weather-detail">
              <i className="fas fa-wind"></i>
              <p>{wind} km/h</p>
            </div>
          </div>
          <h2>{time}</h2>
        </div>
      </div>
    );
  })}
</Slider>

        )}
      </div>
    </section>
  );
};

export default HourlySection;

