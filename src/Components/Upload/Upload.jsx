import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.css';
import logo from './logo.png'; 

// Header Component
const Header = ({ username, handleLogout }) => {
  return (
    <div className='header'>
      <div className="header-left">
        <img src={logo} alt="logo" />
        <h2>CuriumLife</h2>
      </div>
      <div className="header-right">
        <p>Welcome, {username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export const Upload = () => {
  const username = "John"; // Replace with actual username or fetch from state
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing local storage)
    // Then navigate to the login page
    navigate('/login');
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <Header username={username} handleLogout={handleLogout} />
      <div className='wrapper'>
        <form>
          <h1>Upload Image</h1>
          <div className="input-box">
            <input
              type="file"
              accept="image/*"
              id="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="file" className="custom-file-upload">
              {selectedFile ? selectedFile.name : "Click here to select the image"}
            </label>
          </div>
          <button type="submit">Click here to Upload the image</button>
        </form>
      </div>
    </div>  
  );
};

export default Upload;
