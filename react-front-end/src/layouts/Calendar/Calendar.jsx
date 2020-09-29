import React, { useState } from "react";
import Appointment from "../Calendar/Appoinments";

import Chat from "../Chat/Chat";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

export default function myCalendar() {
  const [value, setDate] = useState(new Date());

  const dateHander = () => {
    setDate(value);
    console.log(value);
  };

  return (
    <>
      <Calendar onChange={dateHander} value={value} />
      <Appointment />
      <Chat />
    </>
  );
}
