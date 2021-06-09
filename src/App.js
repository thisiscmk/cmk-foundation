import './App.css';
import Header from '../src/Header';
import React, { useEffect, useState } from 'react';
import Home from '../src/Home';
import NavBar from '../src/NavBar';
import Footer from '../src/Footer';
import AboutUs from '../src/About Us';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    
    
    <Router>
    <div className="App">      
      <Header/>
      <Switch>
      {/* <Redirect to = "/home" render={props => (<Home {...props}/>)}/> */}
      <Route exact path="/home" render={props => (<Home {...props}/>)} />
      <Route exact path="/whoweare" render={props => (<AboutUs {...props}/>)} />
      {/* <Route path="/" exact render={props => (<Home />)} /> */}
      
      </Switch>
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
