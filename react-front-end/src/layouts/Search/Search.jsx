import React, { useState } from "react";
import axios from "axios";

import "./Search.scss";
import AnimalTypeSelect from "./AnimalTypeSelect";
import ClinicInput from "./ClinicInput";
import CityInput from "./CityInput";
import SearchButton from "./SearchButton";
import Clinics from "../Clinics/Clinics";

export default function Search() {
  const [clinicCity, setClinicCity] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [animalType, setAnimalType] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      clinicName,
      clinicCity,
      animalType,
    };
    console.log(item);
    axios.post("/api/clinics", item).then(res => {
      let data = res.data.clinics;
      console.log("return data Array", data);
      setSearchResults([...data]);
    });
  };

  let results = searchResults.map(element => {
    return (
      <Clinics
        id={element.id}
        name={element.name}
        city={element.city}
        address={element.address}
        telephone={element.telephone}
        email={element.email}
        image={element.image}
      />
    );
  });

  return (
    <>
      <div id="search-container">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          height="100%"
          width="100%"
        >
          <path
            d="M-0.80,13.31 C157.97,-20.22 362.37,30.09 508.95,-0.48 L483.71,-123.84 L0.00,0.00 Z"
            stroke="none"
            fill="#fff"
          ></path>
        </svg>

        <form id="search-form" action="" method="GET">
          <h2 id="search-header">Search for a Clinic</h2>
          <ClinicInput setClinicName={setClinicName} />
          <CityInput setClinicCity={setClinicCity} />
          <AnimalTypeSelect setAnimalType={setAnimalType} />
          <SearchButton handleSubmit={handleSubmit} />
        </form>
      </div>
      {results}
    </>
  );
}
