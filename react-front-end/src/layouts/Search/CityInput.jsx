import React from 'react';
import './CityInput.scss';

export default function CityInput() {
  return (
    <div id="city-input" class="ui icon input">
      <input type="text" placeholder="Search city..." />
      <i class="search icon"></i>
    </div>
  )
}