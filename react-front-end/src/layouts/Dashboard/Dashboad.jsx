import React from 'react';
import Sidebar from './Sidebar';
import AppointmentsCard from './patient/AppointmentsCard';

export default function Dashboard () {
  return (
    <div id="dashboard-wrapper">
      <Sidebar />
      <div id="dashboard-container">
          <AppointmentsCard />
      </div>
    </div>
  );
}