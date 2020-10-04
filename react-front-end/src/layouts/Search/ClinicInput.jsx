import React from "react";
import "./ClinicInput.scss";

export default function ClinicInput(props) {
  return (
    <div id="clinic-input" className="ui icon input">
      <input
        type="text"
        placeholder="Search clinic..."
        onChange={e => props.setClinicName(e.target.value)}
      />
      <i className="marker icon"></i>
    </div>
  );
}
