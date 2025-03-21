
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // ✅ Import CSS for styling

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // ✅ Add success message
  const navigate = useNavigate();

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API Response:", data); // ✅ Debug API response

      if (response.ok) {
        // ✅ Store user details in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Show success message and redirect to Profile
        setSuccess("Login Successful! Redirecting to profile...");
        setTimeout(() => navigate("/profile"), 1000); // 1-second delay for user feedback
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error); // ✅ Debug error
      setError("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        {/* ✅ Show error message */}
        {error && <p className="error-message">{error}</p>}
        {/* ✅ Show success message */}
        {success && <p className="success-message">{success}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* ✅ Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            autoComplete="email" // 🎉 Autocomplete added for email
          />

          {/* ✅ Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            autoComplete="current-password" // 🎉 Autocomplete added for password
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
