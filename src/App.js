import './App.css';
import Header from '../src/Header';
import React, { useEffect, useState } from 'react';
import Home from '../src/Home';
import NavBar from '../src/NavBar';
import Footer from '../src/Footer';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
