import React, { useState, useEffect } from "react";
import Appointment from "../Calendar/Appoinments";
import Calendar from "react-calendar";

import Chat from "../Chat/Chat";

import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

export default function myCalendar() {
  const [date, setDate] = useState(new Date());
  const [clinicInfo, setClinicInfo] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("clinic_info"));
    setClinicInfo(data);
  }, []);

  const divStyle = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(" +
      clinicInfo.image +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div style={divStyle}>
      <div className="pageLayout">
        <div className="calendar-page-header">
          <h1 className="calendar-header">Book an Appointment:</h1>
          <span className="cliniccc">{clinicInfo.name}</span>
          <ul className="calendar-ul">
            <li className="calendar-li">
              <div className="inside">
                <svg
                  id="Capa_1"
                  enableBackground="new 0 0 512 512"
                  height="512"
                  viewBox="0 0 512 512"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m226 390h60v122h-60z" />
                    <path d="m121.023 512h74.977v-152h120v152h75.333v-512h-270.31zm209.977-452h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm-60-240h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm-60-240h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm-60-240h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30zm0 60h30v30h-30z" />
                    <path d="m420.637 120h91.363v392h-91.363z" />
                    <path d="m0 120h90.996v392h-90.996z" />
                  </g>
                </svg>
                {clinicInfo.city}
              </div>
            </li>
            <li className="calendar-li">
              <div className="inside">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                {clinicInfo.address}
              </div>
            </li>
            <li className="calendar-li">
              <div className="inside">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 513.64 513.64"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
			c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
			c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
			l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                {clinicInfo.telephone}
              </div>
            </li>
            <li className="calendar-li">
              <div className="inside">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <polygon points="339.392,258.624 512,367.744 512,144.896 		" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="0,144.896 0,367.744 172.608,258.624 		" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
			L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                {clinicInfo.email}
              </div>
            </li>
          </ul>
        </div>
        <div className="pageLayout-innerTop">
          <Calendar onChange={setDate} date={date} />
          <Chat />
        </div>
        <div className="innerBottom">
          <Appointment setDate={setDate} date={date} />
        </div>
      </div>
    </div>
  );
}
