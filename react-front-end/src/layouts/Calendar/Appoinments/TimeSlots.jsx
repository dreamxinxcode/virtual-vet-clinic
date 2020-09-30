import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
<<<<<<< HEAD
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
=======
  const { value, setTime, disabled } = props;

  return (
    <button
      onClick={() => setTime(value)}
      className="timeSlot"
      disabled={disabled ? true : false}
    >
      <span>{props.value}</span>
>>>>>>> 24f422875f69e9279d70d2555616d210116040dc
    </button>
  );
}

export default TimeSlots;
