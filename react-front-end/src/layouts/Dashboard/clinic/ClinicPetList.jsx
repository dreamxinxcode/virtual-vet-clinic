import React, { useState } from "react";
import axios from "axios";

const ClinicPetList = () => {
  const [pets, setPets] = useState([]);
  
  axios.get('/api/pets')
  .then(res => {
    setPets(res.data.pets) // maybe change
  })

  return (
    <div className="dashboard-card">
      <h2 class="ui header dashboard-header">
        <i aria-hidden="true" class="paw icon"></i>
        <div class="content">
          Patient Pets List<div class="sub header dashboard-header">See a list of animals you visit</div>
        </div>
      </h2>
      <table class="ui striped table">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet =>
          <tr>
            <td>{pet.name}</td>
            <td>{pet.age} years</td>
            <td>{pet.gender}</td>
            <td>{pet.weight} lbs</td>
            <td>{pet.pet_type}</td>
            <td>{pet.breed}</td>
            <td>{pet.owner_name}</td>
          </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicPetList;
