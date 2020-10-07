import React, { useState } from "react";
import axios from "axios";
import "./ClinicPetList.scss";
import "../PetDetail";
import PetDetail from "../PetDetail";
import OwnersInfo from "./OwnersInfo";

const ClinicPetList = () => {
  const [pets, setPets] = useState([]);
  const [detail, setDetail] = useState(false);

  axios.get("/api/pets").then((res) => {
    setPets([...res.data.pets]); // maybe change
  });

  return (
    <div className="dashboard-card">
      <h2 class="ui header dashboard-header">
        <i aria-hidden="true" class="paw icon"></i>
        <div class="content">
          Patient Pets List
          <div class="sub header dashboard-header">
            See a list of animals you visit
          </div>
        </div>
      </h2>
      <table class="ui striped table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Pet Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Owner</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr>
              <td>
                <img class="pet-image" src={pet.image}></img>
              </td>
              <td>{pet.name}</td>
              <td>{pet.age} years</td>
              <td>{pet.gender}</td>
              <td>{pet.weight} lbs</td>
              <td>{pet.pet_type}</td>
              <td>{pet.breed}</td>
              <td>{pet.owner_name}</td>
              <td>
                <OwnersInfo
                  fname={pet.first_name}
                  lname={pet.last_name}
                  tel={pet.telephone}
                  email={pet.email}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicPetList;
