import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  // ✅ Scroll to section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img alt="logo" src={isDark ? "/icons/logo.png" : "/icns/logo.png"} />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hourly" onClick={() => scrollToSection("hourly")}>hourly</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#weekly" onClick={() => scrollToSection("weekly")}>Weekly</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pictures" onClick={() => scrollToSection("pictures")}>Pictures</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#global" onClick={() => scrollToSection("global")}>Global</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
              </li>

              <li className="nav-item ms-3">
                <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                  {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  );
}
