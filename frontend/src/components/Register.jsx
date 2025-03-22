// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/register.css";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     image:"",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setFormData({ ...formData, image: e.target.files[0] }); // ✅ Handle image separately
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("email", formData.email);
//       formDataToSend.append("password", formData.password);
//       formDataToSend.append("phone", formData.phone);
//       if (formData.image) {
//         formDataToSend.append("image", formData.image); // ✅ Upload image
//       }
  
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         body: formDataToSend, // ✅ Send FormData (not JSON)
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         alert("Register successful! Redirecting to profile...");
//         navigate("/verify-otp", { state: { email: formData.email } });
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("❌ Something went wrong!");
//     }
//   };
  
  
//   return (
//     <div className="register-page">
//       <div className="form-container">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             onChange={handleChange}
//             required
//           />
//               {/* ✅ Image Upload Field */}
//               <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//           />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"; // ✅ Import CSS for styling

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    image: "",
  });

  const [error, setError] = useState(""); // ❌ Handle error messages
  const [success, setSuccess] = useState(""); // ✅ Handle success messages
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
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("phone", formData.phone);
      if (formData.image) {
        formDataToSend.append("image", formData.image); // ✅ Upload image
      }

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formDataToSend, // ✅ Send FormData (not JSON)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("✅ Register successful! Redirecting to OTP verification..."); // 🎉 Show success message
        setTimeout(() => navigate("/verify-otp", { state: { email: formData.email } }), 2000); // Redirect after 2 seconds
      } else {
        setError(data.message || "❌ Registration failed. Please try again."); // Show error if failed
      }
    } catch (error) {
      console.error("Error:", error);
      setError("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <h2>Register</h2>

        {/* ✅ Show success or error messages */}
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />
          {/* ✅ Image Upload Field */}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
