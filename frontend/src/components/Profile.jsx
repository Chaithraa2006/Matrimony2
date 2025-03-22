import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css"; // ✅ Import CSS for Profile Page

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false); // ✅ State for showing/hiding modal
  const [logoutMessage, setLogoutMessage] = useState(""); // ✅ State for logout message
  const navigate = useNavigate();

  // ✅ Check if user is logged in and load user data
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser)); // ✅ Set user data if available
    } else {
      navigate("/login"); // 🔥 Redirect to login if not authenticated
    }
  }, [navigate]);

  // ✅ Handle Logout with Modal Confirmation
  const handleLogout = () => {
    setLogoutMessage("Are you sure you want to log out?"); // ✅ Set logout confirmation message
    setShowModal(true); // ✅ Show modal
  };

  // ✅ Confirm Logout
  const confirmLogout = (choice) => {
    if (choice === "yes") {
      localStorage.removeItem("user"); // ✅ Clear user data
      setShowModal(false);
      setLogoutMessage("✅ Logout successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); // 🔥 Redirect after 2 seconds
    } else {
      setShowModal(false); // ❌ Hide modal if user cancels
    }
  };

  // ❗ Show loading while checking user data
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Welcome, {user.name}!</h2>

        {/* ✅ Profile Image Moved to Top */}
        {user.image ? (
          <img
            src={`http://localhost:5000/uploads/${user.image}`} // ✅ Correct path to display image
            alt="Profile"
            className="profile-image"
          />
        ) : (
          <p>No profile image uploaded.</p>
        )}

        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Password:</strong> {user.password}
        </p>

        {/* ✅ Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        {/* ✅ Logout Confirmation Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>{logoutMessage}</p>
              <div className="modal-actions">
                <button className="confirm-btn" onClick={() => confirmLogout("yes")}>
                  Yes
                </button>
                <button className="cancel-btn" onClick={() => confirmLogout("no")}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
