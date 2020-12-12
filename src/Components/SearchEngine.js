import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function newCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <form>
      <input type="Search" placeholder="Type city..." onChange={newCity} />
      <input type="Submit" value="search" />
      <br />
      <strong> It is 19°C in {city}</strong>
    </form>
  );
}
