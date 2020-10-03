import React from "react";

export default function Redirector(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.name}</button>
    </>
  );
}
