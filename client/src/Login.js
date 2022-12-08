import React from 'react';
import pass from './password.png';
import './Login.css';
import {useState , useEffect} from "react";
import Axios from "axios";
import {useNavigate, NavLink} from "react-router-dom";
import App from './App';

function Login() {

  const navigate = useNavigate();
  const [usname , Setusname] = useState("");
  const [passname , Setpassname] = useState("");

  const[userList , setuserList] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/userdet").then((response) => {
      setuserList(response.data);
    });
  },[]);  

  const putdata = () => {
    let count=0;
      for(let i=0;i<userList.length;i++) {
        if(userList[i].username === usname)
        {
          if(userList[i].password === passname)
          {
            count=1;
          }
        }
        if(count===1){
          navigate("/App",{state: usname});
        }
        else
        {
          navigate("/Login");
        }
      };
  };


  return (
  <div className="outer">
        <div className="inner">
            <div className="upper">
                <img src={pass} />
                <div className="up"> Pass-Man </div>
            </div>
            <div className="nam">Login</div>
            <div className="nam1">Don't have an account? <NavLink to="/Signup">Click here</NavLink></div>
            <input type="text" className="uname" placeholder="Enter Username" onChange={(event) => {
              Setusname(event.target.value);
            }}/>
            <input type="password" className="pass" placeholder="Enter Password" onChange={(event) => {
              Setpassname(event.target.value);
            }}/> 
            <button className="but" onClick={putdata}>Login</button>
        </div>
    </div>
  );
};

export default Login;