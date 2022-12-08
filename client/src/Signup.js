import React from 'react';
import pass from './password.png';
import {NavLink} from "react-router-dom";
import './Signup.css';
import {useState, useEffect} from "react";
import Axios from "axios";

function Signup() {

  const [usname , Setusname] = useState("");
  const [passc , Setpassc] = useState("");
  const [pinn , Setpinn] = useState("");

  const putdata = () => {
    Axios.post("http://localhost:3001/puttable", {usname: usname , passc: passc , pinn: pinn}).then(() => {
    });
  };

  return (
    <div className="outer1">
        <div className="inner1">
            <div className="upper">
                <img src={pass} />
                <div className="up"> Pass-Man </div>
            </div>
            <div className="nam112">Sign-Up</div>
            <div className="nam111">Already have an account <NavLink to="/Login">Click here</NavLink></div>
            <input type="text" className="uname1" placeholder="Enter Username" onChange={(event) => {
              Setusname(event.target.value);
            }}/>
            <input type="password" className="pass1" placeholder="Enter Password" onChange={(event) => {
              Setpassc(event.target.value);
            }}/>
            <input type="text" className="pin11" placeholder="Enter Pin" onChange={(event) => {
              Setpinn(event.target.value);
            }}/>

            <NavLink to="/Login">
              <button className="but1" onClick={putdata}>SignUp</button>
            </NavLink>
            
        </div>
    </div>
  );
};

export default Signup;