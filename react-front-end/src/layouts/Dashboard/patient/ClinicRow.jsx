import React from 'react';

export default function Appointment (props) {
  return (
    <tr>
      <td>{props.appointment.owner_full_name}</td>
      <td>{props.appointment.pet_name}</td>
      <td>{props.appointment.appointment_date}</td>
      <td>{props.appointment.appointment_time}:00 {props.appointment.appointment_time > 5 ? 'am' : 'pm'}</td>
    </tr>
  )
}