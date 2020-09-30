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
  { value: "10: 00" },
  { value: "11: 00" },
  { value: "12: 00", disabled: false },
  { value: "13: 00", disabled: true },
  { value: "14: 00" },
  { value: "15: 00", disabled: true },
];

export default function Appointment(props) {
  const [time, setTime] = useState(null);

<<<<<<< HEAD
  const showBookingForm = () => {
    // setTime(timeValue);
    console.log(time);
  };

  const timeValue = "10:00";
=======
  const slots = times.map((slot) => {
    return (
      <TimeSlots
        value={slot.value}
        disabled={slot.disabled}
        setTime={setTime}
      />
    );
  });

>>>>>>> 24f422875f69e9279d70d2555616d210116040dc
  return (
    <>
      <div className="timeSlotHeader">
        <h2>Choose an apointment time</h2>
      </div>
<<<<<<< HEAD
      <div className="timeSlotOuterContainer">
        <TimeSlots time={"10:00"} value={timeValue} onClick={setTime} />
        <TimeSlots time={"11:00"} disabled onClick={console.log("HellO!")} />
        <TimeSlots time={"12:00"} />
        <TimeSlots time={"13:00"} disabled />
        <TimeSlots time={"14:00"} />
        <TimeSlots time={"15:00"} />
        <TimeSlots time={"16:00"} />
        <TimeSlots time={"17:00"} disabled />
      </div>
=======
      <div className="timeSlotOuterContainer">{slots}</div>
>>>>>>> 24f422875f69e9279d70d2555616d210116040dc
      <Empty />

      {time ? (
        <Form
          name={"Tima"}
<<<<<<< HEAD
=======
          time={time}
          date={props.date}
>>>>>>> 24f422875f69e9279d70d2555616d210116040dc
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
