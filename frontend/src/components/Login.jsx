import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setSuccess("Login Successful! Redirecting to Home...");
        setTimeout(() => navigate("/home"), 1500);
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Welcome Back!</h2>
        <p>Login to continue your journey</p>
        
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
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={error ? "error-input" : ""}
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className={error ? "error-input" : ""}
            />
          </div>

          <button type="submit" className={`login-button ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              'LOGIN'
            )}
          </button>
        </form>

        <div className="or-divider">
          <span>OR</span>
        </div>

        <button className="register-btn" onClick={() => navigate("/register")}>
          Create New Account
        </button>

        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/resend-activation">Resend Activation</a>
          <a href="/help">Help</a>
        </div>
      </div>
    </div>
  );
}

export default Login;


