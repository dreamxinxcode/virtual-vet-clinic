import React from "react";

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

export default function Appointment(props) {
  return (
    <>
      <div className="timeSlotHeader">
        <h2>Choose an apointment time</h2>
      </div>
      <div className="timeSlotOuterContainer">
        <TimeSlots time={"10:00"} />
        <TimeSlots time={"11:00"} disabled />
        <TimeSlots time={"12:00"} />
        <TimeSlots time={"13:00"} disabled />
        <TimeSlots time={"14:00"} />
        <TimeSlots time={"15:00"} disabled />
        <TimeSlots time={"16:00"} />
        <TimeSlots time={"17:00"} disabled />
      </div>
      <Empty />
      <Form
        name={"Tima"}
        // interviewers={interviewers}
        // interviewer={interview.interviewer.id}
        // onSave={save}
        // onCancel={back}
      />
      <Show />
    </>
  );
}
