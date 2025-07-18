import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Weather />
     
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
     
  </BrowserRouter>
);


export default App;
