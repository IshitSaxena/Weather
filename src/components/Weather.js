// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./weather.css";
// import bg from '../images/bg.png';
// import HourlySection from "./HourlySection";
// import TodayWeatherDetails from "./TodayWeatherDetails";
// import WeeklyForecast from "./WeeklyForecast";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import RecentSearchSlider from "./RecentSearchSlider";
// import GallerySection from "./GallerySection";
// import GlobalWeather from "./GlobalWeather";

// export default function Weather(props) {
//     const [weather, setWeather] = useState(null);
//   const data = weather?.data;
//   const iconurl =
//     data && data.cod !== 404 && data.weather && data.weather.length > 0
//       ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
//       : null;

//   const [hourlyData, setHourlyData] = useState([]);
//   const [form, setForm] = useState({
//     city: "",
//     country: "",
//   });

//  const [recentCitiesData, setRecentCitiesData] = useState([]);
//   const handleCitySearch = async (city) => {
//     try {
//       const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
//         params: {
//           q: city,
//           units: "metric",
//           appid: "6dd65ebd36a60b3f9b05176d8c09bc29",
//         },
//       });

//       const newCityData = {
//         city: res.data.city.name,
//         hourly: res.data.list.slice(0, 8),
//       };

//       setRecentCitiesData((prev) => {
//         const filtered = prev.filter((c) => c.city !== newCityData.city);
//         return [newCityData, ...filtered].slice(0, 5);
//       });
//     } catch (error) {
//       console.error("Error fetching forecast:", error);
//     }
//   };


//   // const weatherIconMap = {
//   //   clear: "fa-sun",
//   //   clouds: "fa-cloud",
//   //   rain: "fa-cloud-showers-heavy",
//   //   snow: "fa-snowflake",
//   //   thunderstorm: "fa-bolt",
//   //   drizzle: "fa-cloud-rain",
//   //   mist: "fa-smog",
//   // };

//   //const iconKey = hourlyData.length > 0 ? hourlyData[0]?.weather?.[0]?.main?.toLowerCase() : null;
//   //const iconClass = iconKey && weatherIconMap[iconKey] ? weatherIconMap[iconKey] : "fa-question";

//   const APIKEY = "6dd65ebd36a60b3f9b05176d8c09bc29";

//   // async function weatherData(e) {
//   //   e.preventDefault();
//   //   if (form.city === "") {
//   //     alert("Add values");
//   //   } else {
//   //     const data = await fetch(
//   //       `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
//   //     )
//   //       .then((res) => res.json())
//   //       .then((data) => data);

//   //     setWeather({ data: data });
//   //   }
//   // }

//   async function weatherData(e) {
//   e.preventDefault();
//   if (form.city === "") {
//     alert("Add values");
//   } else {
//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
//       );
//       const data = await res.json();
//       setWeather({ data: data });

//       // 🛠️ ADD THIS LINE TO UPDATE RECENT SEARCHES
//       handleCitySearch(form.city);
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   }

//   const weatherData = async (e) => {
//   e.preventDefault();
//   if (form.city === "") {
//     alert("Add values");
//   } else {
//     try {
//       // Current weather
//       const data = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
//       ).then((res) => res.json());

//       setWeather({ data: data });

//       // Hourly forecast
//       const forecastRes = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&units=metric&appid=${APIKEY}`
//       );

//       setHourlyData(forecastRes.data.list.slice(0, 8)); // update hourly

//       // Update recent cities
//       const newCityData = {
//         city: forecastRes.data.city.name,
//         hourly: forecastRes.data.list.slice(0, 8),
//       };

//       setRecentCitiesData((prev) => {
//         const filtered = prev.filter((c) => c.city !== newCityData.city);
//         return [newCityData, ...filtered].slice(0, 5);
//       });

//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   }
// };

// }


//   const handleChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     if (name === "city") {
//       setForm({ ...form, city: value });
//     }
//     if (name === "country") {
//       setForm({ ...form, country: value });
//     }
//   };


//   const fetchHourlyData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast`,
//         {
//           params: {
//             lat: 23.0225, // your lat
//             lon: 72.5714, // your lon
//             units: "metric",
//             appid: "6dd65ebd36a60b3f9b05176d8c09bc29",
//           },
//         }
//       );
//       setHourlyData(response.data.list.slice(0, 8)); // next 8 intervals
//     } catch (error) {
//       console.error("Error fetching hourly weather data", error);
//     }
//   };

//   useEffect(() => {
//     fetchHourlyData();
//   }, []);

//   <HourlySection 
//   data={hourlyData} 
//   recentCitiesData={recentCitiesData} 
// />


// const searchedCities = recentCitiesData.map((item) => item.city);
// const [liveHourlyData, setLiveHourlyData] = useState([]);
// const [recentCities, setRecentCities] = useState([]);
// const [currentCityName, setCurrentCityName] = useState("");

// const handleSearch = async (city) => {
//   try {
//     const res = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=6dd65ebd36a60b3f9b05176d8c09bc29`
//     );

//     const hourly = res.data.list.slice(0, 8); // next 24 hrs at 3hr interval

//     setLiveHourlyData(hourly);
//     setCurrentCityName(res.data.city.name);

//     const newCityData = {
//       city: res.data.city.name,
//       hourly: hourly,
//     };

//     setRecentCities((prev) => {
//       const filtered = prev.filter((item) => item.city !== newCityData.city);
//       return [newCityData, ...filtered].slice(0, 5);
//     });

//   } catch (error) {
//     console.error("Error fetching hourly forecast:", error);
//   }
// };

// useEffect(() => {
//   if (recentCities.length > 0 && liveHourlyData.length === 0) {
//     setLiveHourlyData(recentCities[0].hourly);
//     setCurrentCityName(recentCities[0].city);
//   }
// }, [recentCities]);



//   return (
//     <div className="weather">



//       <section className="weather-banner-2"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           padding: "110px 0",
//           maxHeight: "800px",
//           color: "#898E8F",
//           // background: "#FAFBFF",
//           fontWeight: "400",
//           //backgroundColor: "#FAFBFF",
//           height: " 100%",
//           //  verticalAlign:" baseline",aaa
//         }}
//       >
//         <div className="container">
//           <div className="content">
//             <div className="row justify-content-between">
//               <div className="col-xl-8 col-lg-6 mb-lg-0 mb-4">
//                 <div className="text">
//                   <h5 className="fw-4 fs-23">Weather and Forecast </h5>
//                   <h2 className="fw-4 lh-120">Daily Weather Forecast <br /> Update News</h2>
//                   <p className="fs-19 fw-5 lh-150 bottom-space pt-0">Get the latest weather forecast for today with up-to-date <br /> information on temperature, precipitation, and more.</p>
//                   <div className="col-xl-9">
//                     <form autoComplete="off" onSubmit={weatherData}>

//                       <div className="input-group">
//                         <div className="autocomplete">
//                           <input id="myInput" type="text" onChange={(e) => handleChange(e)}
//                             className="form-control" name="city" placeholder="Search for city..." />
//                           &nbsp; &nbsp; &nbsp;&nbsp;
//                           <button type="submit"><i className="fal fa-search"></i></button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-lg-6 ">
//                 <div className="detail p-100 text-center">
//                   <div className="d-flex align-items-center justify-content-between mb-32 city-detail">
//                     <h4 className="fw-6 color-dark m-0">London</h4>
//                     <img src="/icons/sun-icon.png" alt="" />
//                   </div>
//                   <h5 className="fw-5 fs-23 color-dark">Today, 04 April</h5>
//                   <h2 className="fw-6 fs-95 lh-120 color-dark m-0">24 <b>°</b></h2>
//                   <p className="fw-6 mb-32 color-dark">Sunny</p>
//                   <div className="d-flex align-items-center justify-content-center mb-24">
//                     <span className="color-dark text-end">19 km/h</span>
//                     <span className="color-dark text-start">Wind</span>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-center">
//                     <span className="color-dark text-end">Hum</span>
//                     <span className="color-dark text-start">22%</span>
//                   </div>
//                   {data && data.cod !== 404 ? (
//                     <React.Fragment>
//                       <div className="mainWeatherDetails">
//                         <div className="maincard">
//                           <span className="cardtitle">
//                             {data.name}, {data.sys.country}. Weather
//                           </span>
//                           <span className="cardsubtitle">
//                             As of {new Date().toLocaleTimeString()}
//                           </span>
//                           <h1>
//                             {Math.floor(data.main.temp - 273.15)}
//                             <sup>o</sup>
//                           </h1>
//                           <span className="weather-main">{data.weather[0].main}</span>
//                           <img className="weather-icon" src={iconurl} alt="" />
//                           <span className="weather-description">
//                             {data.weather[0].description}
//                           </span>
//                         </div>

//                         <div className="weatherdetails">
//                           <div className="section1">
//                             <table>
//                               <tbody>
//                                 <tr>
//                                   <td><h4>High/Low</h4></td>
//                                   <td>
//                                     <span>
//                                       {Math.floor(data.main.temp_max - 273.15)}/
//                                       {Math.floor(data.main.temp_min - 273.15)}
//                                     </span>
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td><h4>Humidity</h4></td>
//                                   <td><span>{data.main.humidity} %</span></td>
//                                 </tr>
//                                 <tr>
//                                   <td><h4>Pressure</h4></td>
//                                   <td><span>{data.main.pressure} hPa</span></td>
//                                 </tr>
//                                 <tr>
//                                   <td><h4>Visibility</h4></td>
//                                   <td><span>{data.visibility / 1000} Km</span></td>
//                                 </tr>
//                               </tbody>
//                             </table>
//                           </div>

//                           <div className="section2">
//                             <table>
//                               <tbody>
//                                 <tr>
//                                   <td><h4>Wind</h4></td>
//                                   <td>
//                                     <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td><h4>Wind Direction</h4></td>
//                                   <td>
//                                     <span>{data.wind.deg}<sup>o</sup> deg</span>
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td><h4>Sunrise</h4></td>
//                                   <td>
//                                     <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td><h4>Sunset</h4></td>
//                                   <td>
//                                     <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </table>
//                           </div>
//                         </div>
//                       </div>
//                     </React.Fragment>
//                   ) : (
//                     <p className="text-center">Today's weather</p>
//                   )}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     <HourlySection
//   data={liveHourlyData}
//   recentCitiesData={recentCities}
//   city={currentCityName}
// />



//       {/* <TodayWeatherDetails weatherData={data} hourlyData={hourlyData} /> */}
//     {data && <TodayWeatherDetails weatherData={data} hourlyData={hourlyData} />}


//       {/* <WeeklyForecast lat={23.0225} lon={72.5714} /> */}
//       <WeeklyForecast lat={weather?.data?.coord?.lat} lon={weather?.data?.coord?.lon} />
//       <RecentSearchSlider searchedCities={searchedCities} />

//       <GlobalWeather />
//       <GallerySection/>

//     </div >



//   );


// }


// Final corrected and cleaned up Weather.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weather.css";
import backgrd from '../images/backgrd.png';
import Header from "./Header";
import HourlySection from "./HourlySection";
import TodayWeatherDetails from "./TodayWeatherDetails";
import WeeklyForecast from "./WeeklyForecast";
import '@fortawesome/fontawesome-free/css/all.min.css';
import RecentSearchSlider from "./RecentSearchSlider";
import GallerySection from "./GallerySection";
import GlobalWeather from "./GlobalWeather";
import DisplayWeather from "./DisplayWeather"
import TemperatureChart from "./TemperatureChart"

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const data = weather?.data;
  const iconurl =
    data && data.cod !== 404 && data.weather?.length > 0
      ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      : null;

  const [form, setForm] = useState({ city: "", country: "" });
  const [liveHourlyData, setLiveHourlyData] = useState([]);
  const [recentCities, setRecentCities] = useState([]);
  const [currentCityName, setCurrentCityName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India"); // default
  const APIKEY = "6dd65ebd36a60b3f9b05176d8c09bc29";

  const handleSearch = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKEY}`
      );
      const hourly = res.data.list.slice(0, 8);
      setLiveHourlyData(hourly);
      localStorage.setItem("hourly", JSON.stringify(hourly));
      setCurrentCityName(res.data.city.name);

      const newCityData = {
        city: res.data.city.name,
        hourly: hourly,
      };

      setRecentCities((prev) => {
        const filtered = prev.filter((c) => c.city !== newCityData.city);
        const updatedList = [newCityData, ...filtered].slice(0, 5); // ✅ define it
        localStorage.setItem("recentCities", JSON.stringify(updatedList)); // ✅ use it
        return updatedList;
      });

    } catch (error) {
      console.error("Error fetching hourly forecast:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const weatherData = async (e) => {
    e.preventDefault();
    if (!form.city) return alert("Add city");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      );
      const data = await res.json();
      setWeather({ data });
      localStorage.setItem("currentWeather", JSON.stringify(data));

      await handleSearch(form.city);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    if (recentCities.length > 0 && liveHourlyData.length === 0) {
      setLiveHourlyData(recentCities[0].hourly);
      setCurrentCityName(recentCities[0].city);
    }
  }, [recentCities]);

  useEffect(() => {
    if (recentCities.length > 0) {
      localStorage.setItem("recentCities", JSON.stringify(recentCities));
      localStorage.setItem("lastCity", currentCityName);
    }
  }, [recentCities, currentCityName]);

  useEffect(() => {
    const storedCities = localStorage.getItem("recentCities");
    const storedCityName = localStorage.getItem("lastCity");

    if (storedCities) {
      const parsedCities = JSON.parse(storedCities);
      setRecentCities(parsedCities);

      if (storedCityName) {
        setCurrentCityName(storedCityName);
        setLiveHourlyData(parsedCities[0]?.hourly || []);
      }
    }
  }, []);

  const searchedCities = recentCities.map((item) => item.city);

  const getWeatherIcon = (hourData) => {
    const condition = hourData.weather[0].main.toLowerCase();
    switch (condition) {
      case "clear":
        return "sun.png";
      case "cloud":
        return "cloudy.png";
      case "rain":
        return "rain.png";
      case "snow":
        return "snowy.png";
      case "thunderstorm":
        return "storm.png";
      default:
        return "default-icon.png";
    }
  };

  return (
    <div className="weather">
      <Header />
      <section id="home" className="weather-banner-2"
        style={{
          backgroundImage: `url(${backgrd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "110px 0",
          maxHeight: "800px",
          color: "#898E8F",
          // background: "#FAFBFF",
          fontWeight: "400",
          //backgroundColor: "#FAFBFF",
          height: " 100%",
          //  verticalAlign:" baseline",aaa
        }}
      >
        <div className="container">
          <div className="content">
            <div className="row justify-content-between">
              <div className="col-xl-8 col-lg-6 mb-lg-0 mb-4">
                <div className="text">
                  <h5 className="fw-4 fs-23">Weather and Forecast </h5>
                  <h2 className="fw-4 lh-120">Daily Weather Forecast <br /> Update News</h2>
                  <p className="fs-19 fw-5 lh-150 bottom-space pt-0">Get the latest weather forecast for today with up-to-date <br /> information on temperature, precipitation, and more.</p>
                  <div className="col-xl-9">
                    <form autoComplete="off" onSubmit={weatherData}>

                      <div className="input-group">
                        <div className="autocomplete">
                          <input id="myInput" type="text" onChange={(e) => handleChange(e)}
                            className="form-control" name="city" placeholder="Search for city..." />
                          &nbsp; &nbsp; &nbsp;&nbsp;
                          <button type="submit"><img className="search-icon" src="./icons/search.png"/></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 ">
                <div className="detail p-100 text-center">
                  {/* <div className="weather-prev-details">
                    <div className="d-flex align-items-center justify-content-between mb-32 city-detail">
                      <h4 className="fw-6 color-dark m-0">London</h4>
                      <img src="/icons/sun-icon.png" alt="" />
                    </div>
                    <h5 className="fw-5 fs-23 color-dark">Today, 04 April</h5>
                    <h2 className="fw-6 fs-95 lh-120 color-dark m-0">24 <b>°</b></h2>
                    <p className="fw-6 mb-32 color-dark">Sunny</p>
                    <div className="d-flex align-items-center justify-content-center mb-24">
                      <span className="color-dark text-end">19 km/h</span>
                      <span className="color-dark text-start">Wind</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="color-dark text-end">Hum</span>
                      <span className="color-dark text-start">22%</span>
                    </div>
                  </div> */}
                  <div className="weather-prev-details">
                    {recentCities.length > 0 ? (
                      <>
                        <div className="d-flex align-items-center justify-content-between mb-32 city-detail">
                          <h4 className="fw-6 color-dark m-0">{recentCities[0].city}</h4>
                          <img className="gif_icon" src={`/icons/${getWeatherIcon(recentCities[0].hourly[0])}`} alt="icon" />
                        </div>
                        <h5 className="fw-5 fs-23 color-dark">
                          Today, {new Date().toLocaleDateString("en-GB", { day: '2-digit', month: 'long' })}
                        </h5>
                        <h2 className="fw-6 fs-95 lh-120 color-dark m-0">
                          {Math.round(recentCities[0].hourly[0].main.temp)} <b>°</b>
                        </h2>
                        <p className="fw-6 mb-32 color-dark">
                          {recentCities[0].hourly[0].weather[0].main}
                        </p>
                        <div className="d-flex align-items-center justify-content-center mb-24">
                          <span className="color-dark text-end">
                            {recentCities[0].hourly[0].wind.speed} km/h
                          </span>
                          <span className="color-dark text-start">Wind</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="color-dark text-end">Hum</span>
                          <span className="color-dark text-start">
                            {recentCities[0].hourly[0].main.humidity}%
                          </span>
                        </div>
                      </>
                    ) : (
                      <p className="text-center">No previous search yet...</p>
                    )}
                  </div>
                  <DisplayWeather data={data} country={selectedCountry} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <HourlySection
        data={liveHourlyData}
        recentCitiesData={recentCities}
        city={currentCityName}
      />

      {data && <TodayWeatherDetails weatherData={data} hourlyData={liveHourlyData} />}
      <TemperatureChart data={liveHourlyData}  hourlyData={liveHourlyData}  />
      <WeeklyForecast lat={data?.coord?.lat} lon={data?.coord?.lon} />
      <RecentSearchSlider searchedCities={searchedCities} />
      <GlobalWeather onSelectCountry={setSelectedCountry} />
      <GallerySection recentCities={recentCities} />
      

    </div>
  );
}
