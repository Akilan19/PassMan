import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Pin from './Pin';
import Passw from './Passw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/pin" element={<Pin />}/>
        <Route path="/Passw" element={<Passw />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
