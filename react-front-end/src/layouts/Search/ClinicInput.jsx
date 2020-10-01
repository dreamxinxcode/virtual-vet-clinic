import React from "react";
import "./ClinicInput.scss";

export default function ClinicInput() {
  return (
    <div id="clinic-input" className="ui icon input">
      <input type="text" placeholder="Search clinic..." />
      <i className="marker icon"></i>
    </div>
  );
}
