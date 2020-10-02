import React from "react";

const Logout = (props) => {
  // const buttonClass = classnames("button", {
  //   "button--confirm": props.confirm,
  //   "button--danger": props.danger,
  // });

  return (
    <>
      <button
        // className={buttonClass}
        onClick={() => console.log("LOGOUT clicked")}
        // disabled={props.disabled}
      >
        LOGOUT
      </button>
    </>
  );
};

export default Logout;
