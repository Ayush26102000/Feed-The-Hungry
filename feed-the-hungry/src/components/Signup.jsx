import React, { useState } from "react";
import SocialSignin from "./SocialSignin";
// import { Link } from "react-router-dom";
import './Signup.css';
import {auth} from '../Firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');




  const register = async () => {
      try{  const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
        console.log(user);
      }
      catch(error){
          console.log(error.message);
      }
    
  };



  return (
    <div className="main-container">
      <h2 className="Signup-container">Feed the Hungry</h2>
      <h3 className=" text-center">Signup</h3>

      <form className="container">
        <div className="mb-3">
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="Email...."
            onChange={(event)=>{
              setRegisterEmail(event.target.value);}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Email...."
            onChange={(event)=>{
              setRegisterPassword(event.target.value);}}
          />
        </div>

        <button onClick={register}>
          Signup
        </button>
      </form>

      <SocialSignin />
    </div>
  );
};

export default Signup;
