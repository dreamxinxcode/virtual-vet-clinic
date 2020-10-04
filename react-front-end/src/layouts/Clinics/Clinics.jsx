import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Clinics.scss";
import Redirector from "./Redirector";

export default function Clinics(props) {
  console.log("CLINIC ID: ", props.id);
  const clickHandler = () => {
    console.log("BUTTON CLICKED AND CLINIC ID:", props.id);
    localStorage.setItem("clinic_info", JSON.stringify(props));
  };
  return (
    <>
      <div>
        <div className="clinic-container">
          <img src={props.image} alt="" />
          <h2>Clinic name: {props.name}</h2>
          <h4>City:{props.city}</h4>
          <h4>Address:{props.address}</h4>
          <h4>Telephone:{props.telephone}</h4>
          <h4>Email:{props.email}</h4>
          <Link to="/calendar">
            <Redirector name={"Click ME!"} onClick={() => clickHandler()} />
          </Link>
        </div>
      </div>
    </>
  );
}
