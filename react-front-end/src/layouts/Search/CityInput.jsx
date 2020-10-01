import React from "react";
import "./CityInput.scss";

export default function CityInput() {
  return (
    <div id="city-input" className="ui icon input">
      <input type="text" placeholder="Search city..." />
      <i className="search icon"></i>
    </div>
  );
}
