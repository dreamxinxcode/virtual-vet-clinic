import React from "react";
import axios from "axios";
import './LogoutButton.scss';

const Logout = (props) => {
  // const buttonClass = classnames("button", {
  //   "button--confirm": props.confirm,
  //   "button--danger": props.danger,
  // });

  const handleLogout = () => {
    axios.post("/users/logout").then((res) => {
      props.setLogStatus(false);
      localStorage.setItem("userName", "");
    });
  };

  return (
    <>
      <button
        id="logout-button"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
