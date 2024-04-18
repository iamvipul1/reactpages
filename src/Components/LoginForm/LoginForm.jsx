import React from 'react';
import './LoginForm.css';
import logo from './logo.png'; 
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
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

export const LoginForm = () => {
  return (
    <div>
      <Header />
      <div className='wrapper'>
      <form action=''>
      <h1>Login</h1>
      <div className="input-box">
        <input type='text' placeholder='Username' required />
        <FaUser className='icon' />
      </div>
      <div className="input-box">
        <input type='password' placeholder='Password' required />
        <FaLock className='icon' />
      </div>

      <div className="remember-forgot">
        <label><input type="checkbox" />Remember me</label>
        <a href="#">Forgot password?</a>
      </div>

      <button type="submit">Login</button>

      <div className="register-link">
        <p>Don't have an Account? <Link to="/register">Register</Link> </p>
      </div>
    </form>
      </div>
      <RightSideBox/>
      </div>  
  );
};


export default LoginForm;