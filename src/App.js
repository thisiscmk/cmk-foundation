import './App.css';
import Header from '../src/Header';
import React, { useEffect, useState } from 'react';
import Home from '../src/Home';
import Footer from '../src/Footer';
import AboutUs from '../src/About Us';
import CovidVaccine from '../src/CovidVaccine';
import SolarRadio from '../src/SolarRadio';
import Goma from "../src/GomaNews";
import Rwanda from "../src/Rwanda";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    
    
    <Router>
    <div className="App">      
      <Header/>
      <Switch>
      {/* <Redirect to = "/home" render={props => (<Home {...props}/>)}/> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/whoweare" component={AboutUs} />
      <Route exact path="/talking-about-vaccine" component={CovidVaccine} />
      <Route exact path="/solar-powered-radios" component={SolarRadio} />
      <Route exact path="/crisis-in-goma" component={Goma} />
      <Route exact path="/milestone-achievement-in-rwanda" component={Rwanda} />



      {/* <Route path="/" exact render={props => (<Home />)} /> */}
      
      </Switch>
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
