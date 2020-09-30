import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
  const { value, setTime, disabled } = props;

  return (
    <button
      onClick={() => setTime(value)}
      className="timeSlot"
      disabled={disabled ? true : false}
    >
      <span>{props.value}</span>
    </button>
  );
}

export default TimeSlots;
