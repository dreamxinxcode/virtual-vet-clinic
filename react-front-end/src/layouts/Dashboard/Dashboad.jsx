import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import AppointmentsCard from './patient/AppointmentsCard';
import ClinicPetList from '../Dashboard/clinic/ClinicPetList';
import axios from 'axios';

export default function Dashboard () {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get('users/me')
    .then(res => {
      console.log(res.data.user)
      setUserInfo(res.data.user);
    })
    .catch(e => console.log(e));
  }, [])
  
  return (
    <div id="dashboard-wrapper">
      <Sidebar userInfo={userInfo} />
      <div id="dashboard-container">
          <AppointmentsCard />
          <ClinicPetList />
      </div>
    </div>
  );
}