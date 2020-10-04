import React from 'react';
import './Sidebar.scss';
import JoinButton from './JoinButton';

export default function Sidebar(props) {
  let user;
  props.name.name ? user = props.name.name : user = `${props.name.first_name} ${props.name.last_name}` 
  
  return (
    <div id="sidebar">
        <h2 id='sidebar-user' >{user}</h2>
        <JoinButton />
    </div>
  )
}