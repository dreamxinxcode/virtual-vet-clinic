import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
  const { value, hour, setTime } = props;

  return (
    <button
      onClick={() => setTime(value)}
      className="timeSlot"
      disabled={props.disabled ? true : false}
    >
      <span className="timeSlot-time">{hour}</span>
    </button>
  );
}

export default TimeSlots;
