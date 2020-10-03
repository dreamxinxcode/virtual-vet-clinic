import React from "react";
import "./CityInput.scss";

export default function CityInput(props) {
  return (
    <div id="city-input" className="ui icon input">
      <input
        type="text"
        placeholder="Search city..."
        onChange={e => props.setClinicCity(e.target.value)}
      />
      <i className="search icon"></i>
    </div>
  );
}
