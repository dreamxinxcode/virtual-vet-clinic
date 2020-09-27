import React from "react";

import "./styles.scss";
// import Confirm from "./Confirm";
import Empty from "./Empty";
// import Error from "./Error";
import Form from "./Form";
// import Header from "./Header";
import Show from "./Show";
// import Status from "./Status";

// // import useVisualMode from "hooks/useVisualMode";

// identifiers to switch to any mode
const CONFIRM = "CONFIRM";
const CREATE = "CREATE";
const DELETE = "DELETE";
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR_SAVE";
const EMPTY = "EMPTY";
const SAVING = "SAVING";
const SHOW = "SHOW";

export default function Appointment(props) {
  return (
    <>
      <Empty />
      <Form
        name={"Tima"}
        // interviewers={interviewers}
        // interviewer={interview.interviewer.id}
        // onSave={save}
        // onCancel={back}
      />
      <Show />
    </>
  );
}
