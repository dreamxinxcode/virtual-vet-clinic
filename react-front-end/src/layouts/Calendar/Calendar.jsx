import React, { useState, useEffect } from "react";
import Appointment from "../Calendar/Appoinments";
import Calendar from "react-calendar";

import Chat from "../Chat/Chat";

import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

export default function myCalendar() {
  const [date, setDate] = useState(new Date());
  console.log("date checnged", date);
  const [clinicInfo, setClinicInfo] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("clinic_info"));
    setClinicInfo(data);
  }, []);

  return (
    <div className="pageLayout">
      <h1>{clinicInfo.name}</h1>
      <div className="pageLayout-innerTop">
        <Calendar onChange={setDate} date={date} />
        <Chat />
      </div>
      <div className="innerBottom">
        <Appointment setDate={setDate} date={date} />
      </div>
    </div>
  );
}
