import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Components/Footer";
import SearchEngine from "./Components/SearchEngine";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Weather defaultCity="London" />
    <SearchEngine />
    <Footer />
  </React.StrictMode>,
  rootElement
);
