import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import JoinButton from "./JoinButton";

export default function Sidebar(props) {
  let user;
  
  if (!props.userInfo.first_name) {
    user = props.userInfo.name;
  } else {
    user = `${props.userInfo.first_name} ${props.userInfo.last_name}`;
  } 
  
  return (
    <div id="sidebar">
      <h2 id="sidebar-user">{user}</h2>
      <Link to="/addpet">
        <div className="image2">
          <div className="image2-in"></div>
        </div>
      </Link>
      <JoinButton />
    </div>
  );
}
