import React, { useEffect, useState } from "react";
import axios from "axios";
import './WeeklyForecast.css';

const WeeklyForecast = ({ lat, lon }) => {
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Store and retrieve from localStorage
  useEffect(() => {
    const storedLat = localStorage.getItem("lastLat");
    const storedLon = localStorage.getItem("lastLon");

    const finalLat = lat || storedLat;
    const finalLon = lon || storedLon;

    if (!finalLat || !finalLon) {
      setLoading(false);
      return;
    }

    // Save to localStorage if new search
    if (lat && lon) {
      localStorage.setItem("lastLat", lat);
      localStorage.setItem("lastLon", lon);
    }

    async function fetchForecast() {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            lat: finalLat,
            lon: finalLon,
            units: "metric",
            appid: "6dd65ebd36a60b3f9b05176d8c09bc29",
          },
        });

        const grouped = groupByDay(res.data.list);
        setDailyData(grouped);
      } catch (err) {
        console.error("Error fetching weekly forecast:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchForecast();
  }, [lat, lon]);

  const groupByDay = (data) => {
    const days = {};
    data.forEach((item) => {
      const date = new Date(item.dt_txt).toLocaleDateString("en-US", {
        weekday: "short",
      });

      if (!days[date]) days[date] = [];
      days[date].push(item);
    });

    return Object.entries(days).slice(0, 7).map(([day, entries]) => {
      const temps = entries.map((e) => e.main.temp);
      const min = Math.min(...temps);
      const max = Math.max(...temps);
      const icon = entries[0].weather[0].icon;
      const condition = entries[0].weather[0].main;

      return { day, min, max, icon, condition };
    });
  };

  const getWeatherEmoji = (condition) => {
    switch (condition) {
      case 'Clouds': return '☁️';
      case 'Rain': return '🌧️';
      case 'Clear': return '☀️';
      case 'Snow': return '❄️';
      case 'Thunderstorm': return '⛈️';
      case 'Drizzle': return '🌦️';
      case 'Mist':
      case 'Fog':
      case 'Haze': return '🌫️';
      default: return '🌡️';
    }
  };

  return (
    <section id="weekly" className="wea_weekly_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wea_heading_wrapper wea_weekly_head">
              <h3>Weekly Weather Forecast</h3>
              <p>Here’s the outlook for the next 7 days.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="wea_weekly_weather">
              {!loading && dailyData.length === 0 && (
                <p>No forecast data available.</p>
              )}
              {dailyData.map((day, index) => (
                <div className="wea_commonday" key={index}>
                  <h4>{day.day}</h4>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                    alt={day.condition}
                  />
                  <p className="condition-text">
                    {getWeatherEmoji(day.condition)} {day.condition}
                  </p>
                  <h6>{Math.round(day.max)}° / {Math.round(day.min)}°</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyForecast;
