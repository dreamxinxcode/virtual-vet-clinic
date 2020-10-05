import React, { useEffect, useState } from 'react';
import '../Dashboard.scss';
import PatientRow from './PatientRow';
import ClinicRow from './ClinicRow';
import axios from 'axios';
import Appointment from './PatientRow';

export default function PatientAppointmentsCard() {
  const [accountType, setAccountType] = useState('');
  const [appointmentsList, setAppointmentsList] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/users/me'),
      axios.get('/api/appointments')
    ])
      .then((res) => {
        let account = res[0].data.type;
        console.log('account:', account, typeof account);
        setAccountType(account)
        setAppointmentsList(res[1].data.appointments);
        // console.log('res:', res[0].data.type, 'account type:', accountType)
        
        // accountType === 'pet' ?

        // apts = res[1].data.appointments.map(appointment => 
        //   <PatientRow appointment={appointment} key={appointment.id} />
        // )
        // : 
        // apts = res[1].data.appointments.map(appointment => 
        //   <ClinicRow appointment={appointment} key={appointment.id} />
        // )
        
      })
      .catch(err => console.log(err))
  }, []);
  
  return (
    <div className="dashboard-card">
      <h2 class="ui header dashboard-header"><i aria-hidden="true" class="calendar alternate outline icon"></i><div class="content">Appointments<div class="sub header dashboard-header">See your appointment history</div></div></h2>
      <table class="ui striped table">
        <thead>
          <tr>
            {accountType === 'pet' ? (
            <>
            <th>Clinic</th>
            <th>Pet</th>
            <th>Date</th>
            <th>Time</th>
            </>
            )
            :
            (
            <>
            <th>Patient</th>
            <th>Pet</th>
            <th>Date</th>
            <th>Time</th>
            </>  
          )}
          </tr>
        </thead>
        <tbody>
          {appointmentsList.map(appointment => 
            accountType === 'pet' ? <PatientRow appointment={appointment} key={appointment.id} /> : <ClinicRow appointment={appointment} key={appointment.id} />
          )}
        </tbody>
      </table>
    </div>
  )
}