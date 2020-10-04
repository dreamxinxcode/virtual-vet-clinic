import React from 'react';
import './Sidebar.scss';
import JoinButton from './JoinButton';

export default function Sidebar(props) {
  let user;
  props.name.name ? user = props.name.name : user = `${props.name.first_name} ${props.name.last_name}` 
  
  return (
    <div id="sidebar">
        <p>{user}</p>
        <JoinButton />
    </div>
  )
}