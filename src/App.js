import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm'; // Corrected path
import Register from './Components/Register/Register';
import Upload from './Components/Upload/Upload';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />

      </Routes>
    </Router>
  );
}

export default App;
