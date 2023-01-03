import React, { Component } from 'react';
import './App.css';
import Blog from './components/Blog';
import DonaterSignUp from './components/DonaterSignUp';
import Home from './components/Home';
import NgoSignup from './components/NgoSignup';
import {
  BrowserRouter, Routes, Switch,
  Route, Redirect,
} from "react-router-dom";

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/NgoSignup" element={<NgoSignup/>} />
          <Route exact path="/DonaterSignUp" element={<DonaterSignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
