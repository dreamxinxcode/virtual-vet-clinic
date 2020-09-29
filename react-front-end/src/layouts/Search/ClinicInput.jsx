import React from 'react';
import './ClinicInput.scss';

export default function ClinicInput() {
  return (
    <div id="clinic-input" class="ui icon input">
      <input type="text" placeholder="Search clinic..." />
      <i class="marker icon"></i>
    </div>
  )
}