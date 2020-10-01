import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
  const { value, hour, setTime, disabled } = props;

  return (
    <button
      onClick={() => setTime(value)}
      className="timeSlot"
      disabled={disabled ? true : false}
    >
      <span>{hour}</span>
    </button>
  );
}

export default TimeSlots;
