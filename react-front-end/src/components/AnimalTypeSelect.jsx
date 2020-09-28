import React from 'react';

export default function AnimalTypeSelect () {
  return (
    <div id="animal-type-select" class="ui selection dropdown">
      <input type="hidden" name="pet_type" />
      <i class="dropdown icon"></i>
      <div class="default text">Pet Type</div>
      <div class="menu">
        <div class="item" data-value="bird">Bird</div>
        <div class="item" data-value="cat">Cat</div>
        <div class="item" data-value="dog">Dog</div>
        <div class="item" data-value="fish">Fish</div>
        <div class="item" data-value="reptile">Reptile</div>
        <div class="item" data-value="rodent">Rodent</div>
      </div>
    </div>
  )
}