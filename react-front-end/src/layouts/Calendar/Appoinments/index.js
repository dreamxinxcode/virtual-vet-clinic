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

// SLOT PLACEHOLDERS
const times = [
  { id: 9, hour: "09:00" },
  { id: 10, hour: "10:00" },
  { id: 11, hour: "11:00" },
  { id: 12, hour: "12:00" },
  { id: 13, hour: "13:00" },
  { id: 14, hour: "14:00" },
  { id: 15, hour: "15:00" },
  { id: 16, hour: "16:00" },
  { id: 17, hour: "17:00" },
];

export default function Appointment(props) {
  const { date, setDate } = props;

  const [time, setTime] = useState(null);
  const [currentSlots, setCurrentSlots] = useState([]);
  const [petID, setPetID] = useState("");

  // HELPER 1
  const findTimeID = (id) => {
    for (let item of currentSlots) {
      if (item.time_id === id) {
        return true;
      }
    }
  };

  // HELPER 2
  const petIdMatch = (id) => {
    for (let item of currentSlots) {
      // console.log(item.time_id, id);
      if (item.time_id === id && item.pet_id === petID) {
        console.log("ID was found", item.id);
        return item.id;
      }
    }
  };

  // SET PET ID
  useEffect(() => {
    axios.get("users/me").then((res) => {
      console.log("SETTING PET ID = ", res.data.user);
      setPetID(res.data.user.pets_id);
    });
  }, []);

  const save = (date, time) => {
    const clinic_info = JSON.parse(localStorage.getItem("clinic_info"));
    const clinic_id = clinic_info.id;

    axios
      .get("users/me")
      .then((res) => {
        console.log("USERS/ME", res.data.user.pets_id);
        return axios.post("/api/booking/", {
          clinic_id,
          pet_id: res.data.user.pets_id,
          date,
          time,
        });
      })
      .then((res) => setTime(""));
  };

  let slots = times.map((slot) => {
    return (
      <TimeSlots
        key={slot.id}
        value={slot.id}
        hour={slot.hour}
        mybooking={"booked"}
        // disabled={currentSlots.find((id) => slot.id === time_id) ? true : null}
        disabled={findTimeID(slot.id)}
        setTime={setTime}
        cancelBooking={(e) => cancelBooking(petIdMatch(slot.id))}
        bookingId={petIdMatch(slot.id)}
      />
    );
  });

  const hourExtracter = (hourArr) => {
    const bookedHours = [];
    for (const key of hourArr) bookedHours.push(key.time_id);
    // console.log("booked hours Array", bookedHours);
    return bookedHours;
  };

  useEffect(() => {
    const clinic_info = JSON.parse(localStorage.getItem("clinic_info"));
    const clinic_id = clinic_info.id;
    const date_str = date.getTime();
    console.log("ID", clinic_id);
    const data = date.toISOString();
    console.log("data", data);
    axios
      .get(`http://localhost:8080/api/bookings/${clinic_id}/${data}`)
      .then((res) => {
        console.log("LIST of BOOKINGS", res.data.bookings);
        const slots = hourExtracter(res.data.bookings);
        setCurrentSlots([...res.data.bookings]);
      });
  }, [date]);

  // CANCEL MY APPOINTMENT
  const cancelBooking = (id) => {
    console.log("Cancel booking has been activated");
    axios
      .get(`http://localhost:8080/api/booking/delete/${id}`)
      .then((res) => console.log("deleted?", res.data));
  };

  // ===============================================================
  return (
    <div className="timeBox">
      <div className="timeSlot-outerContainer">
        <h2 className="timeSlot-header">Choose an apointment time</h2>
        <div className="timeSlots">{slots}</div>
      </div>

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
    </div>
  );
}
