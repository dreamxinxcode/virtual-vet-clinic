import React from "react";
// import classNames from "classnames";

import classNames from "classnames/bind";
import styles from "./Input.scss";
let classnames = classNames.bind(styles);

// import "components/Button.scss";

export default function InputField(props) {
  //   const buttonClass = classnames("button", {
  //     "button--confirm": props.confirm,
  //     "button--danger": props.danger,
  //   });

  return (
    <>
      <input
        classname={styles}
        placeholder={props.placeholder}
        type={props.type}
      ></input>
    </>
  );
}
