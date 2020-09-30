import React, { useState } from "react";
import { Button } from "semantic-ui-react";
// import InterviewerList from "../InterviewList";

export default function Form(props) {
  // const {interviewers, onSave, onCancel} = props;

  // const [name, setName] =  useState(props.name || "");
  // const [interviewer, setInterviewer] = useState(props.interviewer || null);
  // const [error, setError] = useState("");

  // function reset() {
  //   setName("");
  //   setInterviewer(null);
  //   setError("");
  // }

  // function cancel(event) {
  //   reset();
  //   onCancel();
  //   event.target.value="";
  // }

  // function validate() {
  //   if (name === "") {
  //     setError("Student name cannot be blank");
  //     return;
  //   }

  //   setError("");
  //   onSave(name, interviewer);
  // }

  return (
    <main className="appointment__card appointment__card--create">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <h3 className="formHeader">
          <label className="labelForForm">Appointment date: </label>
          {props.date.toDateString().toString()}
        </h3>

        <h3 className="formHeader">
          <label className="labelForForm">Appointment time:</label> {props.time}
        </h3>

        <section className="appointment__validation"></section>
      </form>
      {/* <InterviewerList
          interviewers={interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        /> */}
      {/* </section> */}
      {/* <section className="appointment__card-right"> */}
      <section className="appointment__actions">
        <Button
          className="ui big inverted green button"
          confirm
          onClick={console.log("Validate")}
        >
          Confirm
        </Button>
        <Button
          className="ui big red inverted button"
          danger
          onClick={() => props.setTime("")}
        >
          Cancel
        </Button>
        {/* </section> */}
      </section>
    </main>
  );
}
