import React, { useState } from "react";
import Appointment from "../Calendar/Appoinments";
import Calendar from "react-calendar";

import Chat from "../Chat/Chat";

import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

export default function myCalendar() {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <Appointment />
      <Chat />
    </div>
  );
}
