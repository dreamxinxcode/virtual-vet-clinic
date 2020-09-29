import React from 'react';
import Sidebar from './Sidebar';
import PatientAppointmentsCard from './patient/PatientAppointmentsCard';
import { Link } from "react-router-dom";

export default function Dashboard () {
  return (
      <div id="dashboard-wrapper">
        <Sidebar />
        <div id="dashboard-container">
          <Link to='/video'>
            <PatientAppointmentsCard />
          </Link>
        </div>
      </div>
  );
}