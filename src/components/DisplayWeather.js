import React from "react";
import "./displayweather.css";
import { useEffect, useState } from "react";

function DisplayWeather({ data }) {
  const iconurl =
    data && data.cod !== 404 && data.weather?.length > 0
      ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      : null;

       const [weatherData, setWeatherData] = useState(null);

 

  return (
    <div className="displayweather">
      {data && data.cod !== 404 ? (
        <React.Fragment>
          <div className="mainWeatherDetails">
            <div className="maincard">
              <span className="cardtitle">
                {data.name}, {data.sys.country} Weather
              </span>
              <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
              </span>
              <span className="weather-main">{data.weather[0].main}</span>
              <img className="weather-icon" src={iconurl} alt="" />
              <span className="weather-description">
                {data.weather[0].description}
              </span>
            </div>

            <div className="weatherdetails">
              <div className="section1">
                <table>
                  <tbody>
                    <tr>
                      <td><h4>High/Low</h4></td>
                      <td>
                        <span>
                          {Math.floor(data.main.temp_max - 273.15)}/
                          {Math.floor(data.main.temp_min - 273.15)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td><h4>Humidity</h4></td>
                      <td><span>{data.main.humidity} %</span></td>
                    </tr>
                    <tr>
                      <td><h4>Pressure</h4></td>
                      <td><span>{data.main.pressure} hPa</span></td>
                    </tr>
                    <tr>
                      <td><h4>Visibility</h4></td>
                      <td><span>{data.visibility / 1000} Km</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="section2">
                <table>
                  <tbody>
                    <tr>
                      <td><h4>Wind</h4></td>
                      <td>
                        <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                      </td>
                    </tr>
                    <tr>
                      <td><h4>Wind Direction</h4></td>
                      <td>
                        <span>{data.wind.deg}<sup>o</sup> deg</span>
                      </td>
                    </tr>
                    <tr>
                      <td><h4>Sunrise</h4></td>
                      <td>
                        <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                      </td>
                    </tr>
                    <tr>
                      <td><h4>Sunset</h4></td>
                      <td>
                        <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <p className="text-center">Today's weather</p>
      )}
    </div>
  );
}

export default DisplayWeather;
