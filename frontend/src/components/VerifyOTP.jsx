// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/verifyotp.css";

// function VerifyOTP() {
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email; // ✅ Get email from state

//   useEffect(() => {
//     if (!email) {
//       alert("Email not found! Redirecting to register.");
//       navigate("/register"); // Redirect if email is not passed
//     }
//   }, [email, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("✅ OTP verified successfully! Please login.");
//         navigate("/login"); // Redirect to login page after success
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("❌ Something went wrong. Try again!");
//     }
//   };

//   return (
//     <div className="verify-page">
//       <div className="form-container">
//         <h2>Verify OTP</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit">Verify OTP</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default VerifyOTP;



import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/verifyotp.css"; // ✅ Import CSS

function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(""); // ❌ Handle error message
  const [success, setSuccess] = useState(""); // ✅ Handle success message
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // ✅ Get email from state

  // ✅ Redirect to register if email not passed
  useEffect(() => {
    if (!email) {
      setError("⚠️ Email not found! Redirecting to register...");
      setTimeout(() => navigate("/register"), 2000); // Redirect after 2 seconds
    }
  }, [email, navigate]);

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("✅ OTP verified successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      } else {
        setError(data.message || "❌ Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("❌ Something went wrong. Try again later!");
    }
  };

  return (
    <div className="verify-otp-page">
      <div className="form-container">
        <h2>Verify OTP</h2>
  
        {/* ✅ Show success or error messages */}
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
  
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      </div>
    </div>
  );
}  

export default VerifyOTP;
