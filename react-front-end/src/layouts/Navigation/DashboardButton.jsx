import React from 'react';
import { Link } from "react-router-dom";
 
const DashboardButton = () => {
  return (
    <Link to='/dashboard'>
      <button class="ui basic button">
        <i class="icon gear"></i>
        Dashboard
      </button>
    </Link>
  )
};

export default DashboardButton;