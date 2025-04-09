import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import VerifyOTP from "./components/VerifyOTP";
import Profile from "../src/components/Profile";
import Navbar from "../src/components/Navbar"; 
import Home from "../src/components/Home";
import GooglePlayPage from "../src/components/GooglePlayPage";
import AppStorePage from "../src/components/AppStorePage";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import MembershipPlans from "./components/MembershipPlans";
import Help from "./components/Help";
import Footer from "./components/Footer";
import WhyLoveVivah from "./components/WhyLoveVivah"; 
import Blog from "./components/Blog";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Services from "./components/Services";
import SuccessStoryDetails from "./components/SuccessStoryDetails";
import FreeHoroscope from "./components/FreeHoroscope";


function App() {
  return (
    <Router>
      {/* ✅ Navbar correctly placed outside Routes */}
      {/* <Navbar /> */}
      
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
        <Route path="/google-play" element={<GooglePlayPage />} />
        <Route path="/app-store" element={<AppStorePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/membership" element={<MembershipPlans />} />
        <Route path="/help" element={<Help />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/whylovevivah" element={<WhyLoveVivah />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Services />} />
        <Route path="/success-story/:coupleName" element={<SuccessStoryDetails />} />
        <Route path="/freeHoroscope" element={<FreeHoroscope />} />

        
        {/* ✅ 404 Route for unmatched paths */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
