import React from "react";
import ReactDOM from "react-dom";
import Weather from ".Weather.js";
import App from "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
