import React, { useState } from "react";
import { Button } from "semantic-ui-react";
// import InterviewerList from "../InterviewList";

export default function Form(props) {
  // const {interviewers, onSave, onCancel} = props;

  // const [name, setName] = useState(props.name || "");
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
      {/* <section className="appointment__card-left"> */}
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <h3>{props.time}</h3>
        <h3> DATE : {props.date.toString()}</h3>
        <label>Appointment time:</label>
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          value={props.date}
          type="text"
          placeholder="Enter Student Name"
          // onChange={(event) => setName(event.target.value)}
          data-testid="student-name-input"
        />
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
          className="ui red inverted button"
          danger
          onClick={console.log("HI")}
        >
          Cancel
        </Button>
        <Button
          className="ui inverted green button"
          confirm
          onClick={console.log("Validate")}
        >
          Confirm
        </Button>
        {/* </section> */}
      </section>
    </main>
  );
}
