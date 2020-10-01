import React, { useEffect, useState } from "react";
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
// const CONFIRM = "CONFIRM";
// const CREATE = "CREATE";
// const DELETE = "DELETE";
// const EDIT = "EDIT";
// const ERROR_DELETE = "ERROR_DELETE";
// const ERROR_SAVE = "ERROR_SAVE";
// const EMPTY = "EMPTY";
// const SAVING = "SAVING";
// const SHOW = "SHOW";

// DUMMY DATA
const times = [
  { id: 10, hour: "10:00", disabled: true },
  { id: 11, hour: "11:00" },
  { id: 12, hour: "12:00" },
  { id: 13, hour: "13:00", disabled: true },
  { id: 14, hour: "14:00" },
  { id: 15, hour: "15:00" },
];

let apislots = [11, 12];

export default function Appointment(props) {
  const { date, setDate } = props;

  const [time, setTime] = useState(null);
  const [currentSlots, setCurrentSlots] = useState([]);

  const save = (date, time) => {
    const booking = { date, time };
    axios
      .put("/api/bookings", booking)
      .then((res) => console.log("returned from BE put/bookings", res));
  };

  const slots = times.map((slot) => {
    return (
      <TimeSlots
        value={slot.id}
        hour={slot.hour}
        disabled={apislots.includes([slot.id]) ? true : null}
        // disabled={slot.disabled}
        setTime={setTime}
      />
    );
  });

  // const hourExtracter = (hourArr) => {
  //   const bookedHours = [];
  //   for (const key of hourArr) bookedHours.push(key.hour);
  //   return bookedHours;
  // };

  // useEffect(() => {
  //   axios.get("/api/bookings", date).then((res) => {
  //     const slots = hourExtracter(res.data);
  //     setCurrentSlots([...slots]);
  //     console.log("response on Date change", res.data);
  //     console.log("CurrentSlots Updated", currentSlots);
  //   });
  // }, [date]);

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
        />
      ) : null}

      {/* <Show /> */}
    </>
  );
}
