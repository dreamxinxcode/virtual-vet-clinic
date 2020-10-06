import React from "react";
import "./Register.scss";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [accountType, setAccountType] = React.useState("pet");
  const [name, setName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validateCredentials = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = () => {
    const user = {
      first_name: firstName,
      last_name: lastName,
      telephone: phone,
      email: email,
      password: password,
      accountType: accountType,
    };

    axios
      .post("/users/signup", user)
      .then(res => {
        // localStorage.setItem("userName", res[0].data.user.email);
        // props.setLogStatus(true);
        console.log("RECIEVED user details from BE", res[0].data);
      })
      .catch(error => {
        console.log("registration error", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="register-form">
        <h2 className="signup-header">Fill the register form</h2>
        <div className="signupContent">
          <div
            className="login-imgBox"
            onChange={e => setAccountType(e.target.value)}
          >
            <label className="login-label">
              <div className="login-Imgbox">Clinic</div>
              <input
                type="radio"
                name="test"
                value="clinic"
                checked={accountType === "clinic"}
              />
              <svg
                className="login-accImage2"
                id="Capa_1"
                enable-background="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m436 170h-360c-8.284 0-15-6.716-15-15v-100c0-8.284 6.716-15 15-15h360c8.284 0 15 6.716 15 15v100c0 8.284-6.716 15-15 15z"
                  fill="#50ccf0"
                />
                <path
                  d="m436 40h-180v130h180c8.284 0 15-6.716 15-15v-100c0-8.284-6.716-15-15-15z"
                  fill="#32afd7"
                />
                <path
                  d="m486 512h-460c-8.284 0-15-6.716-15-15v-342c0-8.284 6.716-15 15-15h460c8.284 0 15 6.716 15 15v342c0 8.284-6.716 15-15 15z"
                  fill="#82e0ff"
                />
                <path
                  d="m486 140h-230v372h230c8.284 0 15-6.716 15-15v-342c0-8.284-6.716-15-15-15z"
                  fill="#50ccf0"
                />
                <path
                  d="m321 512h-130v-137c0-8.284 6.716-15 15-15h100c8.284 0 15 6.716 15 15z"
                  fill="#ffe646"
                />
                <path
                  d="m306 360h-50v152h65v-137c0-8.284-6.716-15-15-15z"
                  fill="#fad21e"
                />
                <path
                  d="m336 190h-160c-8.284 0-15-6.716-15-15v-160c0-8.284 6.716-15 15-15h160c8.284 0 15 6.716 15 15v160c0 8.284-6.716 15-15 15z"
                  fill="#e8f2f8"
                />
                <path
                  d="m336 0h-80v190h80c8.284 0 15-6.716 15-15v-160c0-8.284-6.716-15-15-15z"
                  fill="#d2e1e6"
                />
                <path
                  d="m286 80h-15v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h15c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                  fill="#fa7878"
                />
                <path
                  d="m501 280h-65c-8.284 0-15-6.716-15-15v-50c0-8.284 6.716-15 15-15h65z"
                  fill="#32afd7"
                />
                <path
                  d="m501 440h-65c-8.284 0-15-6.716-15-15v-50c0-8.284 6.716-15 15-15h65z"
                  fill="#32afd7"
                />
                <path
                  d="m76 280h-65v-80h65c8.284 0 15 6.716 15 15v50c0 8.284-6.716 15-15 15z"
                  fill="#50ccf0"
                />
                <path
                  d="m76 440h-65v-80h65c8.284 0 15 6.716 15 15v50c0 8.284-6.716 15-15 15z"
                  fill="#50ccf0"
                />
                <path
                  d="m332.213 286 19.394-19.394c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-25.607 25.607h-97.574l-25.606-25.606c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l19.393 19.393-19.394 19.394c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l25.607-25.606h97.574l25.606 25.606c2.929 2.93 6.768 4.394 10.607 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z"
                  fill="#e8f2f8"
                />
                <path
                  d="m271 125v-15h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15v-15c0-8.284-6.716-15-15-15v90c8.284 0 15-6.716 15-15z"
                  fill="#f44650"
                />
                <path
                  d="m351.606 245.394c-5.857-5.858-15.355-5.858-21.213 0l-25.606 25.606h-48.787v30h48.787l25.606 25.606c2.929 2.93 6.768 4.394 10.607 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-19.393-19.393 19.394-19.394c5.858-5.857 5.858-15.355-.001-21.212z"
                  fill="#d2e1e6"
                />
              </svg>
            </label>

            <label className="login-label">
              <div className="login-Imgbox">Pet owner</div>
              <input
                type="radio"
                name="test"
                value="pet"
                checked={accountType === "pet"}
              />
              <svg
                className="login-accImage2"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="flat">
                  <path
                    d="m336 216-24 32-40 16-24 16-16-16v-16l24-8 40-24 24-48 16.468 39.404z"
                    fill="#fdc9a6"
                  />
                  <path
                    d="m360 320 24 72 48 64 24-40-32-40-24-96z"
                    fill="#a8a8a8"
                  />
                  <path d="m280 456-16 16v16h64v-32z" fill="#683b0d" />
                  <path
                    d="m400 267.155v-11.155h-64l-56 96v104h48v-96l32-32 25.26-25.26a50.324 50.324 0 0 0 14.74-35.585z"
                    fill="#cbcbcb"
                  />
                  <path
                    d="m224 416v32l-16 40h32l16-40v-26l-24-30z"
                    fill="#c38325"
                  />
                  <path
                    d="m112 408-27.095 20.321a8 8 0 0 0 -2.628 9.372l13.723 34.307 24-8-8-24 16-16z"
                    fill="#c38325"
                  />
                  <path
                    d="m400 256v-98.559a18 18 0 0 0 -3.014-9.971l-20.986-31.54h-40l8 16-23.768 32.733a27.249 27.249 0 0 0 -3.8 24.629 27.25 27.25 0 0 0 13.668 15.756l5.9 2.952v48z"
                    fill="#ff6268"
                  />
                  <path
                    d="m365.933 175.822 18.067 48.178-2.683 38.78-9.317 17.22 16.425 14.606 19.575-3.606 8-75-18.247-51.752a16.931 16.931 0 0 0 -21.942-10.212 16.932 16.932 0 0 0 -9.878 21.786z"
                    fill="#fdc9a6"
                  />
                  <path d="m432 456v24h32l16-40-24-24z" fill="#683b0d" />
                  <path
                    d="m328 59.93v32a8 8 0 0 0 8 8h8v16h32v-16l8-24h-16l-8-16z"
                    fill="#fdc9a6"
                  />
                  <path
                    d="m328 59.93-3.13-9.389a20.165 20.165 0 0 1 7.945-23.154 20.162 20.162 0 0 1 22.37 0l12.815 8.543h14.774a14.928 14.928 0 0 1 13.352 8.252 14.928 14.928 0 0 1 -.931 14.956l-11.195 16.792h-16l-8-16z"
                    fill="#683b0d"
                  />
                  <path
                    d="m264 344a36.612 36.612 0 0 0 8.845-37.466l-.845-2.534 12.172 3.043a32.3 32.3 0 0 1 23.836 25 32.3 32.3 0 0 1 -12.291 32.171l-15.717 11.786z"
                    fill="#c38325"
                  />
                  <path
                    d="m64 320-16 8-8 16-16 8 16 32 32-8 24 8 4.032 16.127a32 32 0 0 0 19.16 21.95l24.808 9.923v16l-16 40h32l16-32v-24l48-16 8-24 32 40 27 16 14.372 40h22.628l-8-56-24-24v-16.4a49.1 49.1 0 0 0 -18.427-38.34 78.763 78.763 0 0 0 -49.2-17.26h-14.773a78.758 78.758 0 0 0 -11.138.792l-32.231 4.6a78.007 78.007 0 0 1 -35.7-3.219l-30.531-10.173-24-32z"
                    fill="#ea9d2d"
                  />
                  <path
                    d="m245.66 277.66c-.49.49-112.05 64.35-112.05 64.35l-30.95 46.43a8 8 0 1 1 -13.32-8.88l32-48a8.08 8.08 0 0 1 2.69-2.51l110.1-62.92z"
                    fill="#0292c9"
                  />
                  <circle cx="72" cy="343" fill="#c38325" r="7" />
                </g>
              </svg>
            </label>
          </div>

          {accountType === "pet" ? (
            <>
              <Form.Input
                fluid
                icon="male"
                iconPosition="left"
                placeholder="First Name"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                name="firstName"
              />
              <Form.Input
                fluid
                icon="male"
                iconPosition="left"
                placeholder="Last Name"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                name="lastName"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail Address"
                onChange={e => setEmail(e.target.value)}
                value={email}
                name="email"
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone"
                onChange={e => setPhone(e.target.value)}
                value={phone}
                name="phone"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </>
          ) : (
            <>
              <Form.Input
                fluid
                icon="hospital"
                iconPosition="left"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                value={name}
                name="name"
              />
              <Form.Input
                fluid
                icon="address card"
                iconPosition="left"
                placeholder="Address"
                onChange={e => setAddress(e.target.value)}
                value={address}
                name="address"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail Address"
                onChange={e => setEmail(e.target.value)}
                value={email}
                name="email"
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone"
                onChange={e => setPhone(e.target.value)}
                value={phone}
                name="phone"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </>
          )}

          <div className="buttons">
            <Link to="/">
              <Button className="cancelBtn" color="red">
                CANCEL
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="signupBtn"
                content="SIGNUP"
                labelPosition="right"
                icon="checkmark"
                positive
                onClick={handleSubmit}
                disabled={!validateCredentials()}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
