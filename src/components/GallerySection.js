// RecentCitiesGallery.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecentCitiesGallery({ recentCities }) {
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await Promise.all(
        recentCities.map(city =>
          axios.get("https://api.unsplash.com/search/photos", {
            params: {
              query: `${city.city} ${city.hourly[0].weather[0].main}`,
              per_page: 1,
            },
            headers: { Authorization: "Client-ID Sm4TFkt3UVPKE_KWKSkPkFf78fR9qZCCAOBqPmE0r30" }
          })
        )
      );
      const map = {};
      res.forEach((r, i) => map[recentCities[i].city] = r.data.results[0]?.urls.regular);
      setPhotos(map);
    };
    if (recentCities?.length) fetchPhotos();
  }, [recentCities]);

  return (
    <section id="pictures" className="gallery-2 pt-100">
      <div className="container">
        <div className="title text-center">
          <h2 className="globalSec-heading">Weather in Pictures</h2>
          <p className="globalSec-text">Live views from your recent cities based on current weather 🌤️</p>
        </div>
        <div className="row">
          {recentCities.length ? recentCities.map((cityData, i) => {
            const city = cityData.city;
            const imgUrl = photos[city];
            const condition = cityData.hourly[0].weather[0].main;
            return (
              <div key={city} className="col-lg-4 col-md-6 mb-4">
                <div className="pic-card" style={{ backgroundImage: `url(${imgUrl || '/fallback.jpg'})` }}>
                  <div className="overlay">
                    <h5>{city}</h5>
                    <p>{condition}</p>
                  </div>
                </div>
              </div>
            );
          }) : (
            <p className="text-center">No recent weather pics yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
