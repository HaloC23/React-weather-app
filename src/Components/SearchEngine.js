import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 19°C in ${city}`);
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Type city..." onChange={newCity} />
        <input type="Submit" value="search" readOnly />
      </form>
      <strong> {message}</strong>
    </div>
  );
}
