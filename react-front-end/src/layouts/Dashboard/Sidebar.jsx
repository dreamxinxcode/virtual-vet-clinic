import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import JoinButton from "./JoinButton";

// let name = "";
//       if (res.data.user) {
//         if (res.data.user.first_name) name = res.data.user.first_name;
//         else name = res.data.user.name;

export default function Sidebar(props) {
  let user = "";

  if (props.userInfo) {
    if (!props.userInfo.first_name) {
      user = props.userInfo.name;
    } else {
      user = `${props.userInfo.first_name} ${props.userInfo.last_name}`;
    }
  }

  return (
    <div id="sidebar">
      <h2 id="sidebar-user">{user}</h2>

      {props.userType === "pet" ? (
        <Link to="/addpet">
          <div className="image2">
            <div className="image2-in"></div>
          </div>
        </Link>
      ) : null}

      <JoinButton />
    </div>
  );
}
