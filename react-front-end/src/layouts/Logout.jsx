import React from "react";
import axios from "axios";

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
        // className={buttonClass}
        onClick={() => handleLogout()}
        // disabled={props.disabled}
      >
        LOGOUT
      </button>
    </>
  );
};

export default Logout;
