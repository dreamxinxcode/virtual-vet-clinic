import React from "react";
import "./TimeSlots.scss";
import CancelBooking from "./CancelBooking";

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
      </button>
      <div className="btnContainer">
        {bookingId ? <CancelBooking cancelBooking={cancelBooking} /> : null}
      </div>
    </>
  );
}

export default TimeSlots;
