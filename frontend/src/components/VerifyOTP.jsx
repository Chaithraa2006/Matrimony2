import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/verifyotp.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("OTP verified successfully!");
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("New OTP sent successfully! Please check your email.");
      } else {
        setError(data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) {
    return <div>Invalid access. Please register first.</div>;
  }

  return (
    <div className="verify-otp-container">
      <div className="verify-otp-box">
        <h2>Verify Your Email</h2>
        <p>Please enter the OTP sent to your email</p>
        
        {error && (
          <div className="message error-message">
            <span className="icon">❌</span>
            <span className="message-text">{error}</span>
          </div>
        )}
        
        {success && (
          <div className="message success-message">
            <span className="icon">✅</span>
            <span className="message-text">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength="6"
            />
          </div>

          <button type="submit" className={`verify-button ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              'Verify OTP'
            )}
          </button>
        </form>

        <button 
          className="resend-button" 
          onClick={handleResendOTP}
          disabled={isLoading}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
