import React from 'react';

export default function Appointment (props) {
  return (
    <tr>
      <td>{props.appointment.clinic_id}</td>
      <td>{props.appointment.pet_id}</td>
      <td>{props.appointment.date}</td>
      <td>{props.appointment.time}</td>
    </tr>
  )
}