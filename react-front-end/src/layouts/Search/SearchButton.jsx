import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Clinics from "../Clinics/Clinics";

function SearchButton(props) {
  return (
    <>
      <button Link className={"ui purple button"} onClick={props.handleSubmit}>
        <i className="icon search"></i>
        Search
      </button>
    </>
  );
}

export default SearchButton;
