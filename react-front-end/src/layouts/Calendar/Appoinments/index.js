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
// const times = [
//   { value: "10: 00", disabled: "false" },
//   { value: "11: 00", disabled: "true" },
//   { value: "12: 00", disabled: "false" },
//   { value: "13: 00", disabled: "true" },
//   { value: "14: 00", disabled: "false" },
//   { value: "15: 00", disabled: "false" },
// ];

export default function Appointment(props) {
  const [time, setTime] = useState(null);

  return (
    <>
      <div className="timeSlotHeader">
        <h2>Choose an apointment time</h2>
      </div>
      <div className="timeSlotOuterContainer">
        <TimeSlots
          time={"10:00"}
          value={"10:00"}
          // setTime={(e) => setTime(timeValue)}
          setTime={setTime}
        />
        <TimeSlots time={"11:00"} disabled onClick={console.log("HellO!")} />
        <TimeSlots
          time={"12:00"}
          value={"12:00"}
          setTime={setTime}
          // setTime={(e) => setTime(value)}
        />
        <TimeSlots
          time={"13:00"}
          value={"13:00"}
          setTime={setTime}
          // setTime={(e) => setTime(value)}
          disabled
        />
        <TimeSlots time={"14:00"} />
        <TimeSlots time={"15:00"} />
        <TimeSlots time={"16:00"} />
        <TimeSlots time={"17:00"} disabled />
      </div>
      <Empty />

      {time ? (
        <Form
          name={"Tima"}
          time={time}
          // interviewers={interviewers}
          // interviewer={interview.interviewer.id}
          // onSave={save}
          // onCancel={back}
        />
      ) : null}

      <Show />
    </>
  );
}
