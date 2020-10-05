import React from "react";
import "./Redirector.scss";

export default function Redirector(props) {
  return (
    <>
      <button className="redirector" onClick={props.onClick}>
        {props.name}
      </button>
    </>
  );
}
