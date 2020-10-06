import React, { useState, useEffect } from "react";
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
  const [logStatus, setLogStatus] = useState(false);
  useEffect(() => {
    axios.get("/users/me").then((res) => {
      console.log(res.data);
      if (res.data.user) setLogStatus(true);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          {logStatus ? (
            <Route path="/calendar" exact component={myCalendar}></Route>
          ) : null}
          {logStatus ? (
            <Route path="/dashboard" exact component={Dashboard}></Route>
          ) : null}
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
