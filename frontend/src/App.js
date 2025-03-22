import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import VerifyOTP from "./components/VerifyOTP";
import Profile from "../src/components/Profile";
import Navbar from "../src/components/Navbar"; // ✅ Correct path
import Home from "../src/components/Home";

function App() {
  return (
    <Router>
      {/* ✅ Navbar correctly placed outside Routes */}
      <Navbar />
      
      {/* ✅ Define Routes properly */}
      <Routes>
        {/* ✅ Redirect "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* ✅ Define all other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* ✅ 404 Route for unmatched paths */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
