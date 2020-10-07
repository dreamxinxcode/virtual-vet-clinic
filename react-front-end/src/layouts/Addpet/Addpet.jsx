import React from "react";
import "./Addpet.scss";
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

function Addpet() {
  const [typeID, setTypeID] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [image, setImage] = React.useState("");

  const validateCredentials = () => {
    return name.length > 0 && age.length > 0 && gender && breed.length > 0;
  };

  const handleSubmit = () => {
    const pet = {
      type_id: typeID,
      name: name,
      age: age,
      gender: gender,
      breed: breed,
      weight: weight,
      info: info,
      image: image,
    };

    axios
      .post("/users/addpet", pet)
      .then((res) => {
        console.log("PET:", pet);
        // localStorage.setItem("userName", res[0].data.user.email);
        // props.setLogStatus(true);
        console.log("RECIEVED pet details from BE", res[0].data);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  return (
    <div className="wrapper wrapper2">
      <div className="register-form form2">
        <h2 className="signup-header">Information about Pet</h2>
        <div className="main-add">
          <select
            onChange={(e) => setTypeID(Number(e.target.value))}
            name="typeID"
            id="typeID"
          >
            <option value="" disabled selected>
              Select an animal type...
            </option>
            <option value="1">Bird</option>
            <option value="2">Cat</option>
            <option value="3">Dog</option>
            <option value="4">Fish</option>
            <option value="5">Reptile</option>
          </select>

          <Form.Input
            fluid
            icon="eye"
            iconPosition="left"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
          />
          <Form.Input
            fluid
            icon="clock"
            iconPosition="left"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            name="age"
          />
          <select
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            id="gender"
          >
            <option value="" disabled selected>
              Select a gender...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <Form.Input
            fluid
            icon="bug"
            iconPosition="left"
            placeholder="Breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
            name="breed"
          />
          <Form.Input
            fluid
            icon="balance scale"
            iconPosition="left"
            placeholder="Weight"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            name="weight"
          />
          <Form.Input
            fluid
            icon="info circle"
            iconPosition="left"
            placeholder="Info"
            onChange={(e) => setInfo(e.target.value)}
            value={info}
            name="info"
          />
          <Form.Input
            fluid
            icon="images"
            iconPosition="left"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            name="image"
          />
          <div className="buttons buttons2">
            <Link to="/dashboard">
              <Button className="cancelBtn cancelBtn2" color="red">
                CANCEL
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="signupBtn addBtn"
                content="ADD A PET"
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
}

export default Addpet;
