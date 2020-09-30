import React, { useState } from "react";
import axios from "axios";

import "./styles.scss";
// import Confirm from "./Confirm";
import Empty from "./Empty";
// import Error from "./Error";
import Form from "./Form";
// import Header from "./Header";
import Show from "./Show";
// import Status from "./Status";
import TimeSlots from "./TimeSlots";

// // import useVisualMode from "hooks/useVisualMode";

// identifiers to switch to any mode
const CONFIRM = "CONFIRM";
const CREATE = "CREATE";
const DELETE = "DELETE";
const EDIT = "EDIT";
// const ERROR_DELETE = "ERROR_DELETE";
// const ERROR_SAVE = "ERROR_SAVE";
const EMPTY = "EMPTY";
const SAVING = "SAVING";
const SHOW = "SHOW";

// DUMMY DATA
const times = [
  { value: "10 : 00" },
  { value: "11 : 00" },
  { value: "12 : 00", disabled: false },
  { value: "13 : 00", disabled: true },
  { value: "14 : 00" },
  { value: "15 : 00", disabled: true },
  { value: "16 : 00" },
  { value: "17 : 00", disabled: true },
];

export default function Appointment(props) {
  const { date } = props;

  const [time, setTime] = useState(null);

  const save = (date, time) => {
    const booking = { date, time };
    console.log("Sending day and time to book apppoitment", date, time);
    axios
      .put("/api/bookings", booking)
      .then((res) => console.log("returned from BE put/bookings", res));
  };

  // const getSlots = (date) => {};

  const slots = times.map((slot) => {
    return (
      <TimeSlots
        value={slot.value}
        disabled={slot.disabled}
        setTime={setTime}
      />
    );
  });

  return (
    <>
      <div className="timeSlotHeader">
        <h2>Choose an apointment time</h2>
      </div>
      <div className="timeSlotOuterContainer">{slots}</div>

      {time ? (
        <Form
          name={"Tima"}
          time={time}
          date={date}
          setTime={setTime}
          onSave={save}
          // interviewers={interviewers}
          // interviewer={interview.interviewer.id}
          // onSave={save}
          // onCancel={back}
        />
      ) : null}

      {/* <Show /> */}
    </>
  );
}
