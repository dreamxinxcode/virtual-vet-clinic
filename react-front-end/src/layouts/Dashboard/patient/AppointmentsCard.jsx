import React, { useEffect, useState } from 'react';
import '../Dashboard.scss';
import PatientRow from './PatientRow';
import ClinicRow from './ClinicRow';
import axios from 'axios';

export default function PatientAppointmentsCard() {
  const [accountType, setAccountType] = useState('');
  const [appointmentsList, setAppointmentsList] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/users/me'),
      axios.get('/api/appointments')
    ])
      .then((res) => {
        setAccountType(res[0].data.type)
        let apts = [];

        accountType === 'pet' ?
        apts = res[1].data.appointments.map(appointment => 
          <PatientRow appointment={appointment} key={appointment.id} />
        )
        : 
        apts = res[1].data.appointments.map(appointment => 
          <ClinicRow appointment={appointment} key={appointment.id} />
        )
        
        setAppointmentsList([...apts]);
      })
      .catch(err => console.log(err))
  }, []);
  
  return (accountType === 'clinic' ?
    <div className="dashboard-card">
    <h2 class="ui header"><i aria-hidden="true" class="calendar alternate outline icon"></i><div class="content">Appointments<div class="sub header">See your appointment history</div></div></h2>
    <table class="ui striped table">
      <thead>
        <tr>
          <th>Patient</th>
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
  :
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