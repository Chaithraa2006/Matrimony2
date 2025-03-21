// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/login.css"; // Import CSS for styling

// // function Login() {
// //   const [formData, setFormData] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState(""); // ✅ Add success message state
// //   const navigate = useNavigate();

// //   // ✅ Handle input changes
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // ✅ Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess(""); // Clear previous messages

// //     try {
// //       const response = await fetch("http://localhost:5000/api/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });
      

// //       const data = await response.json(); // ✅ Get API response
// //       console.log("API Response:", data); // ✅ Debug API response

// //       if (response.ok) {
// //         // ✅ Store user details in localStorage
// //         localStorage.setItem("user", JSON.stringify(data.user));

// //         // ✅ Redirect to Profile Page immediately
// //         navigate("/profile"); // No delay, direct navigation
// //       } else {
// //         setError(data.message || "Invalid credentials. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error); // ✅ Debug error
// //       setError("Something went wrong. Try again!");
// //     }
// //   };

// //   return (
// //     <div className="login-page">
// //       <div className="form-container">
// //         <h2>Login</h2>
// //         {error && <p className="error-message">{error}</p>}
// //         {success && <p className="success-message">{success}</p>} {/* ✅ Show success message */}
        
// //         <form onSubmit={handleSubmit}>
// //           {/* ✅ Email Field */}
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             onChange={handleChange}
// //             required
// //             autoComplete="email" // 🎉 Autocomplete added for email
// //           />

// //           {/* ✅ Password Field */}
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             onChange={handleChange}
// //             required
// //             autoComplete="current-password" // 🎉 Autocomplete added for password
// //           />

// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/login.css"; // ✅ Import CSS for styling

// function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(""); // ✅ Add success message
//   const navigate = useNavigate();

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       // ✅ API Request to Login Route
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       // ✅ Check if response is OK
//       if (!response.ok) {
//         const errorData = await response.json(); // Extract error message
//         throw new Error(errorData.message || "Invalid credentials!");
//       }

//       // ✅ Get API Response Data
//       const data = await response.json();
//       console.log("API Response:", data);

//       // ✅ Store user details in localStorage
//       localStorage.setItem("user", JSON.stringify(data.user));

//       // ✅ Show success message and redirect to Profile
//       setSuccess("Login Successful! Redirecting to profile...");
//       setTimeout(() => navigate("/profile"), 1000);
//     } catch (error) {
//       console.error("Error:", error.message);
//       setError(error.message || "Something went wrong. Please try again!");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="form-container">
//         <h2>Login</h2>
//         {/* ✅ Show error message */}
//         {error && <p className="error-message">{error}</p>}
//         {/* ✅ Show success message */}
//         {success && <p className="success-message">{success}</p>}
        
//         <form onSubmit={handleSubmit}>
//           {/* ✅ Email Field */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//             autoComplete="email" // 🎉 Autocomplete added for email
//           />

//           {/* ✅ Password Field */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//             autoComplete="current-password" // 🎉 Autocomplete added for password
//           />

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // ✅ Import CSS for styling

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    image: null, // ✅ Add image field
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // ✅ Add success message
  const navigate = useNavigate();

  // ✅ Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] }); // ✅ Handle image separately
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // ✅ Create FormData to send image and data
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      // ✅ Correct API Request with FormData
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: formDataToSend, // ✅ FormData used correctly
      });

      // ✅ Check if response is OK
      if (!response.ok) {
        const errorData = await response.json(); // Extract error message
        throw new Error(errorData.message || "Invalid credentials!");
      }

      // ✅ Get API Response Data
      const data = await response.json();
      console.log("API Response:", data);

      // ✅ Store user details in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Show success message and redirect to Profile
      setSuccess("Login Successful! Redirecting to profile...");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message || "Something went wrong. Please try again!");
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

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* ✅ Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            autoComplete="email"
          />

          {/* ✅ Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            autoComplete="current-password"
          />

          {/* ✅ Image Upload Field */}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
