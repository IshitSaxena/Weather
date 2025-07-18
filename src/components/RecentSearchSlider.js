import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './recent.css';

const API_KEY = "6dd65ebd36a60b3f9b05176d8c09bc29";

export default function RecentSearchSlider({ searchedCities }) {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!searchedCities || searchedCities.length === 0) return;

      try {
        const requests = searchedCities.map((city) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
          )
        );
        const results = await Promise.all(requests);
        setWeatherData(results.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching recent search data:", error);
      }
    };

    fetchWeather();
  }, [searchedCities]);

  const getWeatherStyleClass = (main) => {
    switch (main.toLowerCase()) {
      case "rain": return "rain";
      case "clouds": return "cloudy";
      case "clear": return "sunny";
      case "snow": return "snowy";
      case "thunderstorm": return "stormy";
      case "drizzle": return "drizzle";
      case "mist":
      case "fog":
      case "haze": return "foggy";
      default: return "default-weather";
    }
  };

  return (
    <section className="wea_recent_search bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 text-white">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold">Recent Search Weather</h3>
              <p className="text-lg opacity-90">
                Check the weather conditions of your recently searched cities.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            {weatherData.length === 0 ? (
              <p className="text-center text-white">No recent searches yet...</p>
            ) : (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={weatherData.length > 4}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {weatherData.map((weather, index) => {
                  const iconCode = weather.weather[0].icon;
                  const condition = weather.weather[0].main;
                  const className = getWeatherStyleClass(condition);

                  return (
                    <SwiperSlide key={index}>
                      <div
                        className={`rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur-md p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 ${className}`}
                      >
                        <img
                          src={`https://source.unsplash.com/300x200/?weather,${weather.name}`}
                          alt={weather.name}
                          className="rounded-xl w-full h-40 object-cover"
                        />
                        <div className="text-center mt-4">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {weather.name}
                          </h3>
                          <div className="flex items-center justify-center space-x-2 mt-2">
                            <img
                              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                              alt={condition}
                              className="w-10 h-10"
                            />
                            <h4 className="text-2xl font-bold text-gray-700">
                              {Math.round(weather.main.temp)}<sup>°</sup>
                            </h4>
                          </div>
                          <p className="text-gray-600 mt-1 text-sm">{condition}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
