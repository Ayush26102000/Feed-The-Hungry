import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DonaterSignUp from './components/DonaterSignUp';
import Home from './components/Home';
import NgoSignup from './components/NgoSignup';

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
