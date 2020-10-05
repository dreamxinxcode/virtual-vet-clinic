import React from "react";
import "./TimeSlots.scss";

function TimeSlots(props) {
  const { value, hour, setTime, mybooking, cancelBooking, bookingId } = props;

  return (
    <>
      <button
        onClick={() => setTime(value)}
        className="timeSlot"
        disabled={props.disabled ? true : false}
      >
        <span className="timeSlot-time">{hour}</span>
        <br />
        <span className="my-booking">{mybooking}</span>
      </button>
      <button onClick={cancelBooking}>{bookingId}</button>
    </>
  );
}

export default TimeSlots;
