import React from "react";

export default function Appointment(props) {
  const timestamp_date = props.appointment.appointment_date.slice(0, 10);
  return (
    <tr>
      <td>{props.appointment.clinic_name}</td>
      <td>{props.appointment.pet_name}</td>
      <td>{timestamp_date}</td>
      <td>
        {props.appointment.appointment_time}:00{" "}
      </td>
    </tr>
  );
}
