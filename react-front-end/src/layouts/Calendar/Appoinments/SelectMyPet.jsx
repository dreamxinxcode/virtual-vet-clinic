import React from "react";
import "./SelectMyPet.scss";

const SelectMyPet = (props) => {
  const values = props.petdetails.map((pet) => {
    return <option value={pet.id}>{pet.name}</option>;
  });
  return (
    <select
      onChange={(e) => props.setPetID(Number(e.target.value))}
      name="typeID"
      id="myPetListItem"
    >
      <option value="" disabled selected>
        Select an animal type...
      </option>
      {values}
    </select>
  );
};

export default SelectMyPet;
