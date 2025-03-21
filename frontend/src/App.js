import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import VerifyOTP from "./components/VerifyOTP";
import Profile from "../src/components/Profile";
import Navbar from "../src/components/Navbar"; // ✅ Corrected path
import Home from "../src/components/Home";


function App() {
  return (
    <Router>
      {/* ✅ Navbar is now always displayed */}
      <Navbar />  
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/home" element={<Home/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
