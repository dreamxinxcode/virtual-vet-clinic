import React, { useState } from "react";

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
  { value: "9:00" },
  { value: "10:00" },
  { value: "11:00" },
  { value: "12:00", disabled: false },
  { value: "1:00", disabled: true },
  { value: "2:00" },
  { value: "3:00", disabled: true },
  { value: "4:00" },
  { value: "5:00", disabled: true },
];

export default function Appointment(props) {
  const [time, setTime] = useState(null);

  const slots = times.map(slot => {
    return (
      <TimeSlots
        value={slot.value}
        disabled={slot.disabled}
        setTime={setTime}
      />
    );
  });

  return (
    <div className="timeBox">
      <div className="timeSlotOuterContainer">
        <h2 className="timeSlotHeader">Choose an apointment time</h2>
        <div className="timeSlots">{slots}</div>
      </div>

      {time ? (
        <Form
          name={"Tima"}
          time={time}
          date={props.date}
          setTime={setTime}
          // interviewers={interviewers}
          // interviewer={interview.interviewer.id}
          // onSave={save}
          // onCancel={back}
        />
      ) : null}

      {/* <Show /> */}
    </div>
  );
}
