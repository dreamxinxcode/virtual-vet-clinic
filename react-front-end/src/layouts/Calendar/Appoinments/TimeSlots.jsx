import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
  const setAppTime = time => {
    props.setTime(time);
  };

  return (
    <button
      onClick={() => props.setTime}
      className="timeSlot"
      disabled={props.disabled ? true : false}
    >
      <span>{props.time}</span>
    </button>
  );
}

export default TimeSlots;
