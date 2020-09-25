import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Contentt from './components/Contentt';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// homepage
// dashboard
// book-appointment
// clinic info
// patient info (clinic)
// pet info (clinic)



export default function App(props) {
  
  const [message, setMessage] = useState('Hi');

  const fetchData = () => {
    axios.get('/api/names') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      setMessage(response.data.names[0].name);
    });
  }

    return (
      <Router>

      <div className="App">

        <Navigation/>

        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/content' exact component={Contentt}></Route>
        </Switch>

      </div>

      </Router>
    );
}

const Home = () => (
  <div>
    <h1>Homepage</h1>     
  </div>
)