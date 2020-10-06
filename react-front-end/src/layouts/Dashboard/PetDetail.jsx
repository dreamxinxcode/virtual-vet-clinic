import React from 'react';
import './PetDetail.scss';

const PetDetail = (props) => {
  return (
    <div id="pet-detail-card">
      <h1>{props.name}</h1>
    </div>
  )
};

export default PetDetail;