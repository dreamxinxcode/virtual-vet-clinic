import React from 'react';
import './CityInput.scss';

export default function CityInput() {
  return (
    <div class="ui search">
    <div class="ui icon input">
      <input class="prompt" type="text" placeholder="Search for a clinic..."/>
      <i class="search icon"></i>
    </div>
    <div class="results"></div>
    </div>
  )
}