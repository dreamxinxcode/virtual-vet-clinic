import React from "react";
import "./AnimalTypeSelect.scss";

const DropdownExampleSelection = props => (
  <select
    className="select-animal"
    name="cars"
    id="animals"
    onChange={e => props.setAnimalType(e.target.value)}
  >
    <option value="" disabled selected>
      Select an animal type...
    </option>
    <option value="Bird">Bird</option>
    <option value="Cat">Cat</option>
    <option value="Dog">Dog</option>
    <option value="Fish">Fish</option>
    <option value="Reptile">Reptile</option>
  </select>
);

export default DropdownExampleSelection;
