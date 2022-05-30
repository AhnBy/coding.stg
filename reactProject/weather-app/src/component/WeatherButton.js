import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, handleCityChange }) => {
    console.log("cities?" , cities);
  return (
    <div class="menu-container">
      <Button
        variant={`${setCity == "" ? "danger" : "warning"}`}
        onClick={() => handleCityChange("")}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          variant={`${setCity == city ? "danger" : "warning"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton