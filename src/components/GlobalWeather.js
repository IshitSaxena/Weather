import React from "react";
import { Link } from "react-router-dom"; // since you're using routing
import "./globalWeather.css"; // your custom styles here
import "./gallery.css"; // your custom styles here

const countries = [
  { name: "India", flag: "/flag/India.png" },
  { name: "Germany", flag: "/flag/germany.png" },
  { name: "Pakistan", flag: "/flag/pakistan.png" },
  { name: "Spain", flag: "/flag/spain.png" },
  { name: "Canada", flag: "/flag/canada.png" },
  { name: "Turkey", flag: "/flag/turkey.png" },
  { name: "Australia", flag: "/flag/australia.png" },
  { name: "Vietnam", flag: "/flag/vietnam.png" },
  { name: "USA", flag: "/flag/united-states.png" },
  { name: "Poland", flag: "/flag/poland.png" },
  { name: "UK", flag: "/flag/united-kingdom.png" },
  { name: "Denmark", flag: "/flag/denmark.png" },
];

// export default function GlobalWeather() {
//   return (
//     <section  id="global" className="global pt-100">
//       <div className="container">
//         <div className="title text-center">
//           <h2 className="globalSec-heading">Global Weather Outlook</h2>
//           <p className="globalSec-text">
//             Global Weather Outlook provides a forecast for various regions worldwide. Stay informed about weather <br />
//             conditions in different parts of the world.
//           </p>
//         </div>
//         <div className="row">
//           {countries.map((country, index) => (
//             <div
//               key={index}
//               className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"
//             >
//               <Link to="/map" className="content text-center">
//                 <img src={country.flag} alt={country.name} />
//                 <h5>{country.name}</h5>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function GlobalWeather({ onSelectCountry }) {
  return (
    <section id="global" className="global pt-100">
      <div className="container">
        <div className="title text-center">
          <h2 className="globalSec-heading">Global Weather Outlook</h2>
          <p className="globalSec-text">
            Global Weather Outlook provides a forecast for various regions worldwide.
            Stay informed about weather <br />
            conditions in different parts of the world.
          </p>
        </div>
        <div className="row">
          {countries.map((country, index) => (
            <div
              key={index}
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"
              onClick={() => {
                onSelectCountry(country.name); // 🔥 sets selected country
                window.scrollTo({ top: 0, behavior: "smooth" }); // 🚀 scrolls to top
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="content text-center">
                <img src={country.flag} alt={country.name} />
                <h5>{country.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

