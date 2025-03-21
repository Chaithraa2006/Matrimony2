import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css"; // ✅ Import CSS for Profile Page

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // 🔥 Redirect to login if not authenticated
    }
  }, [navigate]);

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // 🔥 Redirect to login after logout
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button onClick={handleLogout}>Logout</button> {/* ✅ Logout Button */}
      </div>
    </div>
  );
};

export default Profile;
