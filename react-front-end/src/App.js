import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Navigation from "./layouts/Navigation/Navigation";
import Home from "./layouts/Home";
import myCalendar from "./layouts/Calendar/Calendar";
import Dashboard from "./layouts/Dashboard/Dashboad";
import Footer from "./layouts/Footer";
import VideoCall from "./layouts/VideoCall";
import Register from "./layouts/Register/Register";
import Clinics from "./layouts/Clinics/Clinics";
import Addpet from "./layouts/Addpet/Addpet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  const [message, setMessage] = useState("Hi");

  const fetchData = () => {
    axios
      .get("/api/names") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        setMessage(response.data.names[0].name);
      });
  };

  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/calendar" exact component={myCalendar}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/appointment" exact component={VideoCall}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/addpet" exact component={Addpet}></Route>
          <Route path="/clinics" exact component={Clinics}></Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
