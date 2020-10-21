import React from "react";
import { Button } from "semantic-ui-react";

export default function Form(props) {
  return (
    <div className="appointment__card appointment__card--create">
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <div className="header"> Appoinment ticket </div>
        <h3 className="formHeader">
          <label className="labelForForm">Date: </label>
          {props.date.toDateString().toString()}
        </h3>
        <h3 className="formHeader">
          <label className="labelForForm">Time:</label> {props.time}:00
        </h3>
      </form>

      <section className="appointment__actions">
        <Button
          className="ui large inverted green button"
          confirm
          onClick={() => props.onSave(props.date, props.time)}
        >
          Confirm
        </Button>
        <Button
          className="ui large red inverted button"
          danger
          onClick={() => props.setTime("")}
        >
          Cancel
        </Button>
      </section>
    </div>
  );
}
