import React from 'react';
import '../Dashboard.scss';
import Appointment from './Appointment';

const data = [
    {
    clinic_id: 'Vancouver Vet Clinic',
    pet_id: 'Sparky',
    date: '2020-10-03',
    time: '10:00 am',
    confirmation: true,
    description: 'Dog needs a check up.'
    },
    {
      clinic_id: 'Vancouver Vet Clinic',
      pet_id: 'Sparky',
      date: '2020-09-23',
      time: '1:00 pm',
      confirmation: true,
      description: 'Dog has an eye infection.'
    },
    {
      clinic_id: 'Vancouver Vet Clinic',
      pet_id: 'Sparky',
      date: '2020-09-01',
      time: '10:30 am',
      confirmation: true,
      description: 'Dog is due for shots.'
    },
]

export default function PatientAppointmentsCard() {
  const appointmentsList = data.map(appointment => 
    <Appointment appointment={appointment} key={appointment.id} />
  )
  
  return (
    <div className="dashboard-card">
      <h2 class="ui header"><i aria-hidden="true" class="calendar alternate outline icon"></i><div class="content">Appointments<div class="sub header">See your appointment history</div></div></h2>
      <table class="ui striped table">
        <thead>
          <tr>
            <th>Clinic</th>
            <th>Pet</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointmentsList}
        </tbody>
      </table>
    </div>
  )
}