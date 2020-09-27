import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Navigation from "./layouts/Navigation";
import Intro from "./components/Intro";
import Search from "./layouts/Search";
import Covid from "./layouts/Covid";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// homepage
// dashboard
// book-appointment
// clinic info
// patient info (clinic)
// pet info (clinic)

export default function App(props) {
  const [message, setMessage] = useState("Hi");

  const fetchData = () => {
    axios
      .get("/api/names") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
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
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Intro />
    <Search />
    <Covid />
  </div>
);
