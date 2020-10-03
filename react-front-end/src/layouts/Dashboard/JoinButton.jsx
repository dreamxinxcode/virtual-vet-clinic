import React from 'react';
import './JoinButton.scss';
import { Link } from 'react-router-dom';

export default function GoogleHangoutsButton () {
  return (
    <Link to='/appointment'>
      <button id='hangouts-btn' class="ui violet button">
        <i class="icon video"></i>
        Join Appointment
      </button>
    </Link>
  )
}