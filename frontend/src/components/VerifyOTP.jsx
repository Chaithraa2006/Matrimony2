import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/verifyotp.css";

function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // ✅ Get email from state

  useEffect(() => {
    if (!email) {
      alert("Email not found! Redirecting to register.");
      navigate("/register"); // Redirect if email is not passed
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ OTP verified successfully! Please login.");
        navigate("/login"); // Redirect to login page after success
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("❌ Something went wrong. Try again!");
    }
  };

  return (
    <div className="verify-page">
      <div className="form-container">
        <h2>Verify OTP</h2>
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
