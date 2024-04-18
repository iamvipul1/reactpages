import React from 'react';
import './Register.css';
import logo from './logo.png'; 
import { FaUser, FaLock } from "react-icons/fa";

// Header Component
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <h2>CuriumLife</h2>
    </div>
  );
};

const RightSideBox = () => {
  return (
    <div className="right-side-box">
      <h2>Welcome to CuriumLife!</h2>
    </div>
  );
};

export const Register = () => {
  return (
    <div>
      <Header />
      <div className='wrapper'>
      <form action=''>
      <h1>Register</h1>
      <div className="input-box">
        <input type='text' placeholder='Username' required />
        <FaUser className='icon' />
      </div>
      <div className="input-box">
        <input type='password' placeholder='Password' required />
        <FaLock className='icon' />
      </div>
      <div className="input-box">
            <select className="select-box">
              <option value="normal">Normal User</option>
              <option value="surgeon">Surgeon</option>
              <option value="radiologist">Radiologist</option>
              <option value="teleradiologist">Teleradiologist</option>
            </select>
          </div>
      <button type="submit">Register</button>
    </form>
      </div>
      <RightSideBox/>
      </div>  
  );
};


export default Register;