import React from 'react'
import {useNavigate, NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState , useEffect} from "react";
import Axios from "axios";
import Login from './Login';
import './Passw.css'

function Passw() {

    const location=useLocation();
    const navigate = useNavigate();

    console.log(location.state);
    let ans = location.state;
    
    let ans1 = "";
    let ans2 = "";

    let i = 0;
    for(i=0 ; ans[i]!="~" ; i++)
    {
        ans1 = ans1 + ans[i];
    }
    console.log(ans1);

    i = i + 1;
    while(i<ans.length)
    {
        ans2 = ans2 + ans[i];
        i++;
    }
    console.log(ans2);

    const fun3 = () =>{
        navigate("/App" , {state: ans2});
    }

  return (
    <div className="out1">
        <div className="in1">
            Your Password is {ans1}
        </div>
        <div>
            <button className="b1t" onClick={fun3}>Go back</button>
        </div>
    </div>
  )
}

export default Passw