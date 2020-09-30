import React from 'react';
import Sidebar from './Sidebar';
import PatientAppointmentsCard from './patient/PatientAppointmentsCard';

export default function Dashboard () {
  return (
      <div id="dashboard-wrapper">
        <Sidebar />
        <div id="dashboard-container">
            <PatientAppointmentsCard />
        </div>
      </div>
  );
}