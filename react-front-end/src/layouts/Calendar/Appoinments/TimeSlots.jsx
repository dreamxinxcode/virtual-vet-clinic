import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
  return (
    <button className="timeSlot" disabled={props.disabled ? true : false}>
      <span>{props.time}</span>
    </button>
  );
}

export default TimeSlots;
