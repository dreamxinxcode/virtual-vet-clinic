import React from 'react';
import { Link } from "react-router-dom";
import './DashboardButton.scss';

const DashboardButton = () => {
  return (
    <Link to='/dashboard'>
      <button id='dashboard-button'>
        <i class="icon user"></i>
        Dashboard
      </button>
    </Link>
  )
};

export default DashboardButton;